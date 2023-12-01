import Link from "next/link";
import React from "react";

interface Props {}

const settings = () => {
  return (
    <Link
      className="underline text-yellow-600"
      target="_blank"
      href={`https://.etherscan.io/tx/7788`}
    >
      Click to view your Transaction Status
    </Link>
  );
};

export default settings;
