import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Client } from "postmark";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { siteConfig } from "./site";
import axios from "axios";
import { UserBotData } from "@/utils/types";
import { PrismaClient } from "@prisma/client";
import { getUserBalance } from "@/utils/scripts/getBalaceEth";

const prisma = new PrismaClient();
// const db = prisma
const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN as string);
const metabotURL = process.env.METABOT_URL as string;

export const metabotAPI = axios.create({
  baseURL: metabotURL,
  withCredentials: true,
});

const requestOptions: RequestInit = {
  method: "GET",
  credentials: "include",
  next: { revalidate: 50, tags: ["sign"] },
};

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const response2 = await fetch(
          `${metabotURL}user/${identifier}`,
          requestOptions
        );
        const user: UserBotData = await response2?.json();

        const templateId = user.data._id
          ? process.env.POSTMARK_SIGN_IN_TEMPLATE
          : process.env.POSTMARK_ACTIVATION_TEMPLATE;
        if (!templateId) {
          throw new Error("Missing template id");
        }

        const result = await postmarkClient.sendEmailWithTemplate({
          TemplateId: parseInt(templateId),
          To: identifier,
          From: provider.from as string,
          TemplateModel: {
            name: identifier,
            action_url: url,
            product_name: siteConfig.name,
          },
          Headers: [
            {
              Name: "X-PM-Message-Stream: authentication",
              Value: new Date().getTime() + "",
            },
          ],
        });

        if (result.ErrorCode) {
          throw new Error(result.Message);
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token && session.user) {
        session.user.email = token.email;
      }

      const response2 = await fetch(
        `${metabotURL}user/${token.email}`,
        requestOptions
      );
      const resD: UserBotData = await response2?.json();
      const userWallets = resD.data.wallet;
      const allWalletBalance: string[] = (await Promise.all(
        userWallets.map(getUserBalance)
      )) as string[];

      return {
        ...session,
        wallets: resD?.data?.wallet,
        botUser: resD,
        allWalletBalance,
      };
    },
    async jwt({ token }) {
      return { ...token };
    },
    async signIn({ email }) {
      if (email?.verificationRequest === true) {
        console.log("first signin trigger", email?.verificationRequest);
      } else {
        console.log("second signin trigger", email?.verificationRequest);
      }
      return true;
    },
  },
};
