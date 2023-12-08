import { FC } from "react";
import NewTokenTable from "./NewTokenTable";
import NewTokenHead from "./NewTokenHead";
import { NewPairScam } from "@/utils/dataPool";
import { NewTokenType } from "@/utils/types";

interface Props {}

export const dynamic = "force-dynamic";
const NewTokens: FC<Props> = async ({}) => {
  const NewData = await NewPairScam() as NewTokenType[]
  return (
    <>
      {" "}
      <NewTokenHead />
      <NewTokenTable NewData={NewData} />
    </>
  );
};

export default NewTokens;
