"use client"; // Error components must be Client Components

import FullContainer from "@/components/custom/FullContainer";
import Stack from "@/components/custom/Stack";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("FETCH FROM API SERVER FAILED:",error);
  }, [error]);

  const handleRefreshClick = () => {
    reset();
    window.location.reload();
  };

  return (
    <FullContainer className="flex justify-center items-center h-[90vh] ">
      <Stack flexDirection="col" gap={2}>
        <h1>Something went wrong! 😧❌</h1>
        <Button variant="destructive" onClick={handleRefreshClick}>
          Try again
        </Button>
      </Stack>
    </FullContainer> 
  );
}
