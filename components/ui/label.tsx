import * as React from "react";

import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-semibold leading-none text-slate-800",
        className
      )}
      {...props}
    />
  );
}

export { Label };