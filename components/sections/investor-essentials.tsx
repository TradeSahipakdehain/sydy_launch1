"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Baby, ChevronDown, GraduationCap, Heart, Home, Plane, ShieldCheck, TrendingUp, Umbrella } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const goals = [
  { title: "Retirement", copy: "Build a regular income for life after work.", icon: Umbrella },
  { title: "Child education", copy: "Plan ahead for school and higher education costs.", icon: GraduationCap },
  { title: "Marriage", copy: "Prepare for an important family milestone.", icon: Heart },
  { title: "Wealth creation", copy: "Invest steadily for long-term financial growth.", icon: TrendingUp },
  { title: "Buying a home", copy: "Build the down payment or future purchase amount.", icon: Home },
  { title: "Emergency fund", copy: "Create a safety buffer for unexpected expenses.", icon: ShieldCheck },
  { title: "Travel and other goals", copy: "Give every personal goal its own investment plan.", icon: Plane },
];

const faqs = [
  ["What is a Systematic Investment Plan (SIP)?", "A SIP lets you invest a fixed amount in a mutual fund at regular intervals, usually every month."],
  ["How do I start a SIP?", "Choose a goal, decide an affordable amount, complete KYC and select a suitable mutual fund with guidance where needed."],
  ["What is the minimum amount to start a SIP?", "The minimum differs by scheme. Many mutual fund SIPs can be started with a relatively small monthly amount."],
  ["Can I stop or change my SIP?", "Yes. In most cases you may pause, stop, increase or decrease future SIP instalments, subject to the scheme and platform process."],
  ["What happens if I miss an instalment?", "A missed instalment normally does not cancel the investment already made. Repeated bank-mandate failures may lead to the SIP being stopped."],
  ["Are SIP returns guaranteed?", "No. SIPs invest in market-linked mutual funds, so returns can rise or fall and are not guaranteed."],
  ["Is SIP tax-free?", "Tax treatment depends on the fund category, holding period and applicable law. ELSS funds have separate lock-in and tax-benefit rules."],
  ["What is a good investment period for SIP?", "The right period depends on your goal. Equity-oriented funds are generally considered for longer horizons because markets can fluctuate."],
  ["Can I have more than one SIP?", "Yes. You can use separate SIPs for retirement, education, marriage and other goals, provided the total remains affordable."],
  ["Are there hidden charges?", "Mutual funds have disclosed expense ratios and may have exit loads. Review the scheme documents and platform disclosures before investing."],
];

const simpleBlogs = [
  ["Types of SIP Investment", "types-of-sip-investment", "Understand regular, top-up and flexible SIP options."],
  ["How to Open a SIP Account Online", "how-to-open-sip-account-online", "A simple guide to KYC, choosing a fund and starting your first SIP."],
  ["Understanding NAV in Mutual Funds", "understanding-nav-mutual-funds", "Learn what NAV means and what it does—and does not—tell you."],
  ["SIP for Retirement Planning", "sip-for-retirement-planning", "Estimate your retirement need and invest toward it step by step."],
  ["Tax Benefits of SIP Investment", "tax-benefits-of-sip-investment", "Understand where tax benefits may apply and the rules to check."],
  ["SIP for Education Planning", "sip-for-education-planning", "Plan for rising education costs with a goal-linked SIP."],
  ["SIP vs Term Deposit", "sip-vs-term-deposit", "Compare market-linked growth with fixed-return savings."],
];

const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0, notation: value >= 10000000 ? "compact" : "standard" }).format(Math.max(0, value));

function FutureValue({ monthly, years, rate }: { monthly: number; years: number; rate: number }) {
  const monthlyRate = rate / 1200;
  const months = years * 12;
  return monthlyRate ? monthly * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate) : monthly * months;
}

function CalculatorPanel({ type }: { type: "sip" | "swp" | "education" | "retirement" | "marriage" }) {
  const isSwp = type === "swp";
  const isGoal = type === "education" || type === "marriage";
  const [amount, setAmount] = useState(isSwp ? 3000000 : isGoal ? 1500000 : type === "retirement" ? 50000 : 10000);
  const [years, setYears] = useState(type === "retirement" ? 20 : 15);
  const [rate, setRate] = useState(isSwp ? 8 : 12);

  let result = 0;
  let resultLabel = "Estimated value";
  let helper = "Assuming monthly investing at the selected illustrative return.";
  if (type === "sip") result = FutureValue({ monthly: amount, years, rate });
  if (isSwp) {
    let balance = amount;
    const withdrawal = Math.max(5000, amount * 0.006);
    for (let month = 0; month < years * 12; month += 1) balance = balance * (1 + rate / 1200) - withdrawal;
    result = balance;
    resultLabel = "Estimated balance after withdrawals";
    helper = `Illustrative monthly withdrawal: ${money(withdrawal)}.`;
  }
  if (isGoal) {
    const futureCost = amount * 1.06 ** years;
    const monthlyRate = rate / 1200;
    const months = years * 12;
    result = futureCost * monthlyRate / (((1 + monthlyRate) ** months - 1) * (1 + monthlyRate));
    resultLabel = "Estimated monthly SIP needed";
    helper = `Estimated future goal cost: ${money(futureCost)} at 6% inflation.`;
  }
  if (type === "retirement") {
    const futureMonthlyExpense = amount * 1.06 ** years;
    const targetCorpus = futureMonthlyExpense * 12 * 25;
    const monthlyRate = rate / 1200;
    const months = years * 12;
    result = targetCorpus * monthlyRate / (((1 + monthlyRate) ** months - 1) * (1 + monthlyRate));
    resultLabel = "Estimated monthly SIP needed";
    helper = `Indicative retirement corpus: ${money(targetCorpus)} using a simple 25× annual-expense estimate.`;
  }

  const amountLabel = isSwp ? "Starting investment" : type === "retirement" ? "Current monthly expenses" : isGoal ? "Goal cost today" : "Monthly SIP";
  const min = isSwp ? 500000 : isGoal ? 500000 : type === "retirement" ? 15000 : 1000;
  const max = isSwp ? 10000000 : isGoal ? 10000000 : type === "retirement" ? 300000 : 100000;
  const step = isSwp ? 100000 : isGoal ? 100000 : type === "retirement" ? 5000 : 1000;

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
      <div className="space-y-7">
        <label className="block">
          <span className="mb-3 flex justify-between text-sm"><span className="text-[#cccccc]">{amountLabel}</span><strong className="font-mono text-[#d6fe51]">{money(amount)}</strong></span>
          <Slider value={[amount]} min={min} max={max} step={step} onValueChange={([value]) => setAmount(value)} aria-label={amountLabel} />
        </label>
        <label className="block">
          <span className="mb-3 flex justify-between text-sm"><span className="text-[#cccccc]">Time period</span><strong className="font-mono text-[#479ffa]">{years} years</strong></span>
          <Slider value={[years]} min={3} max={35} step={1} onValueChange={([value]) => setYears(value)} aria-label="Time period" />
        </label>
        <label className="block">
          <span className="mb-3 flex justify-between text-sm"><span className="text-[#cccccc]">Expected annual return</span><strong className="font-mono text-[#4ebe96]">{rate}%</strong></span>
          <Slider value={[rate]} min={4} max={16} step={0.5} onValueChange={([value]) => setRate(value)} aria-label="Expected annual return" />
        </label>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[.035] p-6">
        <p className="text-[10px] tracking-[.15em] text-[#868f97]">{resultLabel.toUpperCase()}</p>
        <p className="mt-4 break-words text-4xl font-semibold tracking-[-.07em] text-white md:text-5xl">{money(result)}</p>
        <p className="mt-4 text-xs leading-5 text-[#868f97]">{helper}</p>
        <p className="mt-5 border-t border-white/10 pt-4 text-[10px] leading-4 text-[#69727a]">Illustration only. Actual returns, inflation, taxes and product costs may differ. This is not investment advice or a guarantee.</p>
      </div>
    </div>
  );
}

export function InvestorEssentials() {
  return (
    <>
      <section id="goals" className="section-rule bg-[#131313] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_.78fr] lg:items-center">
            <div>
              <p className="text-[10px] tracking-[.18em] text-[#4ebe96]">PLAN FOR WHAT MATTERS</p>
              <h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.08em] md:text-7xl">Goal-based investing,<br /><span className="text-[#d6fe51]">made simple.</span></h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#868f97]">Tell us what you are investing for and when you need the money. We help connect the goal to a suitable investment plan.</p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_65%_45%,rgba(71,159,250,.16),transparent_55%)] md:min-h-[420px]">
              <Image src="/visuals/goal-progression.webp" alt="Investor progressing step by step toward a financial goal" width={1024} height={1024} className="absolute inset-0 size-full object-contain p-3" sizes="(max-width: 1024px) 100vw, 42vw" />
            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map(({ title, copy, icon: Icon }) => <article key={title} className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5"><Icon className="size-6 text-[#4ebe96]" /><h3 className="mt-8 text-xl font-semibold tracking-[-.05em]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#868f97]">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="calculators" className="section-rule bg-[#0b0b0b] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_.6fr] lg:items-center">
            <div>
              <p className="text-[10px] tracking-[.18em] text-[#479ffa]">INVESTMENT CALCULATORS</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-.08em] md:text-7xl">Turn a goal into<br />a monthly number.</h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#868f97]">Explore a simple illustration, adjust the assumptions and see how time and consistency can shape a financial goal.</p>
            </div>
            <div className="relative mx-auto h-[340px] w-full max-w-sm md:h-[430px]">
              <div className="absolute inset-x-8 bottom-4 h-24 rounded-full bg-[#479ffa]/15 blur-3xl" />
              <Image src="/visuals/portfolio-dashboard.webp" alt="Illustrative mobile portfolio dashboard" width={900} height={1350} className="relative size-full object-contain" sizes="(max-width: 1024px) 90vw, 32vw" />
            </div>
          </div>
          <Card className="mt-12 p-5 md:p-8">
            <Tabs defaultValue="sip">
              <TabsList className="h-auto flex-wrap justify-start gap-1">
                <TabsTrigger value="sip">SIP</TabsTrigger><TabsTrigger value="swp">SWP</TabsTrigger><TabsTrigger value="education">Child education</TabsTrigger><TabsTrigger value="retirement">Retirement</TabsTrigger><TabsTrigger value="marriage">Marriage</TabsTrigger>
              </TabsList>
              <TabsContent value="sip"><CalculatorPanel type="sip" /></TabsContent>
              <TabsContent value="swp"><CalculatorPanel type="swp" /></TabsContent>
              <TabsContent value="education"><CalculatorPanel type="education" /></TabsContent>
              <TabsContent value="retirement"><CalculatorPanel type="retirement" /></TabsContent>
              <TabsContent value="marriage"><CalculatorPanel type="marriage" /></TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      <section id="learn" className="section-rule bg-[#131313] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-[10px] tracking-[.18em] text-[#479ffa]">LEARN BEFORE YOU INVEST</p><h2 className="mt-4 text-5xl font-semibold tracking-[-.08em] md:text-7xl">Simple investment guides.</h2></div><Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#4ebe96]">View all articles <ArrowUpRight size={15} /></Link></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {simpleBlogs.map(([title, slug, copy]) => <Link href={`/blog/${slug}`} key={slug} className="group flex min-h-56 flex-col rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-[#479ffa]/50"><Baby className="size-5 text-[#479ffa]" /><h3 className="mt-8 text-xl font-semibold tracking-[-.05em] group-hover:text-[#b6d6ff]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#868f97]">{copy}</p><ArrowUpRight className="mt-auto size-4 text-[#868f97]" /></Link>)}
          </div>
        </div>
      </section>

    </>
  );
}

export function FaqSection() {
  return (
      <section id="faq" className="section-rule bg-[#0b0b0b] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center"><p className="text-[10px] tracking-[.18em] text-[#4ebe96]">COMMON QUESTIONS</p><h2 className="mt-4 text-5xl font-semibold tracking-[-.08em] md:text-7xl">Frequently asked questions.</h2></div>
          <div className="mt-12 grid gap-x-8 lg:grid-cols-2">
            {faqs.map(([question, answer]) => <details key={question} className="group border-b border-white/10"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-base font-medium text-[#cccccc]"><span>{question}</span><ChevronDown className="size-4 shrink-0 text-[#479ffa] transition group-open:rotate-180" /></summary><p className="max-w-xl pb-6 pr-8 text-sm leading-7 text-[#868f97]">{answer}</p></details>)}
          </div>
        </div>
      </section>
  );
}
