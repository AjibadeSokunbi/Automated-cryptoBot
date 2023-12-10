import React from 'react';
import MetabotsSub from '@/components/metabots/Metabots';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';

const Metabots = async () => {
  const user = await getCurrentUser();
  // console.log("user:",user);
  if(!user?.email) {
    redirect("/login")
  }
  return (
    <>
      <MetabotsSub />  
    </>
  )
}

export default Metabots