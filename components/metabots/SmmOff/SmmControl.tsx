import { Label } from "@/components/ui/label";
import React, { FC } from "react";
import { handleUserSettings } from "@/utils/formAction/tradeAction";
import { getCurrentUser } from "@/lib/session";
import { ServerDefaultSession } from "@/utils/types";
import SmmSwitch from "./SmmSwitch";
import { revalidatePath, revalidateTag } from "next/cache";
interface Props {
  params: {
    address: string;
  };
}

const SmmControl: FC<Props> = async ({ params }) => {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;

  const smm = user.botdata.data.settings.autogas;
  const pair = params.address;

  const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
  const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;
  const handleUserSettings = async (FormData: FormData) => {
    "use server";
    const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

    const headers = new Headers({
      Authorization: metabotApiKey,
      "Content-Type": "application/json",
    });

    const requestBody = JSON.stringify({
      params: {
        autogas: FormData.get("autoGas") === "on" ? true : false,
      },
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers,
      body: requestBody,
    };

    try {
      const response = await fetch(
        `${metabotURL}user/editSettings`,
        requestOptions
      );
      const res = await response.json();
      console.log(res);
      revalidateTag("user");
      revalidateTag("sign");
      revalidatePath(`/metabots/${pair}`);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex items-center space-x-6">
      <Label
        htmlFor="smm"
        className="text-white text-[10.621px] font-bold font-['Instrument Sans'] leading-3"
      >
        Smart Money Mode
      </Label>
      <form action={handleUserSettings}>
        <SmmSwitch smm={smm} />
      </form>
    </div>
  );
};

export default SmmControl;
