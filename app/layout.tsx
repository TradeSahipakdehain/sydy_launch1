import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYDY CAPITAL | AI-Powered Investment Intelligence",
  description: "AI-powered investment intelligence, portfolio analytics and precision-led execution for discerning investors.",
  keywords: ["best mutual funds India", "fixed deposits", "algo trading platform", "PMS India", "bonds investment", "SIP calculator", "market insights"],
  alternates: { canonical: "https://www.sydycapital.com" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
