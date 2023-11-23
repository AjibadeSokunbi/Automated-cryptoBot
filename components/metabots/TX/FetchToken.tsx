import { getTokenSymbol } from "@/utils/scripts/fetchSymbol";
import React, { FC } from "react";

interface Props {
  tokens: string;
}

const FetchToken: FC<Props> = ({ tokens }) => {
  const fetchT = async (token: string): Promise<string> => {
    const tok = await getTokenSymbol(token);
    return tok;
  };
  return <> {fetchT(tokens)} </>
};

export default FetchToken;
