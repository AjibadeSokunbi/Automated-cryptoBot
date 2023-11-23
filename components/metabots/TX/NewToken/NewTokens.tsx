import { NewTokenType } from "@/utils/types";
import { FC, Suspense } from "react";
import NewTokenTable from "./NewTokenTable";
import { ImSpinner2 } from "react-icons/im";
import Stack from "../../../custom/Stack";
import NewTokenHead from "./NewTokenHead";

interface Props {}

export const dynamic = 'force-dynamic'
const NewTokens: FC<Props> = async ({}) => {
  const res3 = await fetch("https://test2-umber-phi.vercel.app/api/scam",      { next: { revalidate: 10 }});

  const NewData = await res3.json();


  return (
    <>
      {" "}
     <NewTokenHead/>
      <NewTokenTable NewData={NewData} />
    </>
  );
};

export default NewTokens;
