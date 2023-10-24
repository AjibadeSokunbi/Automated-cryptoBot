import React from 'react';

import Link from 'next/link';

import {HiArrowNarrowRight} from "react-icons/hi";
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/custom/accordion1";
import { metabotsFaqs } from '@/utils/MockData';
import { BiCheck } from "react-icons/bi";
import Footer from '@/components/layouts/Footer';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';

const Metabots = () => {
  return (
    <Stack flexDirection='col' sx='w-full h-auto'>
    <Stack flexDirection='col' sx='w-full h-auto pt-48 md:pt-0 lg:pt-0 px-5 md:px-0 lg:px-0'>
        <Stack justifyContent='center' alignItems='center' sx='h-[100vh] w-full mb-36 flex-col md:flex-row lg:flex-row'>
            <Stack flexDirection='col' sx='flex-1 mb-5 md:mb-0 lg:mb-0'>
                <Link href='' className='mb-2 md:mb-3 lg:mb-3 w-fit'>
                    <Stack alignItems='center' sx="bg-[#FFC107] py-1 px-[10px] mb-5 rounded-2xl mr-3 border border-[#FFF9E6] mb-5 w-fit">
                        <div>
                            <Typography variant='medium' className="bg-[#FFC107] py-1 px-[10px] border border-[#FFF9E6] rounded-2xl mr-3 text-xs"> <span className='text-[#0D0E0E]'> Coming Soon! </span> </Typography>
                        </div>
                        <Typography variant='medium' className="text-xs mr-1"> <span className='text-[#0D0E0E] capitalize'> On the web app </span> </Typography>
                        <HiArrowNarrowRight className="text-[#0D0E0E] text-xl" />
                    </Stack>
                </Link>
                <Typography variant='black' className='text-[32px] md:text-[45.3px] lg:text-[45.3px] mb-5'> <span className='md:block lg:block'> Ultra-fast Automation tools </span> <span className='md:block lg:block'> to Supercharge your DEX </span> trading Activities. </Typography>
                <Typography variant='normal' className='text-lg mb-10 md:mb-5 lg:mb-5'> Automate your on-chain transactions  on the go  with our lightning-fast <span className='md:block lg:block'> Telegram trading  bot. </span> </Typography>
                <Stack sx="mb-[20px] gap-5 w-full">
                    <Link href="" className='rounded-lg bg-[#0D6EFD] py-2 text-center w-[150px] md:w-[180px] lg:w-[180px]'> 
                        <Typography variant='medium' className="text-sm md:text-base lg:text-base"> Get Started </Typography> 
                    </Link>
                    <Link href="" className='rounded-lg border border-[#0D6EFD] py-2 text-center w-[150px] md:w-[180px] lg:w-[180px] flex justify-center items-center'> 
                        <Typography variant='medium' className="text-sm md:text-base lg:text-base text-center"> <span className='text-[#0D6EFD]'> Explore Features </span> </Typography> 
                    </Link>
                </Stack>
                <Typography variant='normal' className="text-sm text-center md:text-left lg:text-left"> <span className='text-[#FFC107]'> Available now on Telegram </span> </Typography>
            </Stack>
            <Stack sx='w-fit' justifyContent='center' alignItems='center'>
                <Image src="/metabot1.svg" alt="" width={500} height={500} />
            </Stack>
        </Stack>
        <Stack flexDirection='col' sx='text-center h-auto w-full mb-10 md:mb-36 lg:mb-36'>
            <Typography variant='bold' className="text-base mb-3"> <span className='text-[#0A53BE] md:text-[#0A53BE] lg:text-[#0A53BE]'> Features </span> </Typography>
            <Typography variant='black' className="text-[27px] md:text-4xl lg:text-4xl leading-[1.3] mb-2 md:mb-3 lg:mb-3"> Explore Amazing feature of Metabots </Typography>
            <Typography variant='normal' className='text-xl mb-10'> <span className='text-[#B4D2FE] hidden md:block lg:block'> Powerful set of automated trading tools to give you the unfair advantage </span></Typography>
            <Typography variant='normal' className='text-xl mb-10'> <span className='text-[#B4D2FE] md:hidden lg:hidden'> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </span></Typography>
            <Stack justifyContent='center' gap={5} sx='h-auto w-full flex-col md:flex-row lg:flex-row'>
                <Stack flexDirection='col' sx='w-full md:w-[33%] lg:w-[33%] h-[65vh] md:h-full lg:h-full bg-[#1B2B3C] rounded-lg pt-5 md:pt-16 lg:pt-16 relative'>
                    <div className='px-5 w-full'>
                        <Typography className='text-2xl md:text-3xl lg:text-3xl text-left font-black md:font-bold lg:font-bold'> <span className='text-[#0D6EFD]'> Instant Crypto Trades </span> </Typography>
                        <Typography variant='normal' className='text-lg text-left mb-5'> <span className='text-[#E7F1FF]'> Experience lightning-fast crypto trades without leaving Telegram. Buy and sell new tokens with unmatched convenience. </span></Typography>
                    </div>
                    <Image src="/phone-left.svg" alt="" width={700} height={700} className='absolute bottom-0 left-0' />
                </Stack>
                <Stack flexDirection='col' sx='w-full md:w-[67%] lg:w-[67%] h-auto gap-5'>
                    <Stack alignItems='start' sx='w-full gap-5 flex-col md:flex-row lg:flex-row'>
                        <Stack flexDirection='col' sx='bg-[#0D6EFD] rounded-lg h-full w-full md:w-1/2 lg:w-1/2 px-5 py-5'>
                            <Typography variant='bold' className='text-3xl mb-5 text-left'> Private Mode: Shield Your Transactions </Typography>
                            <Typography variant='normal' className='text-lg text-left'> <span className='text-[#E7F1FF]'> Protect your trades with Private Mode. Safeguard against sandwich attacks and front running to keep your transactions safe. </span> </Typography>
                        </Stack>
                        <Stack flexDirection='col' sx='bg-[#1B2B3C] rounded-lg h-full w-full md:w-1/2 lg:w-1/2 px-5 py-5'>
                            <Typography variant='bold' className='text-3xl mb-5 text-left'> Meta scam score </Typography>
                            <Typography variant='normal' className='text-lg text-left'> <span className='text-[#E7F1FF]'> Use our Meta scam score rating to weed out obvious and avoidable scams & rug pulls. </span> </Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems='start' sx='w-full gap-5 flex-col md:flex-row lg:flex-row'>
                        <Stack flexDirection='col' sx='bg-[#05A660] rounded-lg h-full w-full md:w-[40%] lg:w-[40%] px-5 py-5'>
                            <Typography variant='bold' className='text-3xl mb-5 text-left'> Fail-Safe Protection: Prevent Transaction Failures </Typography>
                            <Typography variant='normal' className='text-lg text-left'> <span className='text-[#E7F1FF]'> Ensure seamless transactions with Fail-Safe Selling. Test your sales beforehand to prevent potential hiccups. </span> </Typography>
                        </Stack>


                        {/*<Stack flexDirection='row' sx='bg-[#FFC107] rounded-lg h-full w-full md:w-[60%] lg:w-[60%]'>
                            <Stack flexDirection='col' sx='h-[75vh] md:h-auto lg:h-auto pl-5 py-5 relative back'>
                                <>
                                    <Typography variant='bold' className='text-3xl mb-5 text-left w-full md:w-1/2 lg:w-1/2 md:hidden lg:hidden'> Mirror Sniper: Emulate Pro Traders </Typography>
                                    <>
                                        <Typography variant='normal' className='text-lg text-left w-1/3 mb-5 md:mb-0 lg:mb-0 hidden'> <span className='text-[#E7F1FF]'> Harness the power of Mirror Sniper to emulate pro traders and whales. Replicate their successful strategies effortlessly. </span> </Typography>
                                        <Typography variant='normal' className='text-lg text-left mb-5 md:mb-0 lg:mb-0 md:hidden lg:hidden'> <span className='text-[#E7F1FF]'> Harness the power of Mirror Sniper to emulate pro traders and whales. Replicate their successful strategies  effortlessly. </span> </Typography>
                                    </>
                                </>
                                <Image src="/mirrorCard.svg" alt="" width={1000} height={1500} className='hidden md:block lg:block'/> 
                                <Image src="/phone-top.svg" alt="" width={300} height={300} className='md:hidden lg:hidden absolute bottom-0 left-[50%] translate-x-[-50%]'/> 
                            </Stack>
                        </Stack> */}


                        <Stack flexDirection='row' sx='bg-[#FFC107] rounded-lg h-full w-full md:w-[60%] lg:w-[60%]'>
                            <Stack flexDirection='col' sx='h-[75vh] md:h-auto lg:h-auto pl-5 py-5 relative overflow-y-hidden overflow-x-hidden'>
                                <>
                                    <Typography variant='bold' className='text-3xl mb-5 text-left w-full md:w-1/2 lg:w-1/2'> Mirror Sniper: Emulate Pro Traders </Typography>
                                    <>
                                        <Typography variant='normal' className='text-lg text-left w-1/2 mb-5 md:mb-0 lg:mb-0 hidden md:block lg:block'> <span className='text-[#E7F1FF]'> Harness the power of Mirror Sniper to emulate pro traders and whales. Replicate their <br /> successful strategies <br /> effortlessly. </span> </Typography>
                                        <Typography variant='normal' className='text-lg text-left mb-5 md:mb-0 lg:mb-0 md:hidden lg:hidden'> <span className='text-[#E7F1FF]'> Harness the power of Mirror Sniper to emulate pro traders and whales. Replicate their successful strategies  effortlessly. </span> </Typography>
                                    </>
                                </>
                                <Image src="/mirror.svg" alt="" width={400} height={400} className='absolute right-[-30%] bottom-[-17%] hidden md:block lg:block'/> 
                                <Image src="/phone-top.svg" alt="" width={300} height={300} className='md:hidden lg:hidden absolute bottom-0 left-[50%] translate-x-[-50%]'/> 
                            </Stack>
                        </Stack> 
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
        <Stack justifyContent='center' alignItems='center' sx='bg-[#0B1E3A] w-[95%] h-auto rounded-2xl gap-10 mb-10 md:mb-36 lg:mb-36 mx-auto py-10 hidden md:flex lg:flex'>
            <Stack justifyContent='center' sx='w-full md:w-1/2 lg:w-1/2'>
                <Image src="/bonus.svg" alt="" width={400} height={300}/> 
            </Stack>
            <Stack flexDirection='col' justifyContent='center' sx='w-full md:w-1/2 lg:w-1/2 md:pr-10 lg:pr-10 md:py-10 lg:py-10'>
                <Typography variant='bold' className='text-3xl mb-3'>
                    <span className='text-[#FFC107]'> Earn 20% in Cash bonus and Meta points for referring your friends </span>
                </Typography>
                <Typography variant='normal' className='text-lg mb-5'> For every successful Metabots trade you perform you&apos;ll earn Metapoints. </Typography>
                <Stack flexDirection='row' alignItems='center' sx='mb-5'>
                    <div className='w-9 h-6 rounded-full bg-[#FFF9E6] flex justify-center items-center mr-3'> <BiCheck className="text-[#FFC107] text-lg font-bold" /> </div>
                    <Typography variant='normal' className='text-lg'> The more Metapoints you earn, the more exclusive perks and airdrops you&apos;ll be eligible for. </Typography>
                </Stack>
                <Stack flexDirection='row' alignItems='center'>
                    <div className='w-14 h-6 rounded-full bg-[#FFF9E6] flex justify-center items-center mr-3'> <BiCheck className="text-[#FFC107] text-lg font-bold" /> </div>
                    <Typography variant='normal' className='text-lg'> You&apos;ll also earn a 20% cash bonus from the fees  we make from your friends whenever they use Metabots to trade on our platform. </Typography>
                </Stack>
            </Stack>
        </Stack>
        <Stack flexDirection='col' justifyContent='center' sx="w-full px-5 md:px-0 lg:px-0 mb-10 md:mb-36 lg:mb-36">
            <Typography variant='medium' className="text-base text-center mb-3"> <span className='text-[#0A53BE]'> Testimonials </span> </Typography>
            <Typography variant='medium' className="text-[27px] md:text-4xl lg:text-4xl text-center mb-3"> Feedback From The Community </Typography>
            <Typography variant='normal' className="text-lg md:text-xl lg:text-xl text-center"> <span className='text-[#B4D2FE]'> See what some of  our clients have to say about their experience with us. </span> </Typography>
            <div className='w-full md:w-[90%] lg:w-[90%] mx-auto mt-10 md:mt-20 lg:mt-20'>
                <Image src='/review1.svg' alt='testimonials' width={1000} height={1000} className='hidden md:block lg:block'/>
                <Image src='/review2.svg' alt='testimonials' width={1000} height={1000} className='block md:hidden lg:hidden'/>
            </div>
        </Stack>
        <Stack flexDirection='col' justifyContent='center' alignItems='center' sx="mb-10 md:mb-48 lg:mb-48 w-full md:w-[70%] lg:w-[70%] mx-auto">
            <Typography variant='black' className='text-center text-[27px] md:text-[40px] lg:text-[40px] mb-3'> <span className='text-[#0A53BE]'> Frequently asked questions </span> </Typography>
            <Typography variant='normal' className='mb-10 md:mb-20 lg:mb-20 text-[20px] md:text-xl lg:text-xl text-center'> <span className='text-[#B4D2FE] md:text-[#EFEDED] lg:text-[#EFEDED]'> Everything you need to know about our market making bot service. </span> </Typography>
            <Accordion type="multiple" className="w-full no-underline">  
                {metabotsFaqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className='mb-5 border-b-2 border-[#212E40]'>
                        <AccordionTrigger>
                            <Typography variant="medium" className="text-lg text-left"> <span className='text-[#E7F1FF]'> {faq.title} </span> </Typography>
                        </AccordionTrigger>
                        <AccordionContent className='pt-5 pr-5 md:pr-10 lg:pr-10'>
                            <Typography variant="normal" className="text-base"> <span className='text-[#EFEDED]'> {faq.body} </span> </Typography>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Stack>

        <Stack flexDirection='col' justifyContent='center' alignItems='center' sx="bg-[#212E40] py-[32px] rounded-2xl mb-5 px-3 md:px-0 lg:px-0">
            <Typography variant='medium' className="text-center mb-3 text-base md:text-xl lg:text-xl"> <span className='text-[#E7F1FF]'> Still have questions? </span> </Typography>
            <Typography variant='normal' className="text-lg md:text-xl lg:text-xl text-center mb-8"> <span className='text-[#EFEDED]'> Can’t find the answer you’re looking for? Please chat to our friendly team. </span> </Typography>
            <Link href="https://t.me/godmanweb3" className="bg-[#0D6EFD] rounded-lg py-2 px-10 md:px-20 lg:px-20 text-center w-fit"> 
                <Typography variant='medium' className="text-base"> Chat support </Typography> 
            </Link>
        </Stack>
    </Stack>
    <Footer />
    </Stack>
  )
}

export default Metabots