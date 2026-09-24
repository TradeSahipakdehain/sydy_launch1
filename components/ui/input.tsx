import * as React from "react";
import { cn } from "@/lib/utils";
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input ref={ref} className={cn("h-11 w-full border-b border-white/20 bg-transparent px-0 text-sm text-white outline-none placeholder:text-[#525252] focus:border-[#479ffa]", className)} {...props} />);
Input.displayName = "Input";
