"use client";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
export const Tabs = TabsPrimitive.Root;
export const TabsList = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) => <TabsPrimitive.List className={cn("inline-flex rounded-full border border-white/15 bg-[#131313] p-1", className)} {...props} />;
export const TabsTrigger = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => <TabsPrimitive.Trigger className={cn("rounded-full px-3 py-2 text-xs text-[#868f97] transition data-[state=active]:bg-white data-[state=active]:text-[#0b0b0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#479ffa]", className)} {...props} />;
export const TabsContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) => <TabsPrimitive.Content className={cn("mt-5", className)} {...props} />;
