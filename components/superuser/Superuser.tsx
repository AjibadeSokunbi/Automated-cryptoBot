import React from 'react';
import Typography from '../custom/Typography';
import Stack from '../custom/Stack';
import { superuserfaqs } from '@/utils/MockData';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BiSolidSquare } from "react-icons/bi";

const Superuser = () => {
  return (
    <div className="w-full h-auto bg-no-repeat bg-cover bg-center bg-[url('/Background.gif')] bg-fixed px-5">
        <Stack flexDirection='col' alignItems='center' justifyContent='center' sx='mb-10 pt-5 md:pt-10 lg:pt-10'>
            <Typography variant='black' className='text-lg md:text-[40px] lg:text-[40px] mb-5'> Become A Metadapp Superuser </Typography>
            <Typography variant='normal' className='text-sm md:text-base lg:text-base text-center w-full md:w-[60%] lg:w-[60%]'> Become a Superuser to access premium features and cutting-edge tools, Earn points for rewards and shape the futureof Metadapp by providing feedback. </Typography>
        </Stack>
        <Accordion type="multiple" className="w-full no-underline mb-10">  
            {superuserfaqs.map((superuserfaq, index) => (
                <AccordionItem value={`item-${index}`} key={index} className='mb-5'>
                    <AccordionTrigger className='bg-[#0C141F] px-2 md:py-3 lg:py-3 md:px-5 lg:px-5'>
                        <Typography variant="black" className="text-xs md:text-2xl lg:text-2xl text-left"> {superuserfaq.title} </Typography>
                    </AccordionTrigger>
                    <AccordionContent className='pt-5 pr-5 md:pr-10 lg:pr-10 pl-5'>
                        {superuserfaq.id === 1 && (
                            <>
                                <Stack alignItems='center' sx='mb-5 gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content1} </Typography>
                                </Stack>
                                <Stack alignItems='center' sx='mb-5 gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content2} </Typography>
                                </Stack>
                                <Stack alignItems='center' sx='gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content3} </Typography>
                                </Stack>
                            </>
                        
                        )}

                        {superuserfaq.id === 2 && (
                            <>
                                <Stack alignItems='center' sx='mb-5 gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content1} </Typography>
                                </Stack>
                                <Stack alignItems='center' sx='gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content2} </Typography>
                                </Stack>
                            </>
                        )}
                        
                        {superuserfaq.id === 3 && (
                            <>
                                <Stack alignItems='center' sx='mb-5 gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content1} </Typography>
                                </Stack>
                                <Stack alignItems='center' sx='mb-5 gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content2} </Typography>
                                </Stack>
                                <Stack alignItems='center' sx='mb-5 gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content3} </Typography>
                                </Stack>
                                <Stack alignItems='center' sx='gap-3'>
                                    <div className='w-auto'>
                                        <BiSolidSquare className='text-white text-[5px]'/>
                                    </div>
                                    <Typography variant="normal" className="text-xs md:text-base lg:text-base"> {superuserfaq.content4} </Typography>
                                </Stack>
                            </>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
        <div className="w-full mt-2 mb-5">
            <div className="w-full mb-3"></div>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScckCVn_HXccgHWkhWej3zkXEhkXl4R_eghGT7F3_C6tTQIAg/viewform?embedded=true"
                className='w-full h-[1374px]'
            >
                Loading…
            </iframe>
        </div>
    </div>
  )
}

export default Superuser