import React from "react";
import Stack from "@/components/custom/Stack";
import Link from "next/link";
import Typography from "@/components/custom/Typography";
import { HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import { FaTelegram } from "react-icons/fa";
import PreRegister from "./PreRegister";
import Success from "@/components/prelaunch/Success";
import { getCurrentUser } from "@/lib/session";
import { UserBotData } from "@/utils/types";
import CountdownTimer from "./CountdownTimer";

interface DefaultSession {
  id: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  authToken: string | null;
}

export const dynamic = "force-dynamic";
const Prelaunch = async () => {
  const user = await getCurrentUser();
  const userData: DefaultSession | null = user as DefaultSession;
  const metabotURL = process.env.METABOT_URL as string;
  const metabotApiKey = process.env.METABOT_API_KEY as string;

  const headers = new Headers({
    Authorization: metabotApiKey,
  });

  const requestOptions: RequestInit = {
    method: "GET",
    headers,
    credentials: "include",
  };

  const response2 = await fetch(
    `${metabotURL}user/${user?.email}`,
    requestOptions
  );
  const resD: UserBotData = await response2.json();

  const referralId = resD?.data?.referralId;

  return (
    <Stack flexDirection="col" sx="w-full h-auto">
      <Success referralId={referralId} userDatas={resD} />
      <Stack
        flexDirection="col"
        sx="w-full h-auto pt-20 md:pt-0 lg:pt-0 px-5 md:px-0 lg:px-0"
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx="h-auto md:h-[100vh] lg:h-[100vh] w-full mb-20 flex-col md:flex-row lg:flex-row"
        >
          <Stack
            flexDirection="col"
            sx="w-w-full md:w-1/2 lg-w-/12 mb-10 md:mb-0 lg:mb-0"
          >
            <Stack sx="w-full justify-center md:justify-start lg:justify-start mb-4 md:mb-7 lg:mb-7">
              <Link href="" className="w-fit">
                <Stack
                  alignItems="center"
                  sx="bg-[#FFC107] py-1 px-[10px] mb-5 rounded-2xl mr-3 border border-[#FFF9E6] mb-5 w-fit"
                >
                  <div>
                    <Typography
                      variant="medium"
                      className="bg-[#FFC107] py-1 px-[10px] border border-[#FFF9E6] rounded-2xl mr-3 text-xs"
                    >
                      {" "}
                      <span className="text-[#0D0E0E]">
                        {" "}
                        Coming Soon!{" "}
                      </span>{" "}
                    </Typography>
                  </div>
                  <HiArrowNarrowRight className="text-[#0D0E0E] text-xl" />
                </Stack>
              </Link>
            </Stack>
            <>
              <Typography
                variant="black"
                className="text-[45.3px] mb-7 hidden md:block lg:block"
              >
                {" "}
                Experience{" "}
                <span className="text-[#0D6EFD]">
                  {" "}
                  The Future <br /> Of{" "}
                </span>{" "}
                On-Chain Trading{" "}
                <span className="text-[#0D6EFD]">
                  {" "}
                  Like <br /> Never Before!{" "}
                </span>{" "}
              </Typography>

              <Typography
                variant="black"
                className="text-[28.9px] mb-7 block md:hidden lg:hidden text-center"
              >
                {" "}
                Experience{" "}
                <span className="text-[#0D6EFD]"> The Future Of </span> On-Chain
                Trading{" "}
                <span className="text-[#0D6EFD]"> Like Never Before! </span>{" "}
              </Typography>
            </>
            <>
              <Typography
                variant="normal"
                className="text-lg mb-7 hidden md:block lg:block"
              >
                {" "}
                Unlock the Unfair Advantage with{" "}
                <span className="font-bold">
                  {" "}
                  Our Powerful <br /> Automation & Transaction Monitoring{" "}
                </span>{" "}
                Tools! 🚀{" "}
              </Typography>

              <Typography
                variant="normal"
                className="text-base mb-7 text-center block md:hidden lg:hidden"
              >
                {" "}
                Unlock the Unfair Advantage with Our Powerful Automation &
                Transaction Monitoring Tools! 🚀{" "}
              </Typography>
            </>

            <Typography
              variant="bold"
              className="text-lg md:text-2xl lg:text-2xl mb-5 text-center md:text-left lg:text-left"
            >
              {" "}
              Launching In{" "}
            </Typography>
            <Stack
              flexDirection="col"
              sx="w-full gap-5 items-center md:items-start lg:items-start"
            >
              <CountdownTimer />
            </Stack>
          </Stack>
          <Stack sx="w-fit" justifyContent="center" alignItems="center">
            <Image src="/video.svg" alt="" width={500} height={500} />
          </Stack>
        </Stack>

        <PreRegister />

        <Stack flexDirection="col" sx="mb-20">
          <Typography
            variant="bold"
            className="text-[27px] md:text-[40px] lg:text-[40px]  text-center mb-10"
          >
            {" "}
            <span className="text-[#E7E7E7]">
              {" "}
              Benefits of Joining Our Community{" "}
            </span>{" "}
          </Typography>
          <Stack
            alignItems="center"
            gap={3}
            sx="w-full h-auto flex-col md:flex-row lg:flex-row"
          >
            <Stack
              flexDirection="col"
              gap={3}
              sx="w-full md:w-[70%] lg:w-[70%] h-auto mb-10 md:mb-0 lg:mb-0"
            >
              <Stack alignItems='center' sx='w-full h-auto flex-col md:flex-row lg:flex-row md:gap-3 lg:gap-3 mb-10 md:mb-0 lg:mb-0'>
                <Stack flexDirection='col' sx="w-full md:w-[60%] lg:[60%] h-fit md:h-[350px] lg:h-[350px] rounded-lg p-5 md:py-10 lg:py-10 md:px-7 lg:px-7 mb-10 md:mb-0 lg:mb-0 bg-no-repeat bg-cover bg-center bg-[url('/bg-grid.png')] bg-fixed bg-blend-overlay bg-[#17212F]">
                  <Typography variant='bold' className='text-2xl md:text-[35.3px] lg:text-[35.3px] mb-3'> <span className='text-[#0D6EFD] leading-10'> 📈Dive Deeper with Advanced Analytics: </span> </Typography>
                  <Typography variant='medium' className='text-base md:text-2xl lg:text-2xl'> <span className='text-[#E7E7E7]'> Unlock a deeper understanding of crypto markets with advanced analytics. </span> </Typography>
                </Stack>
                <Stack flexDirection='col' sx="w-full md:w-[40%] lg:w-[40%] h-fit md:h-[350px] lg:h-[350px] bg-[#05A660] bg-no-repeat bg-cover bg-center bg-[url('/bg-grid.png')] bg-fixed bg-blend-overlay rounded-lg py-5 md:py-3 lg:py-3 px-5 md:px-5 lg:py-5 justify-center">
                    <Typography variant='bold' className='text-[28.9px] mb-3'> <span className='text-[#E7E7E7]'> Early Access to the Best Cutting-Edge Tools! 🕒🔧🚀: </span> </Typography>
                    <Typography variant='medium' className='text-xl'> <span className='text-[#E7E7E7]'> Gain the competitive edge by being among the first to access our powerful suite of smart trading tools to revolutionize the way you trade on-chain. </span> </Typography>
                </Stack>
              </Stack>
              <Stack sx="w-full h-fit md:h-[350px] lg:h-[350px] bg-[#FCCE43] bg-no-repeat bg-cover bg-center bg-[url('/bg-grid.png')] bg-fixed bg-blend-overlay rounded-lg p-5 pb-0 md:px-5 lg:px-5 md:gap-3 lg:gap-3 items-center flex-col md:flex-row lg:flex-row">
                <Stack flexDirection='col' sx='mb-10 md:mb-0 lg:mb-0'>
                  <Typography variant='bold' className='text-2xl md:text-[35.3px] lg:text-[35.3px] mb-3 leading-10'> Become a Super User for Exclusive Perks! 🌟🚀: </Typography>
                  <Typography variant='medium' className='text-sm md:text-xl lg:text-xl'> Strive to attain the coveted Super User status and enjoy perks like VIP access, early beta testing, be the first in line for community Airdrops, cash rewards and much more. </Typography>
                </Stack>
                <>
                  <Image src="/mac.svg" width={400} height={400} alt='Laptop' className='hidden md:inline-block lg:inline-block' />

                  <Image src="/iPhoneMockup.svg" width={200} height={200} alt='Mobile' className='block md:hidden lg:hidden' />
                </>
              </Stack>
            </Stack>
            <Stack flexDirection='col' sx="w-full md:w-[30%] lg:w-[30%] h-fit md:h-[710px] lg:h-[710px] bg-[#0D6EFD] bg-no-repeat bg-cover bg-center bg-[url('/bg-grid.png')] bg-fixed bg-blend-overlay rounded-lg px-5 md:px-3 lg:px-3 py-10">
              <Typography variant='bold' className='text-2xl md:text-[35.3px] lg:text-[35.3px] mb-7 leading-10'> <span className='text-[#E7E7E7]'> Rare opportunity to be among the 1% in crypto! 🌟💰🚀: </span> </Typography>
              <Typography variant='medium' className='text-sm md:text-xl lg:text-xl mb-10'> <span className='text-[#E7E7E7]'> Stay ahead of the curve by being part of our closed knit alpha community of Super experienced on-chain analysts. </span> </Typography>
              <Stack sx='w-full justify-center items-center'>
                <Image src="/security.svg" width={300} height={300} alt='Security' />
              </Stack>
              </Stack>
          </Stack>
        </Stack>

        <Stack
          flexDirection="col"
          sx="mb-10 md:mb-20 lg:mb-20 justify-center"
          alignItems="center"
        >
          <Typography
            variant="bold"
            className="text-[27px] md:text-[35.3px] lg:text-[35.3px] text-center mb-10"
          >
            {" "}
            User Feedback{" "}
          </Typography>
          <Typography
            variant="normal"
            className="text-lg md:text-2xl lg:text-2xl text-center mb-10 md:mb-20 lg:mb-20"
          >
            {" "}
            <span className="text-[#B4D2FE]">
              {" "}
              Here&apos;s what some of our early users are saying about
              Metadapp.{" "}
            </span>{" "}
          </Typography>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx="w-full md:w-[90%] lg:w-[90%] mx-auto mb-20"
          >
            <Image
              src="/feedback1.svg"
              alt="testimonials"
              width={1000}
              height={1000}
              className="hidden md:block lg:block"
            />
            <Image
              src="/feedback2.svg"
              alt="testimonials"
              width={500}
              height={500}
              className="block md:hidden lg:hidden"
            />
          </Stack>
          <Link href="">
            <Button
              variant="default" 
              size="sm"
              className="border-none bg-[#0D6EFD] hover:bg-[#0D6EFD] rounded-lg text-base font-semibold px-10"
            >
              {" "}
              Join Our Community{" "}
              <FaTelegram className="text-lg text-white ml-3" />{" "}
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default Prelaunch;
