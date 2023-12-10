import React from 'react';
import Stack from '../custom/Stack';
import Typography from '../custom/Typography';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/custom/accordion1";
import { faqs, subscriptions, marketMakerTexts } from '@/utils/MockData';
import {HiArrowNarrowRight} from "react-icons/hi";
import {BsFillPlayCircleFill, BsFillCheckCircleFill} from "react-icons/bs";
import Image from 'next/image';


const Marketmaker = () => {

  return (
    <Stack flexDirection='col' sx='w-full'>
        <Stack flexDirection='col' justifyContent='center' alignItems='center' sx="pt-[70px] mb-10 px-5 md:px-0 lg:px-0">
            <Link href='' className='hidden md:block lg:block mb-5'>
                <Stack alignItems='center' sx="bg-[#FFC107] py-1 px-[10px] mb-5 rounded-2xl mr-3 border border-[#FFF9E6] mb-5">
                    <div>
                        <Typography variant='medium' className="bg-[#FFC107] py-1 px-[10px] border border-[#FFF9E6] rounded-2xl mr-3 text-xs"> <span className='text-[#0D0E0E]'> Coming Soon! </span> </Typography>
                    </div>
                    <Typography variant='medium' className="text-xs mr-1"> <span className='text-[#0D0E0E]'> On the web app </span> </Typography>
                    <HiArrowNarrowRight className="text-[#0D0E0E] text-xl" />
                </Stack>
            </Link>
            <Typography variant='black' className="capitalize text-center mb-8 text-[32px] md:text-6xl lg:text-6xl leading-10">
                <span className='text-[#E7F1FF]'> <span className='md:block lg:block'> Increase trade volume & liquidity </span> for your token <span className="text-[#0D6EFD]"> today </span> </span>
            </Typography>
            <Typography variant='normal' className="text-center mb-8 text-base md:text-lg lg:text-lg">
                <span className='text-[#E7E7E7]'> <span className='md:block lg:block'> Unlock liquidity and boost trading volume for your token with our dedicated market maker platform, </span> designed exclusively for token creators like you. </span>
            </Typography>
            <Stack justifyContent='center' alignItems='center' sx="mb-[20px] flex-col md:flex-row lg:flex-row gap-5 w-full">
                <Link href="https://t.me/MarketmakerXbot" className='rounded-lg bg-[#0D6EFD] py-2 text-center w-full md:w-[180px] lg:w-[180px]'> 
                    <Typography variant='medium' className="text-sm md:text-base lg:text-base"> Get Started </Typography> 
                </Link>
                <button className='rounded-lg border border-[#0D6EFD] py-2 text-center w-full md:w-[180px] lg:w-[180px] flex justify-center items-center'> 
                    <BsFillPlayCircleFill className="text-[#0D6EFD] mr-1"/>    
                    <Typography variant='medium' className="text-sm md:text-base lg:text-base text-center"> <span className='text-[#0D6EFD]'> Watch a Demo </span> </Typography> 
                </button>
            </Stack>
            <Typography variant='normal' className="text-sm"> <span className='text-[#FFC107]'> Available now on Telegram </span> </Typography>
        </Stack>

        <div className="w-full h-[33vh] md:h-[80vh] lg:h-[80vh] relative bg-no-repeat bg-contain md:bg-cover lg:bg-cover bg-center bg-[url('/chart.png')]">
            <div className="border-2 md:border-4 lg:border-4 border-[#0D6EFD] rounded-[50%] text-center w-auto h-auto p-4 md:p-5 lg:p-5 absolute top-0 left-[3%]">
                <Typography variant='black' className="text-[8px] md:text-3xl lg:text-3xl capitalize"> <span className='text-[#E7F1FF]'> With market maker 😊 </span> </Typography>
            </div>
            <div className="border-2 md:border-4 lg:border-4 border-[#FFC107] rounded-[50%] text-center w-auto h-auto p-4 md:p-5 lg:p-5 absolute bottom-[18%] right-[2%] md:right-[1%] lg:right-[1%]">
                <Typography variant='black' className="text-[8px] md:text-3xl lg:text-3xl capitalize"> <span className='text-[#E7F1FF]'> Without market maker 🙁 </span> </Typography>
            </div>
        </div>

        <div className='mb-4 w-full mt-[-4%] px-5 md:px-0 lg:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full mb-10 md:mb-24 lg:mb-24'>
                <Stack flexDirection='col'>
                    <Typography variant='bold' className="text-base mb-3"> <span className='text-[#E7F1FF]'> Features </span> </Typography>
                    <>
                        <Typography variant='black' className="text-[27px] md:text-[35px] lg:text-[35px] leading-[1.3] mb-5 hidden md:block lg:block"> <span className='text-[#FFC107]'> Why Market Making Matters for <br /> Token Owners </span> </Typography>

                        <Typography variant='black' className="text-[27px] md:text-[35px] lg:text-[35px] leading-[1.3] mb-5 block md:hidden lg:hidden"> <span className='text-[#FFC107]'> Why Market Making Matters for Token Owners </span> </Typography>
                    </>
                    <Typography variant='normal' className="text-lg md:text-xl lg:text-xl"> <span className='text-[#B4D2FE] md:text-[#EFEDED] lg:text-[#EFEDED]'> Choppy charts and high slippage are now a thing of the past with our Automated market making tools. </span> </Typography>
                </Stack>
                <Stack flexDirection='col' sx='relative hidden md:flex lg:flex'>
                    <Image src='/arrow.svg' alt='arrow' width={250} height={250} className="absolute top-[10%] left-[-10%]" />
                </Stack>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 md:gap-0 lg:gap-0 w-full mb-10 md:mb-24 lg:mb-24'>
                {marketMakerTexts.map((marketMakerText, index) => (
                    <Stack key={index} flexDirection='col' sx="mb-2 md:mb-12 lg:mb-12">
                        <Typography variant='black' className="text-base md:text-2xl lg:text-2xl mb-5">
                            <span className='text-[#0D6EFD]'> {marketMakerText.title} </span>
                        </Typography>
                        <Typography variant='normal' className="text-base w-full md:w-[90%] lg:w-[90%]">
                            <span className='text-[#E7E7E7]'> {marketMakerText.body} </span>
                        </Typography>
                    </Stack>
                ))}
            </div>
        </div>

        <div className='w-full px-5 md:px-0 lg:px-0'>
            <Typography variant='normal' className="text-base mb-3 md:pl-10 lg:pl-10"> <span className='text-[#E7F1FF]'> Pricing </span> </Typography>
            <Typography variant='black' className="text-[27px] md:text-3xl lg:text-3xl w-full md:w-1/2 lg:w-1/2 mb-5 md:pl-10 lg:pl-10"> <span className='text-[#0D6EFD]'> Our market making tools are priced to fit your needs. </span> </Typography>
            <Typography variant='normal' className="text-xl mb-5 md:mb-24 lg:mb-24 md:pl-10 lg:pl-10"> <span className='text-[#B4D2FE] md:text-[#E7F1FF] lg:text-[#E7F1FF]'> The monthly plan offers a variety of features to enhance your experience. </span> </Typography>
            
            <Stack flexDirection='col' sx='w-full md:w-[40%] lg:w-[40%] h-auto rounded-2xl p-5 mx-auto border border-[#212E40]'>
                <Typography variant='medium' className="text-center text-2xl md:text-[35.3px] lg:text-[35.3px] md:mb-2 lg:mb-2"> <span className='text-[#E7F1FF] md:text-[#0A53BE] lg:text-[#0A53BE] mr-3'> 0.5ETH <span className='text-[#E7F1FF] inline-block md:hidden lg:hidden'> /monthly </span> </span> <span className='relative before:absolute before:top-1/2 before:left-0 before:w-full before:h-1 before:bg-[#FF3B3B] hidden md:inline-block lg:inline-block'> 0.6ETH </span> </Typography>
                <Typography variant='black' className="text-center text-base mb-5"> <span className='text-[#E7F1FF] hidden md:block lg:block'> per month </span> </Typography>
                <Typography variant='normal' className="text-center text-base mb-5"> <span className='text-[#E7F1FF]'> Billed monthly. </span> </Typography>
                {subscriptions.map((subscription, index) => (
                    <Stack key={index} alignItems='center' sx='mb-5'>
                        <BsFillCheckCircleFill className="mr-3 text-[#B4D2FE]" />
                        <Typography variant='normal' className="text-base"> <span className='text-[#E7F1FF]'> {subscription.text} </span> </Typography>
                    </Stack>
                ))}
                <Stack flexDirection='col' justifyContent='center' alignItems='center' sx='my-5'>
                    <Link href="https://t.me/MarketmakerXbot" className='rounded-lg bg-[#0D6EFD] py-2 text-center w-full mb-5'> 
                        <Typography variant='medium' className="text-base text-center"> Get Started </Typography> 
                    </Link>
                    <Link href="https://t.me/godmanweb3" className='rounded-lg bg-[#FFF] py-2 text-center w-full'> 
                        <Typography variant='medium' className="text-base text-center"> <span className='text-[#344054]'> Chat to sales </span> </Typography> 
                    </Link>
                </Stack>
            </Stack>
        </div>

        <div className="mt-10 md:mt-28 lg:mt-28 w-full px-5 md:px-0 lg:px-0">
            <Typography variant='medium' className="text-base text-center mb-3"> <span className='text-[#0A53BE]'> Testimonials </span> </Typography>
            <Typography variant='medium' className="text-[27px] md:text-4xl lg:text-4xl text-center mb-3"> Feedback From The Community </Typography>
            <Typography variant='normal' className="text-lg md:text-xl lg:text-xl text-center"> <span className='text-[#B4D2FE]'> See what some of  our clients have to say about their experience with us. </span> </Typography>
            <div className='w-full md:w-[90%] lg:w-[90%] mx-auto mt-10 md:mt-20 lg:mt-20'>
                <Image src='/faq.svg' alt='testimonials' width={1000} height={1000} className='hidden md:block lg:block'/>
                <Image src='/faqMobile.svg' alt='testimonials' width={1000} height={1000} className='block md:hidden lg:hidden'/>
            </div>
        </div>
        
        <Stack flexDirection='col' justifyContent='center' alignItems='center' sx="mt-10 md:mt-48 lg:mt-48 w-full md:w-[70%] lg:w-[70%] mx-auto px-5 md:px-0 lg:px-0">
            <Typography variant='black' className='text-center text-[27px] md:text-[40px] lg:text-[40px] mb-3'> <span className='text-[#0A53BE]'> Frequently asked questions </span> </Typography>
            <Typography variant='normal' className='mb-10 md:mb-20 lg:mb-20 text-xl text-center'> <span className='text-[#EFEDED]'> Everything you need to know about our market making bot service. </span> </Typography>
            <Accordion type="multiple" className="w-full no-underline">  
                {faqs.map((faq, index) => (
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

        <Stack flexDirection='col' justifyContent='center' alignItems='center' sx="bg-[#212E40] py-[32px] rounded-2xl my-7 md:my-12 lg:my-12 mx-5 md:mx-0 lg:mx-0 px-3 md:px-0 lg:px-0">
            <Typography variant='medium' className="text-center mb-3 text-base md:text-xl lg:text-xl"> <span className='text-[#E7F1FF]'> Still have questions? </span> </Typography>
            <Typography variant='normal' className="text-lg md:text-xl lg:text-xl text-center mb-8"> <span className='text-[#EFEDED]'> Can’t find the answer you’re looking for? Please chat to our friendly team. </span> </Typography>
            <Link href="https://t.me/godmanweb3" className="bg-[#0D6EFD] rounded-lg py-2 px-10 md:px-20 lg:px-20 text-center w-fit"> 
                <Typography variant='medium' className="text-base"> Chat support </Typography> 
            </Link>
        </Stack>

    </Stack>
  )
}

export default Marketmaker