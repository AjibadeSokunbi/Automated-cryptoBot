"use client";
import React, {useState} from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { IoIosClose } from "react-icons/io";
import { Button } from '@/components/ui/button';
import { IoMdWarning } from "react-icons/io";

interface Wallet {
    id: number;
    name: string;
    isVisible: boolean;
}

const CreateWallet: React.FC = () => {

    const [open, setOpen] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);


    const [wallets, setWallets] = useState<Wallet[]>([
        { id: 1, name: 'Wallet 1', isVisible: true },
        { id: 2, name: 'Wallet 2', isVisible: false },
        { id: 3, name: 'Wallet 3', isVisible: false },
      ]);
    
      const createWallet = () => {
        const visibleWallets = wallets.filter((wallet) => wallet.isVisible);
      
        if (visibleWallets.length < 3) {
          const newWallet: Wallet = {
            id: findNextAvailableId(wallets),
            name: `Wallet ${findNextAvailableId(wallets)}`,
            isVisible: true,
          };
      
          setWallets((prevWallets) => [...prevWallets, newWallet]);
        } else {
          console.log('You cannot create more than 3 wallets.');
        }
      };
      
    const findNextAvailableId = (wallets: Wallet[]) => {
        const existingIds = wallets.map((wallet) => wallet.id);
        let nextId = 1;

        while (existingIds.includes(nextId)) {
            nextId++;
        }

        return nextId;
    };
    
    const deleteWallet = (walletId: number) => {
        setWallets((prevWallets) =>
            prevWallets.map((wallet) =>
            wallet.id === walletId ? {...wallet, isVisible: !wallet.isVisible } : wallet
            )
        );
        setShowConfirmation(true);
        setOpen(false);
    };

    setTimeout(() => {
        setShowConfirmation(false);
    }, 4000);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false);
    };

  return (
        <Stack alignItems='center' justifyContent='between' sx='w-full mb-5 gap-3'>
            <Stack alignItems='center' sx='w-auto gap-4'>
                {wallets.map((wallet) => (
                <Stack alignItems='center' justifyContent='between' sx={`w-auto px-2 md:px-3 lg:px-3 py-1 bg-[#063172] rounded-2xl ${wallet.isVisible ? 'flex' : 'hidden'}`} key={wallet.id}>
                    <Typography variant='semibold' className='text-[#DBE9FF] text-[10px] md:text-sm lg:text-sm mr-2 md:mr-3 lg:mr-3'> {wallet.name} </Typography>
                    <IoIosClose className="text-[#B4D2FE] text-base cursor-pointer" onClick={handleOpen}/>
                    {open && (
                        <Stack flexDirection="col" sx='fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center w-screen h-screen'>
                            <Stack flexDirection="col" sx="bg-[#17212F] border-none p-5 w-fit h-fit overflow-hidden relative rounded-lg">
                                <Typography variant='normal' className='text-center text-[10px] mb-1'> Are you sure you want to delete this wallet? </Typography>
                                
                                <Typography variant='normal' className='text-center text-[10px] mb-3'> If you delete this wallet, it cannot be recovered again </Typography>
                                
                                <Stack alignItems='center' justifyContent='between' sx='w-full px-10'>
                                    <Button variant='default' size="sm" className='text-[#E7E7E7] bg-[#212E40]' onClick={() => deleteWallet(wallet.id)}> Yes </Button>
                                    <Button variant='default' size="sm" className='text-[#E7E7E7] bg-[#0D6EFD]' onClick={handleClose}> No </Button>
                                </Stack>
                                
                                {showConfirmation && (
                                    <Stack alignItems='center' justifyContent='center' sx='w-fit px-5 py-3 bg-[#DBE9FF] rounded-md'>
                                        <IoMdWarning className='text-[#0C63E4] text-sm mr-2' />
                                        <Typography variant='medium' className='text-[10px]'> <span className='text-[#0C63E4]'> Wallet has been deleted </span> </Typography>
                                    </Stack> 
                                )}
                            </Stack>
                        </Stack>
                    )}
                </Stack>
                ))}
            </Stack>
            <Button variant="default" size="default" className='text-xs md:text-sm lg:text-sm font-bold' onClick={createWallet}> Create Wallet </Button>
        </Stack>
  )
}

export default CreateWallet