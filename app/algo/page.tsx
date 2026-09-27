import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { strategies } from "@/components/sections/content-expansion";
import { BrandMark } from "@/components/brand-mark";

export const metadata: Metadata = {
  title: "Algo Strategies for Indian Markets | SYDY Capital",
  description: "Explore SYDY Capital's rules-based Indian market strategy concepts, how they work, and the risks to consider.",
  alternates: { canonical: "https://sydycapital.com/algo" },
};

const strategyDetails = [
  {
    type: "Trend following",
    description: "Looks for sustained trends among large Indian companies and moves to cash when its rules indicate weaker conditions.",
    steps: ["Checks a defined NIFTY 100 universe", "Uses repeatable entry and exit rules", "Sets position and downside limits"],
    risk: "A trend may reverse suddenly. The model can also miss gains while it is in cash.",
  },
  {
    type: "Short-term mean reversion",
    description: "Looks for brief, outsized Bank NIFTY moves that may return toward a more typical range within the trading day.",
    steps: ["Watches intraday price moves", "Acts only when the rule set is met", "Uses defined exit and loss limits"],
    risk: "Intraday trading can be volatile. Transaction costs and slippage can meaningfully affect results.",
  },
  {
    type: "Quality and momentum",
    description: "Combines company-quality checks with price strength to build a periodically reviewed basket from the broader Indian market.",
    steps: ["Screens a NIFTY 500 universe", "Balances quality and momentum signals", "Reviews holdings on a set schedule"],
    risk: "Concentrated styles may underperform for long periods and can experience sharp drawdowns.",
  },
];

export default function AlgoPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-7">
        <Link href="/" aria-label="SYDY Capital home" className="inline-flex items-center"><BrandMark className="w-24" /></Link>
        <Link href="/" className="inline-flex items-center gap-2 text-xs text-[#868f97] transition hover:text-white"><ArrowLeft size={15} /> Home</Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="text-[10px] font-medium tracking-[.18em] text-[#4ebe96]">ALGO STRATEGIES / INDIAN MARKETS</p>
        <h1 className="mt-5 max-w-4xl text-6xl font-semibold leading-[.88] tracking-[-.09em] md:text-8xl">Invest with <span className="text-[#ffa16c]">clear rules.</span></h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-[#aab1b8]">Explore three different ways a rules-based investment strategy can approach the Indian stock market. Each uses a defined market, entry and exit rules, and risk limits.</p>
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#ffa16c]/25 bg-[#ffa16c]/[.07] p-4 text-xs leading-6 text-[#e7b999]">
          <ShieldCheck className="mt-0.5 size-5 shrink-0" /> The figures and charts below are illustrative interface examples, not live or audited SYDY Capital performance. Actual results may differ, and losses are possible.
        </div>
      </section>

      <section className="section-rule mx-auto max-w-6xl px-6 py-16 md:py-24" aria-label="Algo strategy examples">
        <div className="grid gap-5 lg:grid-cols-3">
          {strategies.map((strategy, index) => {
            const detail = strategyDetails[index];
            return (
              <article key={strategy.name} className="flex flex-col rounded-2xl border border-white/10 bg-[#131313] p-6 md:p-7">
                <p className="text-[10px] tracking-[.16em] text-[#479ffa]">STRATEGY 0{index + 1} · {detail.type.toUpperCase()}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-.06em]">{strategy.name}</h2>
                <p className="mt-2 text-xs text-[#868f97]">{strategy.universe}</p>
                <p className="mt-6 text-sm leading-7 text-[#cccccc]">{detail.description}</p>
                <svg viewBox="0 0 380 110" className="mt-8 h-28 w-full" role="img" aria-label={`${strategy.name} illustrative chart`}>
                  <path d="M0 25H380M0 58H380M0 95H380" stroke="rgba(255,255,255,.08)" />
                  <path d={strategy.path} fill="none" stroke={strategy.color} strokeWidth="2.5" />
                </svg>
                <p className="mt-2 text-[10px] text-[#868f97]">Illustrative shape, not historical results</p>
                <h3 className="mt-8 text-sm font-semibold">How it works</h3>
                <ul className="mt-3 grid gap-2 text-xs leading-5 text-[#aab1b8]">
                  {detail.steps.map((step) => <li key={step} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4ebe96]" />{step}</li>)}
                </ul>
                <div className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-[10px] tracking-[.13em] text-[#ffa16c]">KEY RISK</p>
                  <p className="mt-2 text-xs leading-5 text-[#868f97]">{detail.risk}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-rule bg-[#131313] px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div><p className="text-[10px] tracking-[.16em] text-[#4ebe96]">ASK ABOUT SUITABILITY</p><h2 className="mt-3 text-4xl font-semibold tracking-[-.07em]">Want to understand the approach?</h2><p className="mt-4 max-w-xl text-sm leading-6 text-[#868f97]">We can explain the rules, risks, costs and available evidence before you make any decision.</p></div>
          <Link href="/#contact" className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-white px-5 text-sm font-semibold text-[#0b0b0b] transition hover:bg-[#e6e6e6]">Ask a question <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
