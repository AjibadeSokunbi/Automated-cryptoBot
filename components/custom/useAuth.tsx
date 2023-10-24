"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { signIn } from "next-auth/react";
import { type FieldValues, useForm } from "react-hook-form";

import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "axios";
import { UserBotData } from "@/utils/types";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type Inputs = {
  email: string;
};

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const pathname = usePathname();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const searchParams = useSearchParams();

  const metabotURL = "http://127.0.0.1:8000/";
  const metabotApiKey = "hey";

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json", // Set the content type for the request
  });
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  async function onSubmit(data: FieldValues) {
    setIsLoading(true);

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/",
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }

    const requestBody = searchParams?.get("ref")
      ? JSON.stringify({
          email: data.email.toLowerCase(),
          referrer: searchParams?.get("ref"),
        })
      : JSON.stringify({
          email: data.email.toLowerCase(),
        });

    const requestOptions: RequestInit = {
      method: "POST",
      headers,
      body: requestBody,
    };

    const requestOptions2: RequestInit = {
      method: "GET",
      headers,
    };

    const response2 = await fetch(
      `${metabotURL}user/${data.email.toLowerCase()}`,
      requestOptions2
    );

    const resD: UserBotData = await response2.json();
    // console.log("User:", resD);

    if (!resD?.data?._id && signInResult?.ok) {
      const reg = await fetch(`${metabotURL}user/`, requestOptions);
      const regC = await reg.json();
      // console.log("reg successful:", regC);
    }
    // console.log(signInResult?.url)
    if (signInResult?.ok) {
      const sign = await fetch(`${metabotURL}auth/login`, requestOptions);
      const signC = await sign.json();
      // console.log("Login successful:", signC);
    }

    toast({
      title: "Check your email",
      variant: "default",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              className=" bg-background1 focus-none"
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <BiLoaderAlt className="mr-2 h-4 w-4 animate-spin" />}
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
