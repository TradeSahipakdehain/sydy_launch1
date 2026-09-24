import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("rounded-2xl border border-white/10 bg-[#191919] shadow-[0_0_44px_rgba(0,0,0,.8)]", className)} {...props} />; }
