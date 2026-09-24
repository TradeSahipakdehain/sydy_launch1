"use client";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = ({ children }: { children: React.ReactNode }) => <TooltipPrimitive.Portal><TooltipPrimitive.Content sideOffset={8} className="z-50 max-w-52 rounded-lg border border-white/15 bg-[#191919] px-3 py-2 text-xs text-[#cccccc] shadow-[0_0_35px_rgba(0,0,0,.6)]">{children}</TooltipPrimitive.Content></TooltipPrimitive.Portal>;
