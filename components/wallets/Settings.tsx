"use client";
import React, {useState} from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Typography from '@/components/custom/Typography';
import Stack from '@/components/custom/Stack';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider3 } from '../ui/slider';
import { Switch4 } from '../ui/switch';
import { HiInformationCircle } from "react-icons/hi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { Input } from '@/components/ui/input';
import { MdOutlineContentCopy } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { securityData } from '@/utils/MockData';

const Settings = () => {

    const [openTrade, setOpenTrade] = useState(true);
    const [openGas, setOpenGas] = useState(true);
    const [openKeys, setOpenKeys] = useState(false);
    const [showKeys, setShowKeys] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [enterPassword, setEnterPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [errorAlt, setErrorAlt] = useState<string | null>(null);

    const handleOpenTrade = () => {
        setOpenTrade(!openTrade);
    }

    const handleOpenGas = () => {
        setOpenGas(!openGas);
    }

    const handleCloseKeys = () => {
        setOpenKeys(false);
    };

    const handleShowKeys = () => {
        setError(null);

        if (password.trim() === '') {
        setError('Password cannot be empty.');
        } else if (password.length < 7) {
        setError('Password must be at least 5 characters.');
        } else if (password !== confirmPassword) {
        setError('Passwords do not match. Please enter matching passwords.');
        } else {
        setShowKeys(true);
        }
    };

    const handleOpenKeys = () => {
        setErrorAlt(null);

        if (enterPassword.trim() === '') {
            setErrorAlt('Password cannot be empty.');
        } else if (enterPassword !== confirmPassword) {
            setErrorAlt('Invalid password, Kindly input the correct password.');
        } else {
            setOpenKeys(true)
        }
    }

    

  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="default" size="sm" className='bg-[#212E40] text-[#E7E7E7] font-bold text-[10px] md:text-base lg:text-base'> Settings </Button>
        </DialogTrigger>
        <DialogContent className='bg-[#0A1019] py-3 px-0 border-none'>
            <Tabs defaultValue="walletSettings" className="w-full">
                <TabsList className='mb-2 px-1 w-full mx-auto flex justify-start items-center bg-[#0A1019]'>
                    <TabsTrigger value="walletSettings" className='ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-fit px-5 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7]'> Wallet Settings </TabsTrigger>
                    <TabsTrigger value="security" className='ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-fit px-5 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7]'> Security </TabsTrigger>
                </TabsList>
                <TabsContent value="walletSettings">
                    <Stack flexDirection='col' sx='bg-[#0C141F] border-t border-[#212E40] p-[3%]'>
                        <Stack flexDirection='col'>
                            <Stack alignItems='center'>
                                <Typography> <span className='text-[#B5B6B6] text-sm font-medium mr-1'> Trade Settings </span> </Typography>
                                <HiInformationCircle className="text-xs md:text-base lg:text-base text-[#989898] mr-2" />
                                <Stack sx='w-fit cursor-pointer' onClick={handleOpenTrade}>
                                    {!openTrade ? <IoChevronDown className="text-xs md:text-base lg:text-base text-[#989898]" /> : <IoChevronUp className="text-xs md:text-base lg:text-base text-[#989898]" />}
                                </Stack>
                            </Stack>
                            <span className='mx-auto w-full h-[2px] bg-[#212E40] mt-2 mb-5'> &nbsp; </span>
                            {openTrade && (
                                <>
                                    <Stack flexDirection='col' sx='w-full mb-8'>
                                        <Typography variant='bold' className='text-base mb-2'> Scam Score Settings: </Typography>
                                        <Typography variant='medium' className='text-xs mb-4'> <span className='text-[#FFC107]'> Between 0-100% </span> </Typography>
                                        <Slider3 />
                                    </Stack>
                                    <Stack flexDirection='col' sx='w-full mb-8'>
                                        <Typography variant='bold' className='text-base mb-2'> Maximum slippage allowed: </Typography>
                                        <Typography variant='medium' className='text-xs mb-4'> <span className='text-[#FFC107]'> Between 0-100% </span> </Typography>
                                        <Slider3 />
                                    </Stack>
                                    <Stack alignItems='center' justifyContent='between' sx='w-full mb-5'>
                                        <Typography variant='medium' className='text-base'> Fail Safe Protection: </Typography>
                                        <Switch4 />
                                    </Stack>
                                    <Stack alignItems='center' justifyContent='between' sx='w-full mb-5'>
                                        <Typography variant='medium' className='text-base'> Private Transactions: </Typography>
                                        <Switch4 />
                                    </Stack>
                                </>
                            )}
                        </Stack>

                        <Stack flexDirection='col'>
                            <Stack alignItems='center'>
                                <Typography> <span className='text-[#B5B6B6] text-sm font-medium mr-2'> Gas Settings </span> </Typography>
                                <HiInformationCircle className="text-xs md:text-base lg:text-base text-[#989898] mr-2" />
                                <Stack sx='w-fit cursor-pointer' onClick={handleOpenGas}>
                                    {!openGas ? <IoChevronDown className="text-xs md:text-base lg:text-base text-[#989898]" /> : <IoChevronUp className="text-xs md:text-base lg:text-base text-[#989898]" />}
                                </Stack>
                            </Stack>
                            
                            <span className='mx-auto w-full h-[2px] bg-[#212E40] mt-2 mb-5'> &nbsp; </span>
                            {openGas && (
                            <Stack alignItems='center' justifyContent='between' sx='w-full mb-5'>
                                <Typography variant='medium' className='text-base'> Auto Gas </Typography>
                                <Switch4 />
                            </Stack>
                            )}
                        </Stack>
                        <Button variant="default" size="default" className='mx-auto w-full text-base font-semibold'> Update </Button>
                    </Stack>
                </TabsContent>
                <TabsContent value="security">
                    <Stack flexDirection='col' sx='w-full px-5'>
                        <Stack flexDirection='col' sx={`w-full ${showKeys === true ? 'hidden' : 'flex'}`}>
                            <Stack flexDirection='col' sx='w-full mb-5'>
                                <Typography variant='medium' className='text-sm mb-3'> <span className='text-[#B5B6B6]'> Set Password </span> </Typography>
                                <Input type='text' placeholder='Casperbigbig2345' required value={password} onChange={(e) => setPassword(e.target.value)} className='w-full text-[#989898] px-2 py-1 rounded-md border border-[#212E40] bg-transparent active:outline-none active:border-none pr-6'/>
                            </Stack>
                            <Stack flexDirection='col' sx='w-full mb-5'>
                                <Typography variant='medium' className='text-sm mb-3'> <span className='text-[#B5B6B6]'> Confirm Password </span> </Typography>
                                <Input type='text' placeholder='Casperbigbig2345' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-full text-[#989898] px-2 py-1 rounded-md border border-[#212E40] bg-transparent active:outline-none active:border-none pr-6'/>
                            </Stack>

                            {error && (
                                <Stack alignItems='center' justifyContent='center' sx='w-full bg-red-400 rounded-md mb-5'>
                                    <Typography variant='normal' className='text-base text-white'> {error} </Typography>
                                </Stack>
                            )}

                            <Button variant="default" size="default" className='w-full text-base font-semibold' onClick={handleShowKeys}> Set Password </Button>
                        </Stack>
                        
                        
                        {showKeys && (
                            <Stack alignItems='center' flexDirection='col' sx={`${openKeys === true ? 'hidden' : 'block'}`}>
                                <Stack flexDirection='col' sx='w-full mb-5'>
                                    <Typography variant='medium' className='text-sm mb-3'> <span className='text-[#B5B6B6]'> Enter Password </span> </Typography>
                                    <Input type='text' placeholder='Casperbigbig2345' required value={enterPassword} onChange={(e) => setEnterPassword(e.target.value)} className='w-full text-[#989898] px-2 py-1 rounded-md border border-[#212E40] bg-transparent active:outline-none active:border-none pr-6'/>
                                </Stack>    

                                {errorAlt && (
                                    <Stack alignItems='center' justifyContent='center' sx='w-full bg-red-400 rounded-md mb-5'>
                                        <Typography variant='normal' className='text-base text-white'> {errorAlt} </Typography>
                                    </Stack>
                                )}

                                <Button variant="default" size="default" className='w-full text-base font-semibold' onClick={handleOpenKeys}> View Private Keys </Button>
                            </Stack>
                        )}
                        
                        {openKeys && (
                            <Stack flexDirection='col' alignItems='center' sx='border border-[#212E40] rounded-md w-full h-[60vh] overflow-y-auto'>
                                <Stack alignItems='center' justifyContent='end' sx='w-full pt-2 pr-5'>
                                    <IoClose className="text-lg text-[#989898] cursor-pointer" onClick={handleCloseKeys}/>
                                </Stack>
                                {securityData?.map((row, index) => (
                                    <Stack sx='mt-5 w-full' key={index}>
                                        <Stack flexDirection='col' sx='w-[30%] md:w-[20%] lg:w-[20%] bg-[#17212F]'>
                                            <Stack alignItems='center' sx='mb-3 w-full px-2 pt-2'>
                                                <Typography variant='semibold' className='text-[10px] capitalize'> {row.title} </Typography>
                                            </Stack>
                                            <Stack alignItems='center' sx='mb-3 w-full px-2'>
                                                <Typography variant='semibold' className='text-[10px]'> Private Key: </Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack flexDirection='col' sx='w-[70%] md:w-[80%] lg:w-[80%] bg-[#212E40]'>
                                            <Stack alignItems='center' sx='mb-3 w-full px-2 pt-2'>
                                                <Typography variant='semibold' className='text-[10px]'> {`${row.address.slice(0, 30)}...`} </Typography>
                                                <MdOutlineContentCopy className="text-[#E7E7E7] text-base ml-2 cursor-pointer"/>
                                            </Stack>
                                            <Stack alignItems='center' sx='mb-3 w-full px-2'>
                                                <Typography variant='semibold' className='text-[10px]'> {`${row.key.slice(0, 30)}...`} </Typography>
                                                <MdOutlineContentCopy className="text-[#E7E7E7] text-base ml-2 cursor-pointer"/>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        )}
                    </Stack>
                </TabsContent>
            </Tabs>
        </DialogContent>
    </Dialog>
  )
}

export default Settings