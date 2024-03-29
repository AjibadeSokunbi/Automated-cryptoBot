"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useFormStatus } from "react-dom";
import { BiLoaderAlt } from "react-icons/bi";

export function SubmitButton() {
  const { pending } = useFormStatus();
  const toasting = () => {
    toast({
      title: "Settings Saved!",
      variant: "default",
    });
  };
  return (
    <Button
      type="submit"
      onClick={toasting}
      disabled={pending}
      className="w-full"
      size="sm"
    >
      Save {pending && <BiLoaderAlt className="mr-2 h-4 w-4 animate-spin" />}
    </Button>
  );
}
