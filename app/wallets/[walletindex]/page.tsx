import React, { FC } from 'react';
import Wallets from '@/components/wallets/Wallets';
import FullContainer from '@/components/custom/FullContainer';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';

interface Props {
params: {
  walletindex: string
}
}

const page: FC<Props> = async ({params}) => {

  return (
    <FullContainer className="border-t border-b border-gray-900 mt-14 md:pl-6 lg:pl-6 bg-background1">
        <Stack flexDirection="col" sx="w-full md:w-4/12 lg:w-4/12 pl-3 md:pl-0 lg:pl-0">
          <Typography
            variant="bold"
            className="leading-[35.10px] my-6 text-base md:text-[27px] lg:text-[27px]"
          >
            My Wallet
          </Typography>
        </Stack>
        <Stack sx='w-full border-t border-[#17212F] md:border-none lg:border-none pt-10 md:pt-0 lg:pt-0'>
            <Wallets walletIndex={Number(params.walletindex)} />
        </Stack>
      </FullContainer>
    )
}

export default page