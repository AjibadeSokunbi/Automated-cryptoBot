"use client";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { type FieldValues, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { BiLoaderAlt } from "react-icons/bi";
import { UserBotData } from "@/utils/types";
import { FC, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type Inputs = {
  email: string;
};

const PreRegister: FC<UserAuthFormProps> = ({ ...props }) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();
  const pathname = usePathname();
  const {data: user} = useSession()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(true);
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

    const requestOptions2: RequestInit = {
      method: "GET",
      headers,
    };

    const response2 = await fetch(
      `${metabotURL}user/${data.email.toLowerCase()}`,
      requestOptions2
    );

    const resD: UserBotData = await response2.json();

    if (resD?.data?._id) {
      setError(true);
      setIsLoading(false);
      return toast({
        title: "Error",
        description: "You've already Pre-Registered",
        variant: "destructive",
      });
    }

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

    const requestOptions: RequestInit = {
      method: "POST",
      headers,
      body: requestBody,
    };

    if (!resD?.data?._id && signInResult?.ok) {
      const reg = await fetch(`${metabotURL}user/`, requestOptions);
      const regC = await reg.json();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        flexDirection="col"
        justifyContent="center"
        alignItems="center"
        sx="bg-[#0B1E3A] w-[95%] md:w-[70%] lg:w-[70%] h-auto rounded-2xl mb-10 md:mb-36 lg:mb-36 mx-auto py-5 md:py-16 lg:py-16 px-5 md:px-10 lg:px-10"
      >
        <Typography
          variant="medium"
          className="text-lg md:text-[30px] lg:text-[30px] text-center mb-5 md:mb-10 lg:mb-10"
        >
          {" "}
          <span className="text-[#FFC107]">
            {" "}
            🚀Pre-register now to start earning Meta Points to unlock exciting
            rewards on launch day🌟💎{" "}
          </span>{" "}
        </Typography>
        <Typography
          variant="semibold"
          className="text-sm md:text-[30px] lg:text-[30px] text-center mb-5"
        >
          {" "}
          <span className="text-[#E7E7E7]"> Enter your Email </span>{" "}
        </Typography>
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
          className="w-full md:w-1/2 lg:w-1/2 border border-[#E7E7E7] active:outline-none bg-transparent rounded-lg mb-5"
        />
        {errors?.email && (
          <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
        )}

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="default"
              size="default"
              type="submit"
              disabled={isLoading || user?.user?.email !== undefined}
              className="w-full md:w-1/2 lg:w-1/2 border-none bg-[#0D6EFD] hover:bg-[#0D6EFD] rounded-lg text-base md:text-lg lg:text-lg font-normal"
            >
              {isLoading && (
                <BiLoaderAlt className="mr-2 h-4 w-4 animate-spin" />
              )}
              {user?.user?.email ? "You're Registered" : "Pre-Register Now"}
            </Button>
          </DialogTrigger>
          {(isSubmitSuccessful && error === false) && (
            <DialogContent className="bg-[#101720] border-none w-full md:w-fit lg:w-fit h-fit">
              <Stack
                flexDirection="col"
                justifyContent="center"
                sx="w-full h-fit overflow-y-auto px-5 md:px-7 lg:px-7 py-10"
              >
                <Typography
                  variant="bold"
                  className="text-base md:text-2xl lg:text-2xl text-center mb-5"
                >
                  {" "}
                  Thank you for Pre-registering!{" "}
                </Typography>
                <Stack sx="w-full justify-center items-center">
                  <Image
                    src="/Mail.svg"
                    width={300}
                    height={300}
                    className="mb-5"
                    alt="mail"
                  />
                </Stack>
                <Typography
                  variant="semibold"
                  className="text-sm md:text-lg lg:text-lg text-center mb-3 md:mb-2 lg:mb-2"
                >
                  {" "}
                  Your’e almost there! 🎉 🚀.
                </Typography>
                <Typography
                  variant="normal"
                  className="text-xs md:text-base lg:text-base text-center"
                >
                  {" "}
                  Check your Email and click on the link to complete <br /> your
                  Pre-Registration process.{" "}
                </Typography>
              </Stack>
            </DialogContent>
          )}
        </Dialog>
      </Stack>
    </form>
  );
};

export default PreRegister;
