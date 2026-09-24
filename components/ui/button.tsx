import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#479ffa] disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "border-white/30 bg-white text-[#0b0b0b] hover:bg-[#e6e6e6]", ghost: "border-white/20 bg-transparent text-white hover:border-white/60 hover:bg-white/5", signal: "border-[#479ffa]/50 bg-[#479ffa]/10 text-[#b6d6ff] hover:bg-[#479ffa]/20" }, size: { default: "h-11 px-5", sm: "h-9 px-4 text-xs", icon: "size-10" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />);
Button.displayName = "Button";
