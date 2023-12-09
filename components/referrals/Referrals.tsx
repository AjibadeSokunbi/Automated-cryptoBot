import React from 'react';
import Cards from './Cards';
import Typography from '../custom/Typography';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { referrals } from '@/utils/MockData';
import {FaLinkedin, FaYoutube, FaTwitter, FaReddit} from "react-icons/fa";
import Stack from '../custom/Stack';
import Input from '../custom/Input';
import {MdOutlineContentCopy} from "react-icons/md";
import { ServerDefaultSession } from '@/utils/types';
import { getCurrentUser } from '@/lib/session'
import Copy from './Copy';

const Referrals = async () => {
    const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
    const referralId = user.botdata.data.referralId
  return (
    <div className='w-full mb-5 px-5 md:px-0 lg:px-0'>
        <Typography variant="medium" className='text-sm md:text-2xl lg:text-2xl mb-5'> Your Referral Link </Typography>
        <Stack alignItems='center' flexDirection='row' sx="w-full md:w-[60%] lg:w-[60%] mb-10">
            <Input
                variant="small"
                roundedLg={false}
                value={`https://metadapp.com?ref=${referralId}`}
                placeholder="..."
                className="focus:outline-none bg-background1 py-2 text-[10px] md:text-base lg:text-base rounded-l-lg pr-2 border-r-0"
            />
                  <Copy referral={`https://metadapp.com?ref=${referralId}`} />
        </Stack>
        <Cards />

        <Typography variant='normal' className='text-xs md:text-lg lg:text-lg mb-10'>
            The metadapp platform is always looking for new ways to expand our community and we believe that  sharing the platform with others and creating quality user-generated content is one of the best ways to do that. 
        </Typography>

        <Accordion type="multiple" className="w-full no-underline mb-5">  
            {referrals.map((referral, index) => (
                <AccordionItem value={`item-${index}`} key={index} className='mb-5'>
                    <AccordionTrigger className='bg-[#0C141F] px-2 md:px-5 lg:px-5'>
                        <div className='flex flex-col gap-2'>
                            {referral.icon === true ? (
                                <div className='flex gap-2 items-center'>
                                    <FaLinkedin className='text-base text-[#0076B2]' />
                                    <FaYoutube className='text-base text-[#FF0000]' />
                                    <FaTwitter className='text-base text-[#1D9BF0]' />
                                    <FaReddit className='text-base text-[#FF4500]' />
                                </div>
                            ) : ""}
                            <Typography variant="bold" className="text-xs md:text-lg lg:text-lg text-left"> {referral.title} </Typography>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='pt-5 pr-5 md:pr-10 lg:pr-10'>
                        <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {referral.content1} </Typography>
                        <Typography variant="normal" className="text-xs md:text-base lg:text-base mt-5"> {referral.content2} </Typography>
                        <Typography variant="normal" className="text-xs md:text-base lg:text-base mt-5"> {referral.content3} </Typography>
                        <Typography variant="normal" className="text-xs md:text-base lg:text-base mt-5"> {referral.content4} </Typography>
                        <Typography variant="normal" className="text-xs md:text-base lg:text-base mt-5"> {referral.content5} </Typography>
                        <Typography variant="normal" className="text-xs md:text-base lg:text-base mt-5"> {referral.content6} </Typography>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}

export default Referrals