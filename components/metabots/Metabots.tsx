import React from 'react';
import Stack from '@/components/custom/Stack';
import Link from 'next/link';
import Typography from '@/components/custom/Typography';
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

const Metabots = () => {
  return (
    <Stack flexDirection='col' sx='w-full h-auto'>
        <Stack flexDirection='col' sx='w-full h-auto pt-10 md:pt-20 lg:pt-20 px-5'>
            <Stack justifyContent='between' alignItems='center' sx='h-auto md:h-[70vh] lg:h-[70vh] w-full mb-20 flex-col md:flex-row lg:flex-row'>
                <Stack sx='w-full md:w-1/2 lg:w-1/2 flex-col mb-10 md:mb-0 lg:mb-0'>
                    <Typography variant='black' className='text-2xl md:text-[45.3px] lg:text-[45.3px] mb-5 leading-normal md:leading-[60px] lg:leading-[60px]'> Ultra-fast Automation tools to Supercharge your DEX trading Activities. </Typography>
                    <Typography variant='normal' className='text-sm md:text-lg lg:text-lg mb-10 md:mb-10 lg:mb-10 w-[80%]'> Metabots  has cross-platform access  via our Web  terminal interface & Telegram bot. </Typography>
                    <Typography variant='bold' className='text-2xl md:text-[27px] lg:text-[27px] mb-10 text-center md:text-left lg:text-left'> <span className='text-[#E7E7E7]'> Get Started </span> </Typography>
                    <Stack sx="mb-[20px] gap-5 w-full justify-center md:justify-start lg:justify-start">
                        <Link href="" className='rounded-lg bg-[#0D6EFD] py-2 text-center w-[150px] md:w-[180px] lg:w-[180px]'> 
                            <Typography variant='medium' className="text-sm md:text-base lg:text-base"> Metabots Web </Typography> 
                        </Link>
                        <Link href="" className='rounded-lg border border-[#0D6EFD] py-2 text-center w-[150px] md:w-[180px] lg:w-[180px] flex justify-center items-center'> 
                            <Typography variant='medium' className="text-sm md:text-base lg:text-base text-center"> <span className='text-[#0D6EFD]'> Metabots Telegram </span> </Typography> 
                        </Link>
                    </Stack>
                </Stack>
                <Stack sx='w-full md:w-1/2 lg:w-1/2 h-full' justifyContent='center' alignItems='center'>
                    <Image src="/metabotBanner.svg" width={700} height={700} alt='metabotBanner' />
                </Stack>
            </Stack>
            <Stack sx='h-auto md:h-[150vh] lg:h-[150vh] w-full gap-10 mb-10 md:mb-44 lg:mb-44 flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between'>
                <Stack flexDirection='col' justifyContent='center' alignItems='center' sx='flex md:hidden lg:hidden w-full'>
                    <Typography variant='semibold' className='text-xl mb-5 text-center'> <span className='text-[#0A53BE]'> Features </span> </Typography>
                    <Typography variant='bold' className='text-[27px] mb-5 text-center'> Explore Amazing feature of Metabots </Typography>
                    <Typography variant='normal' className='text-lg mb-5 text-center'> <span className='text-[#B4D2FE]'> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </span> </Typography>
                </Stack>
                <Stack flexDirection='col' sx='gap-10 h-auto md:h-[1100px] lg:h-[1100px] w-full md:w-[60%] lg:w-[60%] rounded-lg overflow-hidden'>
                    <Stack flexDirection='col' sx='bg-[#17212F] w-full h-auto md:h-[700px] lg:h-[700px] rounded-lg'>
                        <Stack flexDirection='col' sx='p-5 h-auto '>
                            <Typography variant='bold' className='text-2xl md:text-[40px] lg:text-[40px] mb-10'> <span className='text-[#0D6EFD]'> Cross-Platform Access </span> </Typography>
                            <Typography variant='normal' className='text-base md:text-xl lg:text-xl'> <span className='text-[#E7F1FF]'> Experience lightning-fast Automated trades Via the Smart Trading terminal on Web or via the Mobile Telegram Bot with unmatched convenience. </span> </Typography>
                        </Stack>

                        <Stack justifyContent='center' sx='w-full h-auto'>
                            <Image src="/metabotInfoBanner.svg" width={580} height={500} alt='metabotInfoBanner' />
                        </Stack>
                    </Stack>
                    <Stack sx='gap-10 flex-col md:flex-row lg:flex-row h-auto md:h-[400px] lg:h-[400px]'>
                        <Stack flexDirection='col' justifyContent='center' sx='bg-[#05A660] w-full md:w-1/2 lg:w-1/2 h-auto rounded-lg p-5'>
                            <Typography variant='bold' className='text-2xl md:text-[35.3px] lg:text-[35.3px] mb-7 leading-10'> <span className='text-[#E7E7E7]'> Fail-Safe Selling: Prevent Transaction Failures </span> </Typography>
                            <Typography variant='medium' className='text-base md:text-2xl lg:text-2xl'> <span className='text-[#E7E7E7]'> Ensure seamless transactions with Fail-Safe Selling. Test your sales beforehand to prevent potential hiccups. </span> </Typography>
                        </Stack>

                        <Stack flexDirection='col' justifyContent='center' sx='bg-[#1B2B3C] w-full md:w-1/2 lg:w-1/2 h-auto rounded-lg p-5'>
                            <Typography variant='bold' className='text-[30px] md:text-[40px] lg:text-[40px] mb-7'> <span className='text-[#E7E7E7]'> Meta scam score </span> </Typography>
                            <Typography variant='medium' className='text-base md:text-2xl lg:text-2xl'> <span className='text-[#E7E7E7]'> Use our Meta scam score rating to weed out obvious and avoidable scams & rug pulls. </span> </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack flexDirection='col' sx='gap-10 h-auto md:h-[1100px] lg:h-[1100px] w-full md:w-[40%] lg:w-[40%] rounded-lg overflow-hidden'>
                    <Stack flexDirection='col' justifyContent='center' sx='bg-[#0D6EFD] rounded-lg p-5 h-auto md:h-[300px] lg:h-[300px]'>
                        <Typography variant='bold' className='text-2xl md:text-[35.3px] lg:text-[35.3px] mb-7'> <span className='text-[#E7E7E7]'> Private Mode: Shield Your Transactions </span> </Typography>
                        <Typography variant='medium' className='text-base md:text-2xl lg:text-2xl'> <span className='text-[#E7E7E7]'> Protect your trades with Private Mode. Safeguard against sandwich attacks and keep your transactions confidential. </span> </Typography>
                    </Stack>

                    <Stack flexDirection='col' sx='bg-[#FFC107] rounded-lg h-auto md:h-[800px] lg:h-[800px]'>
                        <Stack flexDirection='col' sx='w-full p-5'>
                            <Typography variant='bold' className='text-2xl md:text-[35.3px] lg:text-[35.3px] mb-7'> Mirror Sniper: Emulate Pro Traders </Typography>
                            <Typography variant='medium' className='text-base md:text-2xl lg:text-2xl'> Harness the power of Mirror Sniper to emulate pro traders and whales. Replicate their successful strategies effortlessly. </Typography>
                        </Stack>

                        <Stack justifyContent='center' sx='w-full overflow-hidden hidden md:flex lg:flex'>
                            <Image src="/Limit.svg" width={480} height={480} alt='LimitMobile' />
                        </Stack>
                        <Stack justifyContent='center' sx='w-full overflow-hidden flex md:hidden lg:hidden'>
                            <Image src="/LimitMobile.svg" width={480} height={480} alt='LimitMobile' />
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
                <Typography variant='medium' className="text-[27px] md:text-4xl lg:text-4xl text-center mb-3"> What people think about us </Typography>
                <Typography variant='normal' className="text-lg md:text-xl lg:text-xl text-center"> <span className='text-[#B4D2FE]'> Heres what people have to say about their experience with us. </span> </Typography>
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