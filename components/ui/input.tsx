import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
        <input
            type={type}
            className={cn(
            "flex h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-50",
            className
            )}
            ref={ref}
            {...props}
        />
        );
    }
);

Input.displayName = "Input";

export { Input };