import { FC } from "react";
import NewTokenTable from "./NewTokenTable";
import NewTokenHead from "./NewTokenHead";
import { newTokensScam } from "@/utils/dataPool";

interface Props {}

export const dynamic = "force-dynamic";
const NewTokens: FC<Props> = async ({}) => {
  const NewData = await newTokensScam();
  return (
    <>
      {" "}
      <NewTokenHead />
      <NewTokenTable NewData={NewData} />
    </>
  );
};

export default NewTokens;
