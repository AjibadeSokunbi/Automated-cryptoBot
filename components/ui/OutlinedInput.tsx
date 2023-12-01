import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endAddon?: React.ReactNode;
}
const OutlinedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, endAddon, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-neutral-200  bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500    disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 placeholder:text-neutral-400 ",
            className
          )}
          ref={ref}
          {...props}
        />
        {endAddon && (
          <div className="absolute top-0 right-0 h-full flex items-center px-2">
            {endAddon}
          </div>
        )}
      </div>
    );
  }
);
OutlinedInput.displayName = "OutlinedInput";

export { OutlinedInput };
