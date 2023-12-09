import Image from "next/image";
import { Button } from "@/components/ui/button";
import Stack from "@/components/custom/Stack";
import { Dashboards } from "@/utils/dashboard";
import Typography from "@/components/custom/Typography";
import Link from "next/link";
import Footer from "@/components/layouts/Footer";
import Box from "@/components/custom/Box";
import { getCurrentUser } from "@/lib/session";


export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      <div className="md:ml-20 lg:ml-20 mt-20 md:mt-40 lg:mt-40 px-5 md:px-0 lg:px-0">
        <Box className="mb-20">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <div className="mt-10 md:mt-0 lg:mt-0">
                <Typography
                  variant="black"
                  className="text-2xl md:text-[45.3px] lg:text-[45.3px] mb-1 md:mb-3 lg:mb-3"
                >
                  Smart
                  <span className="text-blue-600"> Trading Platform For </span>
                </Typography>
                <Typography
                  variant="black"
                  className="text-2xl md:text-5xl lg:text-5xl"
                >
                  On-chain
                  <span className="text-blue-600"> Traders </span>
                </Typography>
              </div>
              <>
                <Typography
                  variant="normal"
                  className="text-center text-[14px] md:text-lg lg:text-xl mt-8 hidden md:block lg:block"
                >
                  Gain the Unfair advantage with our powerful set of DEX
                  Automation <br /> & Transaction monitoring tools.
                </Typography>
                <Typography
                  variant="normal"
                  className="text-center text-[14px] md:text-lg lg:text-xl mt-8 block md:hidden lg:hidden"
                >
                  Gain the Unfair advantage with our powerful set of DEX
                  Automation & Transaction monitoring tools.
                </Typography>
              </>
            </div>
          </div>
        </Box>

        <Stack flexDirection="col" justifyContent="center" alignItems="center" sx="w-full mb-20">
          <Typography variant="bold" className="text-[27px] md:text-[45.3px] lg:text-[45.3px] mb-5 text-center"> What is Smart Trading? </Typography>
          <Typography variant="normal" className="text-center text-xs md:text-lg lg:text-lg mb-5"> <span className="text[#E7E7E7]"> Smart trading is a new & Intelligent approach to On- chain trading that utilizes a powerful combination of automation <br /> strategies, and deep On-chain analysis of hidden data points to discover and execute non- obvious market opportunities <br /> with improved efficiency and accuracy rather than just blind sniping. </span> </Typography>
          <Image src="/infoBanner.svg" width={700} height={700} alt="" />
        </Stack>

        <>    
          <Typography variant="black" className="text-2xl md:text-[45.3px] lg:text-[45.3px] text-center mb-10 md:mb-20 lg:mb-20"> Automation Tools </Typography>

          {Dashboards?.filter(dashboard => dashboard.title === "METABOT")?.map((dashboard, index) => (
            <Stack
              flexDirection="col"
              key={index}
              sx="w-full mb-20 md:mb-40 lg:mb-40 md:pr-10 lg:pr-10"
            >
              <Stack
                justifyContent="center" 
                alignItems="center"
                sx={`flex ${
                  dashboard.direction === true
                    ? "sm:flex-row-reverse"
                    : "sm:flex-row"
                } ${
                  dashboard.direction === true
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }   flex-col-reverse`}
                gap={6}
              >
                <Stack width="w-full md:w-1/2 lg:w-1/2 px-5 md:px-0 lg:px-0">
                  <>
                    {dashboard.desktopSrc && (
                      <Image
                        src={dashboard.desktopSrc}
                        alt="dashboard"
                        width={650}
                        height={650}
                        className="hidden md:inline-block lg:inline-block"
                      />
                    )}

                    {dashboard.mobileSrc && (
                      <Image
                        src={dashboard.mobileSrc}
                        alt="dashboard"
                        width={650}
                        height={650}
                        className="block md:hidden lg:hidden"
                      />
                    )}
                  </>
                </Stack>
                <>
                  <Stack
                    flexDirection="col"
                    width="w-full md:w-1/2 lg:w-1/2 md:pr-10 lg:pr-10"
                    gap={4}
                  >
                    <Typography
                      className="text-[14px] md:text-[18px] lg:text-[18px] text-center md:text-start lg:text-start"
                      color="#FFC107"
                      variant="normal"
                    >
                      {dashboard.title}
                    </Typography>
                    <Typography
                      variant="black"
                      className="text-[24px] md:text-[35.29999923706055px] lg:text-[35.29999923706055px] text-center md:text-start lg:text-start"
                    >
                      {dashboard.subTitle}
                    </Typography>
                    <Typography
                      variant="normal"
                      className="text-[14px] md:text-[18px] lg:text-[18px] text-center md:text-start lg:text-start"
                    >
                      {dashboard.description}
                    </Typography>
                    <Stack>
                      <Button
                        className="mx-auto md:mx-0 lg:mx-0 w-44"
                        variant='default'
                      >
                        <Link href={dashboard.link}>{dashboard.action}</Link>
                      </Button>
                    </Stack>
                  </Stack>
                </>
              </Stack>
            </Stack>
          ))}
        </>

        <>    
          <Typography variant="black" className="text-2xl md:text-[45.3px] lg:text-[45.3px] text-center mb-10 md:mb-20 lg:mb-20"> Analytics Tools </Typography>

          {Dashboards?.filter(dashboard => dashboard.title !== "METABOT")?.map((dashboard, index) => (
            <Stack
              flexDirection="col"
              key={index}
              sx="w-full mb-20 md:pr-10 lg:pr-10"
            >
              <Stack
                justifyContent="center" 
                alignItems="center"
                sx={`flex ${
                  dashboard.direction === true
                    ? "sm:flex-row-reverse"
                    : "sm:flex-row"
                } ${
                  dashboard.direction === true
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                }   flex-col-reverse`}
                gap={6}
              >
                <Stack width="w-full md:w-1/2 lg:w-1/2 px-5 md:px-0 lg:px-0">
                  <>
                    {dashboard.desktopSrc && (
                      <Image
                        src={dashboard.desktopSrc}
                        alt="dashboard"
                        width={650}
                        height={650}
                        className="hidden md:inline-block lg:inline-block"
                      />
                    )}

                    {dashboard.mobileSrc && (
                      <Image
                        src={dashboard.mobileSrc}
                        alt="dashboard"
                        width={650}
                        height={650}
                        className="block md:hidden lg:hidden"
                      />
                    )}
                  </>
                </Stack>
                <>
                  <Stack
                    flexDirection="col"
                  sx={`w-full md:w-1/2 lg:w-1/2 ${dashboard.direction === true ? 'md:pr-10 lg:pr-10' : 'md:pl-10 lg:pl-10'}`}
                    gap={4}
                  >
                    <Typography
                      className="text-sm md:text-lg lg:text-lg text-center md:text-start lg:text-start"
                      color="#FFC107"
                      variant="normal"
                    >
                      {dashboard.title}
                    </Typography>
                    <Typography
                      variant="black"
                      className="text-[24px] md:text-[35.29999923706055px] lg:text-[35.29999923706055px] text-center md:text-start lg:text-start"
                    >
                      {dashboard.subTitle}
                    </Typography>
                    <Typography
                      variant="normal"
                      className="text-[14px] md:text-[18px] lg:text-[18px] text-center md:text-start lg:text-start"
                    >
                      {dashboard.description}
                    </Typography>
                    <Stack sx={dashboard.action === "" ? 'hidden' : 'flex'}>
                      <Button
                        className="mx-auto md:mx-0 lg:mx-0 w-44"
                        variant='outline'
                      >
                        <Link href={dashboard.link}>{dashboard.action}</Link>
                      </Button>
                    </Stack>
                  </Stack>
                </>
              </Stack>
            </Stack>
          ))}
        </>
      </div>
      <Footer />
    </>
  );
}
