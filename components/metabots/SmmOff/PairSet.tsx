"use client"
import { TokenPairDetails } from '@/utils/types';
import { useNewStore } from '@/utils/zustanStore/newStore';
import React, { FC, useEffect } from 'react'

interface Props {
   data: TokenPairDetails 
}

const PairSet: FC<Props> = ({...props}) => {
      const { addPairDetails } = useNewStore();

  useEffect(() => {
    addPairDetails(props.data)
  }, [addPairDetails, props.data]);
  return <></>
}

export default PairSet