import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "@/components/custom/useAuth";
import FullContainer from "@/components/custom/FullContainer";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import Stack from "@/components/custom/Stack";
import { Label } from "@/components/ui/label";
import Typography from "@/components/custom/Typography";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Metadapp",
};

export default async function LoginPage() {
  const user = await getCurrentUser();
  // console.log("user:",user);
  if(user?.email) {
    redirect("/")
  }

  return (
    <FullContainer className="">
      <Image
        src="/SignUp.png"
        width={100}
        height={100}
        alt="sign"
        className="absolute w-full h-screen -z-10"
      />
      <Stack
        justifyContent="center"
        height="h-screen"
        alignItems="center"
        width="w-screen"
      >
        <Stack
          width="w-11/12 sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3"
          justifyContent="center"
          alignItems="center"
          sx="bg-slate-950 rounded-2xl"
          flexDirection="col"
          gap={2}
        >
          <Image
            src="/metadapp.png"
            alt="logo"
            className="w-1/3"
            width={100}
            height={100}
          />
          <Stack
            width="w-full px-4"
            alignItems="start"
            justifyContent="start"
            alignContent="start"
            flexDirection="col"
            gap={4}
          >
            <Typography className="text-neutral-200 text-[28px] font-bold mb-4">
              Log In
            </Typography>
            <Label className="align-left items-start" htmlFor="email">
              Email
            </Label>
          </Stack>
  
          <UserAuthForm className="w-full px-4" />
          <p className="text-[#E7E7E7] text-base font-normal leading-7 pb-4">
            <Link href="/register" className="hover:text-brand">
              Don&apos;t have an account?{" "}
              <span className="text-blue-600">Sign Up</span>
            </Link>
          </p>
        </Stack>
      </Stack>
    </FullContainer>
  );
  }  
