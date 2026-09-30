// @ts-nocheck
"use client";
// The insight-card icon tuple is intentionally data-driven at runtime.
// @ts-nocheck

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CandlestickChart,
  ChevronRight,
  CircleHelp,
  Layers3,
  LineChart,
  Orbit,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContentExpansion } from "@/components/sections/content-expansion";
import { ContactSection } from "@/components/sections/contact-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { FaqSection, InvestorEssentials } from "@/components/sections/investor-essentials";
import { AmcMarquee } from "@/components/sections/amc-marquee";
import { SiteFooter } from "@/components/site-footer";
import { BrandMark } from "@/components/brand-mark";
import Link from "next/link";

const products = [
  {
    number: "01",
    title: "Mutual funds",
    copy: "Invest through SIP or lumpsum across equity, debt, hybrid and index funds.",
    role: "Long-term goals",
    instruments: ["Equity", "Hybrid", "Debt", "Multi-asset", "SIP · STP · SWP"],
    href: "#mutual-fund-journey",
    action: "Learn about mutual funds",
  },
  {
    number: "02",
    title: "Deposits & bonds",
    copy: "Explore fixed deposits and bonds for income and greater stability.",
    role: "Income & stability",
    instruments: ["Corporate bonds", "Government securities", "Fixed deposits", "Duration strategy"],
    href: "#contact",
    action: "Ask about these options",
  },
  {
    number: "03",
    title: "PMS & AIF",
    copy: "Specialist investment options for eligible investors with larger portfolios.",
    role: "Advanced investing",
    instruments: ["PMS", "AIF", "SIF", "Structured opportunities"],
    href: "#contact",
    action: "Ask about eligibility",
  },
  {
    number: "04",
    title: "Algo strategies",
    copy: "Optional rules-based strategies with clear risk controls and disclosures.",
    role: "Optional strategies",
    instruments: ["Trend", "Mean reversion", "Quality momentum", "Algo execution"],
    href: "/algo",
    action: "Explore algo strategies",
  },
];

function Metric({
  label,
  value,
  detail,
  positive,
}: {
  label: string;
  value: string;
  detail: string;
  positive?: boolean;
}) {
  return (
    <div className="border-l border-white/15 pl-4">
      <p className="text-[10px] font-medium tracking-[.15em] text-[#868f97]">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-[-.08em] text-white">
        {value}
      </p>
      <p
        className={`mt-1 text-xs ${positive ? "text-[#4ebe96]" : "text-[#868f97]"}`}
      >
        {detail}
      </p>
    </div>
  );
}

function CapitalHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const sculptureScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.72, 1],
    [1, 1.5, 0.55, 0.25],
  );
  const sculptureRotate = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const sculptureOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.42, 0.62, 0.85],
    [0, 0, 1, 1, 0],
  );
  const dashboardY = useTransform(scrollYProgress, [0.42, 0.8], [120, 0]);
  const dashboardOpacity = useTransform(scrollYProgress, [0.42, 0.72], [0, 1]);
  return (
    <section
      ref={ref}
      className="relative h-[260svh] bg-[#0b0b0b]"
      aria-labelledby="hero-title"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div className="page-grid absolute inset-0 opacity-60" />
        <div className="noise pointer-events-none absolute inset-0 opacity-[.12]" />
        <div className="absolute left-[8%] top-28 z-10">
          <p className="text-[10px] font-medium tracking-[.18em] text-[#479ffa]">
            SYDY CAPITAL / MUTUAL FUNDS & WEALTH PLANNING
          </p>
        </div>
        <motion.div
          style={{
            opacity: sculptureOpacity,
            scale: sculptureScale,
            rotateZ: sculptureRotate,
          }}
          className="sculpture-stage absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 md:h-[480px] md:w-[480px]"
        >
          <div className="absolute inset-0 rounded-full bg-[#479ffa]/10 blur-[90px]" />
          <div className="sculpture-core absolute inset-0">
            <i className="sculpture-piece" />
            <i className="sculpture-piece" />
            <i className="sculpture-piece" />
            <i className="sculpture-piece" />
          </div>
        </motion.div>
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.22, 0.5], [1, 1, 0]),
            y: useTransform(scrollYProgress, [0, 0.5], [0, -100]),
          }}
          className="hero-copy relative z-10 mx-auto mt-20 max-w-5xl px-6 text-center"
        >
          <p className="mb-5 text-xs tracking-[.22em] text-[#cccccc]">
            PROSPERITY THROUGH VISION
          </p>
          <h1
            id="hero-title"
            className="text-balance text-[clamp(3.7rem,10vw,9rem)] font-semibold leading-[.82] tracking-[-.1em] text-white"
          >
            Invest for life’s
            <br />
            <span className="text-[#ffa16c]">important goals.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-md text-pretty text-base leading-7 text-[#868f97]">
            Simple mutual fund solutions, practical planning and personal guidance for every stage of life.
          </p>
        </motion.div>
        <motion.div
          style={{ opacity: dashboardOpacity, y: dashboardY }}
          className="dashboard-reveal absolute bottom-[8%] left-1/2 z-10 w-[min(92vw,860px)] -translate-x-1/2"
        >
          <CommandSurface />
        </motion.div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] tracking-[.18em] text-[#868f97]">
          <ArrowDownRight className="mx-auto mb-2 size-4 text-[#4ebe96]" />
          SCROLL TO UNFOLD
        </div>
      </div>
    </section>
  );
}

function CommandSurface() {
  return (
    <Card className="overflow-hidden bg-[#131313]/95 p-0 backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <div className="flex items-center gap-2 text-xs text-[#cccccc]">
          <span className="size-2 rounded-full bg-[#4ebe96] shadow-[0_0_12px_#4ebe96]" />
          YOUR INVESTMENT SNAPSHOT
        </div>
        <span className="text-[10px] tracking-[.14em] text-[#868f97]">
          SIMPLE · GOAL-BASED · PERSONAL
        </span>
      </div>
      <div className="grid gap-4 p-5 md:grid-cols-[1.35fr_.65fr]">
        <div>
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[.15em] text-[#868f97]">
                ESTIMATED PORTFOLIO VALUE
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-[-.08em]">
                ₹ 24.68L
              </p>
            </div>
            <p className="text-sm text-[#4ebe96]">
              +18.6% <span className="text-[#868f97]">illustrative</span>
            </p>
          </div>
          <svg
            viewBox="0 0 540 150"
            className="h-32 w-full"
            role="img"
            aria-label="Illustrative portfolio chart"
          >
            <path
              d="M0 28H540M0 75H540M0 122H540"
              stroke="rgba(255,255,255,.08)"
            />
            <path
              className="chart-line"
              d="M0 130 C30 118 52 123 79 104 S122 109 153 84 S205 91 237 64 S292 80 327 49 S372 58 406 28 S465 46 540 7"
              fill="none"
              stroke="#4ebe96"
              strokeWidth="3"
            />
            <path
              d="M0 130 C30 118 52 123 79 104 S122 109 153 84 S205 91 237 64 S292 80 327 49 S372 58 406 28 S465 46 540 7 V150 H0Z"
              fill="url(#fill)"
              opacity=".45"
            />
            <defs>
              <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#4ebe96" stopOpacity=".35" />
                <stop offset="1" stopColor="#4ebe96" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Metric label="RISK LEVEL" value="Moderate" detail="Example profile" />
          <Metric
            label="PLAN STATUS"
            value="On track"
            detail="Example only"
            positive
          />
          <div className="col-span-2 rounded-xl border border-white/10 bg-white/[.03] p-3">
            <div className="flex justify-between text-[10px] tracking-[.13em] text-[#868f97]">
              <span>ALLOCATION</span>
              <span>ILLUSTRATIVE DATA</span>
            </div>
            <div className="mt-3 flex h-1.5 overflow-hidden rounded-full">
              <i className="w-[54%] bg-[#479ffa]" />
              <i className="w-[31%] bg-[#4ebe96]" />
              <i className="w-[15%] bg-[#ffa16c]" />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-[#cccccc]">
              <span>Equity 54%</span>
              <span>Income 31%</span>
              <span>Alternatives 15%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function InvestmentLab() {
  const [amount, setAmount] = useState(25000);
  const [risk, setRisk] = useState(62);
  const corpus = Math.round(amount * ((Math.pow(1.01, 120) - 1) / 0.01) * 1.01);
  const crore = (corpus / 100000).toFixed(1);
  return (
    <section id="command" className="px-6 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-[10px] tracking-[.18em] text-[#479ffa]">
            02 / CAPITAL COMMAND CENTER
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
            Turn intent
            <br />
            into <span className="text-[#4ebe96]">signals.</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-[#868f97]">
            Explore a client-side illustration of how capital, horizon and risk
            preference can change the picture.
          </p>
          <div className="mt-8 flex gap-2 text-xs text-[#868f97]">
            <ShieldCheck size={16} className="text-[#4ebe96]" />
            Calculations are illustrative—not investment advice.
          </div>
        </div>
        <Card className="p-5 md:p-7">
          <Tabs defaultValue="sip">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <TabsList>
                <TabsTrigger value="sip">SIP</TabsTrigger>
                <TabsTrigger value="fd">Fixed deposit</TabsTrigger>
                <TabsTrigger value="lumpsum">Lumpsum</TabsTrigger>
              </TabsList>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    className="text-[#868f97]"
                    aria-label="Illustrative data information"
                  >
                    <CircleHelp size={17} />
                  </TooltipTrigger>
                  <TooltipContent>
                    All figures are a client-side illustration based on assumed
                    rates.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <TabsContent value="sip">
              <Calculator
                title="Monthly contribution"
                amount={amount}
                setAmount={setAmount}
                result={`₹${crore}L`}
                risk={risk}
                setRisk={setRisk}
              />
            </TabsContent>
            <TabsContent value="fd">
              <Calculator
                title="Deposit amount"
                amount={amount}
                setAmount={setAmount}
                result={`₹${((amount * 1.72) / 100000).toFixed(1)}L`}
                risk={risk}
                setRisk={setRisk}
              />
            </TabsContent>
            <TabsContent value="lumpsum">
              <Calculator
                title="Initial capital"
                amount={amount}
                setAmount={setAmount}
                result={`₹${((amount * 3.11) / 100000).toFixed(1)}L`}
                risk={risk}
                setRisk={setRisk}
              />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}

function Calculator({
  title,
  amount,
  setAmount,
  result,
  risk,
  setRisk,
}: {
  title: string;
  amount: number;
  setAmount: (n: number) => void;
  result: string;
  risk: number;
  setRisk: (n: number) => void;
}) {
  return (
    <div className="mt-8 grid gap-9 md:grid-cols-[1fr_.8fr]">
      <div className="space-y-7">
        <div>
          <div className="mb-3 flex justify-between text-sm">
            <span className="text-[#cccccc]">{title}</span>
            <span className="font-mono text-[#d6fe51]">
              ₹{amount.toLocaleString("en-IN")}
            </span>
          </div>
          <Slider
            value={[amount]}
            onValueChange={([value]) => setAmount(value)}
            min={5000}
            max={100000}
            step={5000}
            aria-label={title}
          />
        </div>
        <div>
          <div className="mb-3 flex justify-between text-sm">
            <span className="text-[#cccccc]">Risk preference</span>
            <span className="font-mono text-[#479ffa]">{risk}/100</span>
          </div>
          <Slider
            value={[risk]}
            onValueChange={([value]) => setRisk(value)}
            aria-label="Risk preference"
          />
        </div>
      </div>
      <div className="rounded-2xl bg-white/[.035] p-5">
        <p className="text-[10px] tracking-[.16em] text-[#868f97]">
          ESTIMATED 10-YEAR VALUE
        </p>
        <p className="mt-3 text-5xl font-semibold tracking-[-.09em] text-white">
          {result}
        </p>
        <p className="mt-4 text-xs leading-5 text-[#868f97]">
          Assumes an illustrative 12% annual return. Results vary; markets
          involve risk.
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm text-[#4ebe96]">
          <Sparkles size={16} /> Scenario alignment: moderate
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-clip">
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          aria-label="SYDY Capital home"
          className="flex items-center"
        >
          <BrandMark className="w-[92px] md:w-[112px]" />
        </Link>
        <nav className="hidden items-center gap-6 text-xs text-[#868f97] md:flex">
          <a href="#goals" className="hover:text-white">
            Goals
          </a>
          <a href="#calculators" className="hover:text-white">
            Calculators
          </a>
          <a href="#learn" className="hover:text-white">
            Learn
          </a>
          <Link href="/algo" className="hover:text-white">
            Algo
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blogs
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/algo" className="inline-flex h-9 items-center justify-center rounded-full border border-white/20 px-4 text-xs font-semibold text-white transition hover:border-[#4ebe96]/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#479ffa] md:hidden">Algo</Link>
          <a href="#contact" className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-4 text-xs font-semibold text-white transition hover:border-white/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#479ffa]">
            Contact <ArrowUpRight size={14} />
          </a>
        </div>
      </header>
      <CapitalHero />
      <TrustBar />
      <AmcMarquee />
      <section
        id="solutions"
        className="section-rule bg-[#0b0b0b] px-6 py-24 md:py-36"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] tracking-[.18em] text-[#479ffa]">
                INVESTMENT OPTIONS
              </p>
              <h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
                Simple ways to invest
                <br />
                for every goal.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#868f97]">
              Understand the main choices without complicated language.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {products.map((product, index) => (
              <Link
                href={product.href}
                key={product.title}
                className="group flex min-h-[390px] flex-col bg-[#0b0b0b] p-6 transition hover:bg-[#191919] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#479ffa]"
              >
                <div className="flex items-center justify-between text-[10px] tracking-[.15em] text-[#868f97]">
                  <span>{product.number}</span>
                  <span
                    className={
                      index === 3 ? "text-[#4ebe96]" : "text-[#479ffa]"
                    }
                  >
                    EXPLORE
                  </span>
                </div>
                <div className="mt-14">
                  <Layers3 className="mb-5 size-6 text-[#cccccc] group-hover:text-[#4ebe96]" />
                  <h3 className="text-xl font-semibold tracking-[-.06em]">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#868f97]">
                    {product.copy}
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[9px] tracking-[.14em] text-[#868f97]">
                    USEFUL FOR
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#cccccc]">
                    {product.role}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.instruments.map((instrument) => (
                      <span
                        key={instrument}
                        className="rounded-full border border-white/10 bg-white/[.03] px-2.5 py-1 text-[10px] text-[#868f97]"
                      >
                        {instrument}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-6 text-xs text-[#cccccc]">
                  <span>{product.action}</span>
                  <ChevronRight className="size-5 text-[#868f97] transition group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <InvestorEssentials />
      <ContentExpansion />
      <section className="hidden section-rule bg-[#131313] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[10px] tracking-[.18em] text-[#479ffa]">
              08 / RESEARCH SIGNALS
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
              Read past the
              <br />
              <span className="text-[#ffa16c]">headline.</span>
            </h2>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm text-[#cccccc] hover:text-white"
            >
              View all insights <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="grid gap-3">
            {[
              [
                "Factor research",
                "How to Use Factor Analysis to Beat the S&P 500",
                "factor-analysis-to-beat-the-sp500",
                BarChart3,
              ],
              [
                "Data intelligence",
                "The Rise of Alternative Data in 2025",
                "rise-of-alternative-data-2025",
                Orbit,
              ],
              [
                "Portfolio design",
                "Risk Management Strategies for Volatile Markets",
                "risk-management-strategies-for-volatile-markets",
                CandlestickChart,
              ],
            ].map(([category, title, slug, Icon]) => (
              <Link
                href={`/blog/${slug}`}
                key={String(slug)}
                className="group flex gap-5 rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-[#479ffa]/50"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 text-[#b6d6ff]">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[.16em] text-[#868f97]">
                    {category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-[-.05em] group-hover:text-[#b6d6ff]">
                    {title}
                  </h3>
                </div>
                <ArrowUpRight className="ml-auto mt-1 size-5 text-[#868f97] group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
      <ContactSection />
      <section className="relative overflow-hidden px-6 py-28 text-center md:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(71,159,250,.2),transparent_42%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-[10px] tracking-[.18em] text-[#4ebe96]">
            THE NEXT MOVE IS YOURS
          </p>
          <h2 className="mt-5 text-6xl font-semibold leading-[.86] tracking-[-.1em] md:text-8xl">
            Start investing
            <br />
            for your <span className="text-[#d6fe51]">goals.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-base leading-7 text-[#868f97]">
            Begin with a clear goal, an affordable amount and a plan you can understand.
          </p>
          <a href="#contact" className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white px-5 text-sm font-semibold text-[#0b0b0b] transition hover:bg-[#e6e6e6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#479ffa]">
            Start planning <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "CapitalVerve Analytics",
                alternateName: "SYDY CAPITAL",
                url: "https://sydycapital.com",
              },
              {
                "@type": "FinancialProduct",
                name: "Algorithmic Strategies",
                provider: {
                  "@type": "Organization",
                  name: "CapitalVerve Analytics",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
