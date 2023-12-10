"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { signOut, useSession } from "next-auth/react";

export default function SignUp() {
  const { data: user } = useSession();

  return (
    <div className="items-center w-auto h-auto gap-3 hidden md:flex lg:flex">
      {!user ? (
        <Link href="/login">
          <Button variant="default" value="Log In" className="w-28 py-1">
            {" "}
            Sign In{" "}
          </Button>
        </Link>
      ) : (
          <Button
            onClick={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/`,
              });
            }}
            variant="default"
            value="Log In"
            className="w-28 py-1"
          >
            {" "}
            Sign Out{" "}
          </Button>

      )}
    </div>
  );
}
