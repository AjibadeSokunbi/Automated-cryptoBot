"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { type FieldValues, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { BiLoaderAlt } from "react-icons/bi";
import { UserBotData } from "@/utils/types";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type Inputs = {
  email: string;
};

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const { data: user } = useSession();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(true);
  const searchParams = useSearchParams();

  const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  async function onSubmit(data: FieldValues) {
    setIsLoading(true); // Start loading

    const requestOptions2: RequestInit = {
      method: "GET",
    };

    const response2 = await fetch(
      `${metabotURL}user/${data.email.toLowerCase()}`,
      requestOptions2
    );

    const resD: UserBotData = await response2.json();

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/",
    });

    setIsLoading(false);
    setError(false);

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
    const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
    const requestOptions: RequestInit = {
      method: "POST",
      headers: {
        Authorization: key as string,
        "Content-Type": "application/json",
      },
      body: requestBody,
    };

    if (!resD?.data?._id && signInResult?.ok) {
      const reg = await fetch(`${metabotURL}user/`, requestOptions);
      const regC = await reg.json();
    }

    if (signInResult?.ok) {
      const sign = await fetch(`${metabotURL}auth/login`, requestOptions);
      const signC = await sign.json();
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
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email", {
                required: "Please enter an Email",
                validate: (value) => emailRegex.test(value) || "Invalid Email",
              })}
              className=" bg-background1 focus-none"
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
