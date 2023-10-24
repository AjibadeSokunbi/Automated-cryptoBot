"use client";
import React, { useState, useEffect } from "react";
import Stack from "../custom/Stack";
import Typography from "../custom/Typography";

interface CountdownTimerProps {}

function CountdownTimer({}: CountdownTimerProps) {
  const targetDate = new Date("2023-11-01T00:00:00");
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  const [timeLeft, setTimeLeft] = useState<number>(calculateTimeLeft());
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (newTimeLeft > 0) {
        setTimeLeft(newTimeLeft);
      } else {
        clearInterval(intervalId);
        setTimeLeft(0); // Ensure it doesn't go below zero
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      {mounted && (
        <Stack flexDirection='col' sx="w-full gap-5 items-center md:items-start lg:items-start">
          <Stack alignItems='center' sx='gap-7'>
            <Stack flexDirection='col' sx='w-10 justify-center items-center gap-5'>
                <Typography variant='bold' className="text-[40px]"> <span className='text-[#FFC107]'> {days} </span> </Typography>
                <Typography variant='normal' className="text-base"> Days </Typography>
            </Stack>
            <Stack flexDirection='col' sx='w-10 justify-center items-center gap-5'>
                <Typography variant='bold' className="text-[40px]"> <span className='text-[#FFC107]'> {hours} </span> </Typography>
                <Typography variant='normal' className="text-base"> Hrs </Typography>
            </Stack>
            <Stack flexDirection='col' sx='w-10 justify-center items-center gap-5'>
                <Typography variant='bold' className="text-[40px]"> <span className='text-[#FFC107]'> {minutes} </span> </Typography>
                <Typography variant='normal' className="text-base"> Mins </Typography>
            </Stack>
            <Stack flexDirection='col' sx='w-10 justify-center items-center gap-5'>
                <Typography variant='bold' className="text-[40px]"> <span className='text-[#FFC107]'> {seconds} </span> </Typography>
                <Typography variant='normal' className="text-base"> Sec </Typography>
            </Stack>
        </Stack>
    </Stack>
      )}
    </>
  );
}

export default CountdownTimer;
