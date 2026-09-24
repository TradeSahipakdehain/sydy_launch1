"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = ({ children }: { children: React.ReactNode }) => <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" /><DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-[#131313] p-6 shadow-[0_0_60px_rgba(0,0,0,.9)]"><DialogPrimitive.Close className="absolute right-4 top-4 text-[#868f97] hover:text-white" aria-label="Close"><X size={18} /></DialogPrimitive.Close>{children}</DialogPrimitive.Content></DialogPrimitive.Portal>;
