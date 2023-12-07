import { FC } from "react";
import NewTokenTable from "./NewTokenTable";
import NewTokenHead from "./NewTokenHead";

interface Props {}

export const dynamic = 'force-dynamic'
const NewTokens: FC<Props> = async ({}) => {
  const res3 = await fetch("https://test2-umber-phi.vercel.app/api/scam", { cache: 'no-store' });

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
