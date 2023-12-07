"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useFormStatus } from "react-dom";

export function SettingsButton() {
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
      variant="default"
      size="default"
      className="mx-auto w-full text-base font-semibold"
    >
      Update{pending && "...."}
    </Button>
  );
}
