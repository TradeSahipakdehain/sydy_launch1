import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Compass,
  Eye,
  Fingerprint,
  Landmark,
  Quote,
  RefreshCw,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Telescope,
  TrendingUp,
  Users,
} from "lucide-react";

const leadingAmcs = [
  { name: "Motilal Oswal Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 0 },
  { name: "Mirae Asset Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 33.333 },
  { name: "SBI Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 66.667 },
  { name: "Aditya Birla Sun Life Mutual Fund", sheet: "/amc-artwork/amc-row-primary.png", position: 100 },
  { name: "Axis Mutual Fund", sheet: "/amc-artwork/amc-row-axis.png", position: 100 },
  { name: "Bandhan Mutual Fund", sheet: "/amc-artwork/amc-row-alternates.png", position: 0 },
  { name: "DSP Mutual Fund", sheet: "/amc-artwork/amc-row-alternates.png", position: 33.333 },
  { name: "Franklin Templeton Investments", sheet: "/amc-artwork/amc-row-alternates.png", position: 66.667 },
  { name: "Edelweiss Mutual Fund", sheet: "/amc-artwork/amc-row-alternates.png", position: 100 },
];

const pillars = [
  {
    icon: Compass,
    title: "Wealth planning",
    copy: "Turn cash flows, goals, time horizons, liquidity needs and family priorities into one structured wealth roadmap.",
  },
  {
    icon: Landmark,
    title: "Investment solutions",
    copy: "Build the right architecture across mutual funds, equities, fixed income, PMS, AIF and appropriate alternatives.",
  },
  {
    icon: Scale,
    title: "Portfolio management",
    copy: "Understand how every holding works together across asset classes, risk levels, liquidity and time.",
  },
  {
    icon: Telescope,
    title: "Research & intelligence",
    copy: "Use equity, sector, macro and quantitative research to separate durable signals from market noise.",
  },
  {
    icon: ShieldCheck,
    title: "Legacy & preservation",
    copy: "Protect accumulated capital and create a framework for succession and intergenerational wealth.",
  },
];

const lifeStages = [
  ["01", "Building wealth", "Young professionals & entrepreneurs", "Start early. Invest intelligently. Let time do the heavy lifting."],
  ["02", "Growing wealth", "Established professionals & business owners", "Transform accumulated capital into a structured wealth portfolio."],
  ["03", "Protecting wealth", "Families with significant assets", "Preserve capital while continuing to participate in long-term growth."],
  ["04", "Transferring wealth", "Families planning beyond a lifetime", "Create a framework for succession, legacy and intergenerational wealth."],
];

const investmentUniverse = [
  {
    id: "mutual-funds",
    number: "01",
    title: "Mutual funds & equity",
    role: "Growth, diversification and goal-based compounding",
    universe: ["Equity funds", "Debt funds", "Hybrid", "Multi-asset", "Index strategies", "Direct equity"],
    method: ["Goal and horizon mapping", "Scheme and exposure research", "SIP · STP · SWP design", "Portfolio overlap review"],
    risks: "Market, concentration, style, tracking and liquidity risk are assessed before allocation.",
  },
  {
    id: "fixed-income",
    number: "02",
    title: "Bonds & fixed income",
    role: "Income generation, capital stability and portfolio resilience",
    universe: ["Government securities", "SDLs", "Corporate bonds", "Fixed deposits", "Target maturity", "Short-duration debt"],
    method: ["Yield and maturity comparison", "Credit-quality review", "Duration positioning", "Liquidity laddering"],
    risks: "Interest-rate, credit, liquidity and reinvestment risk remain part of every fixed-income decision.",
  },
  {
    id: "alternatives",
    number: "03",
    title: "PMS, AIF & alternatives",
    role: "Specialist exposure and differentiated sources of return",
    universe: ["PMS", "Category I–III AIF", "SIF", "Private markets", "Structured opportunities"],
    method: ["Eligibility and suitability", "Manager due diligence", "Fee and liquidity analysis", "Portfolio-role assessment"],
    risks: "Concentration, complexity, lock-ins, manager selection and fee structures require careful evaluation.",
  },
];

const mutualFundCategories = [
  ["Equity", "Long-horizon participation in business growth for investors who can accept market volatility."],
  ["Debt", "Income and stability strategies shaped by duration, credit quality and liquidity needs."],
  ["Hybrid", "Blended equity and fixed-income exposure for a moderated risk experience."],
  ["ELSS", "Equity-linked tax-saving funds with statutory lock-in and market-linked outcomes."],
  ["Gold & silver", "Commodity-linked diversification intended to complement—not replace—a core portfolio."],
];

const mutualFundJourney = [
  ["01", "Define the goal", "Connect the investment to a purpose, required amount and time horizon."],
  ["02", "Complete KYC", "Verify identity and investment readiness through the applicable regulated process."],
  ["03", "Choose the route", "Compare SIP, lump-sum, STP or SWP based on cash flow and the objective."],
  ["04", "Invest securely", "Authorize transactions through supported banking and regulated AMC channels."],
  ["05", "Track & review", "Monitor allocation, progress and risk; rebalance when goals or conditions change."],
];

const process = [
  ["Discover", "Understand the investor, the family and the capital."],
  ["Diagnose", "Assess the existing portfolio, exposures and risks."],
  ["Design", "Create an asset allocation linked to real objectives."],
  ["Deploy", "Implement deliberately across the investment universe."],
  ["Monitor", "Track the portfolio and changing market conditions."],
  ["Evolve", "Rebalance as markets and life circumstances change."],
];

export const strategies = [
  {
    name: "NIFTY Trend Composite",
    universe: "NIFTY 100 · Long / Cash",
    cagr: "18.4%",
    drawdown: "−14.8%",
    sharpe: "1.31",
    since: "Jan 2018",
    color: "#4ebe96",
    path: "M0 92 C24 89 32 76 54 80 S88 64 111 69 S148 47 170 57 S204 42 230 44 S266 17 300 24 S336 12 380 8",
  },
  {
    name: "Bank NIFTY Mean Reversion",
    universe: "Bank NIFTY · Intraday",
    cagr: "15.7%",
    drawdown: "−11.6%",
    sharpe: "1.18",
    since: "Apr 2019",
    color: "#479ffa",
    path: "M0 94 C19 91 31 73 49 82 S76 66 96 71 S124 54 145 62 S178 42 199 51 S228 31 250 39 S284 24 307 29 S343 11 380 16",
  },
  {
    name: "India Quality Momentum",
    universe: "NIFTY 500 · Monthly",
    cagr: "21.2%",
    drawdown: "−18.9%",
    sharpe: "1.24",
    since: "Jan 2017",
    color: "#ffa16c",
    path: "M0 96 C22 88 38 91 58 75 S91 82 112 62 S143 69 164 49 S199 58 220 38 S252 45 273 27 S309 35 331 17 S358 20 380 5",
  },
];

const testimonials = [
  {
    quote: "SYDY helped us move from a collection of investments to a portfolio with a clear purpose, structure and review process.",
    person: "Entrepreneur",
    context: "Mumbai · Sample testimonial",
  },
  {
    quote: "The most valuable change was not another product. It was finally understanding why each allocation belonged in our family portfolio.",
    person: "Family investor",
    context: "Bengaluru · Sample testimonial",
  },
  {
    quote: "The reporting feels calm and precise. We can see risk, progress and the next decision without being overwhelmed by market noise.",
    person: "Senior professional",
    context: "Delhi NCR · Sample testimonial",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-medium tracking-[.18em] text-[#479ffa]">{children}</p>;
}

export function ContentExpansion() {
  return (
    <>
      <section id="wealth" className="hidden section-rule bg-[#131313] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <SectionLabel>03 / WHY SYDY EXISTS</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
                Your wealth needs<br />a <span className="text-[#ffa16c]">direction.</span>
              </h2>
            </div>
            <div className="max-w-xl border-l border-white/15 pl-6">
              <p className="text-xl leading-8 tracking-[-.03em] text-[#cccccc]">
                SYDY Capital helps individuals, families and businesses make better decisions with their money—from building investment portfolios to managing long-term wealth.
              </p>
              <p className="mt-5 text-sm leading-7 text-[#868f97]">
                We begin with where you are today: your wealth, income, investments, goals, time horizon, risk capacity, liquidity needs and legacy objectives. Then we build a roadmap for where you want to go tomorrow.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
            {pillars.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="group min-h-72 bg-[#0b0b0b] p-5 transition hover:bg-[#191919]">
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-[#4ebe96]" />
                  <span className="font-mono text-[10px] text-[#868f97]">0{index + 1}</span>
                </div>
                <h3 className="mt-16 text-xl font-semibold tracking-[-.06em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#868f97]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="investment-universe" className="hidden section-rule bg-[#0b0b0b] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>CAPITAL STACK / ALLOCATION DATA</SectionLabel>
              <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
                What sits inside<br />each <span className="text-[#4ebe96]">allocation.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#868f97]">
              Product selection follows the portfolio role. These are the universes and decision inputs SYDY evaluates—not a list of predetermined recommendations.
            </p>
          </div>

          <div className="mt-14 grid gap-4">
            {investmentUniverse.map((item) => (
              <article
                id={item.id}
                key={item.id}
                className="scroll-mt-24 rounded-2xl border border-white/10 bg-[#131313] p-6 md:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
                  <div>
                    <div className="flex items-center gap-3 text-[10px] tracking-[.15em] text-[#479ffa]">
                      <span>{item.number}</span><span className="h-px w-10 bg-[#479ffa]/40" />INVESTMENT UNIVERSE
                    </div>
                    <h3 className="mt-5 text-3xl font-semibold tracking-[-.07em]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#868f97]">{item.role}</p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-[9px] tracking-[.14em] text-[#868f97]">ACCESS UNIVERSE</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.universe.map((entry) => (
                          <span key={entry} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-[#cccccc]">{entry}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[9px] tracking-[.14em] text-[#868f97]">DECISION INPUTS</p>
                      <ul className="mt-3 grid gap-2 text-sm text-[#cccccc]">
                        {item.method.map((entry) => (
                          <li key={entry} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#4ebe96]" />{entry}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="md:col-span-2 border-t border-white/10 pt-5 text-xs leading-5 text-[#868f97]">
                      <span className="mr-2 text-[#ffa16c]">RISK FRAME</span>{item.risks}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule overflow-hidden bg-[#131313] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel>OUR MUTUAL FUND PARTNERS</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.07em] md:text-5xl">
                Access leading mutual fund companies.
              </h2>
            </div>
            <p className="max-w-md text-xs leading-5 text-[#868f97]">
              Compare suitable schemes across investment styles and goals in one place.
            </p>
          </div>
        </div>
        <div className="amc-marquee mt-10 border-y border-white/10 bg-[#0b0b0b] py-4" aria-label="Selected leading Indian mutual fund asset management companies">
          <div className="amc-marquee-track flex w-max">
            {[0, 1].map((set) => (
              <div key={set} className="flex shrink-0 gap-3 pr-3" aria-hidden={set === 1}>
                {leadingAmcs.map((amc) => (
                  <div key={`${set}-${amc.name}`} className="grid h-32 w-[330px] shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.025] px-4 transition hover:border-[#4ebe96]/40 hover:bg-[#4ebe96]/[.04]">
                    <span
                      role="img"
                      aria-label={`${amc.name} logo`}
                      className="h-24 w-[290px] shrink-0 rounded-xl border border-[#d0d0d0] bg-white bg-no-repeat"
                      style={{
                        backgroundImage: `url(${amc.sheet})`,
                        backgroundPosition: `${amc.position}% center`,
                        backgroundSize: "400% 100%",
                      }}
                    >
                      <span className="sr-only">{amc.name}</span>
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-4 max-w-6xl px-6">
          <p className="text-[10px] leading-4 text-[#69727a]">AMC names are shown for platform-access context. Availability and distributor relationships are subject to verification; names and marks belong to their respective owners and do not imply endorsement.</p>
        </div>
      </section>

      <section id="mutual-fund-journey" className="section-rule bg-[#0b0b0b] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <div>
              <SectionLabel>HOW MUTUAL FUND INVESTING WORKS</SectionLabel>
              <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
                Easy to begin.<br /><span className="text-[#4ebe96]">Simple to manage.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-[#868f97]">
                We first understand your goal, time period and comfort with risk. Then we help you choose an appropriate mutual fund category.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {mutualFundCategories.map(([title, copy], index) => (
                <article key={title} className={`rounded-2xl border border-white/10 bg-[#131313] p-5 ${index === 4 ? "sm:col-span-2" : ""}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-[-.05em]">{title}</h3>
                    <span className="font-mono text-[10px] text-[#479ffa]">0{index + 1}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#868f97]">{copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-[#131313] p-6 md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] tracking-[.15em] text-[#4ebe96]">GETTING STARTED</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-.07em]">Five simple steps.</h3>
              </div>
              <p className="max-w-sm text-xs leading-5 text-[#868f97]">Transactions remain investor-authorized. Market-linked returns are not guaranteed.</p>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-5">
              {mutualFundJourney.map(([number, title, copy]) => (
                <article key={title} className="bg-[#0b0b0b] p-5">
                  <span className="font-mono text-[10px] text-[#479ffa]">{number}</span>
                  <h4 className="mt-8 text-lg font-semibold tracking-[-.05em]">{title}</h4>
                  <p className="mt-3 text-xs leading-5 text-[#868f97]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden section-rule bg-[#0b0b0b] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <SectionLabel>04 / WEALTH ACROSS A LIFETIME</SectionLabel>
            <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
              Built for where you are.<br />Ready for what comes next.
            </h2>
          </div>
          <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
            {lifeStages.map(([number, title, audience, copy]) => (
              <article key={title} className="group grid gap-4 py-7 md:grid-cols-[70px_1fr_1fr_1.35fr] md:items-center">
                <span className="font-mono text-xs text-[#479ffa]">{number}</span>
                <h3 className="text-2xl font-semibold tracking-[-.06em] group-hover:text-[#d6fe51]">{title}</h3>
                <p className="text-xs uppercase tracking-[.12em] text-[#868f97]">{audience}</p>
                <p className="text-sm leading-6 text-[#cccccc]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="hidden section-rule bg-[#131313] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel>05 / THE SYDY APPROACH</SectionLabel>
              <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
                Beyond buy,<br />hold &amp; <span className="text-[#868f97]">hope.</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-[#868f97]">
                A portfolio is more than a collection of investments. It should be aligned with your life—not simply with the market.
              </p>
            </div>
            <div className="grid gap-3">
              {process.map(([title, copy], index) => (
                <article key={title} className="grid min-h-36 gap-5 rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#479ffa]/50 md:grid-cols-[72px_1fr_auto] md:items-center">
                  <span className="font-mono text-sm text-[#479ffa]">0{index + 1}</span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-.06em]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#868f97]">{copy}</p>
                  </div>
                  {index < process.length - 1 ? <ArrowDown className="size-5 text-[#4ebe96]" /> : <RefreshCw className="size-5 text-[#d6fe51]" />}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strategies" className="section-rule overflow-hidden bg-[#0b0b0b] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <SectionLabel>OPTIONAL ALGO STRATEGIES · INDIA</SectionLabel>
              <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
                A rules-based way<br /><span className="text-[#4ebe96]">to invest.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#868f97]">
              For suitable investors, algorithmic strategies can follow predefined rules and risk limits. These examples are not live performance or recommendations.
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-[#131313] p-3 md:p-5">
            <div className="flex flex-col gap-3 border-b border-white/10 px-2 pb-5 text-xs text-[#868f97] md:flex-row md:items-center md:justify-between">
              <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#4ebe96] shadow-[0_0_12px_#4ebe96]" />INDIAN MARKET STRATEGY MONITOR</span>
              <span className="rounded-full border border-[#ffa16c]/30 bg-[#ffa16c]/10 px-3 py-1 text-[10px] tracking-[.12em] text-[#ffa16c]">ILLUSTRATIVE BACKTESTS · NOT LIVE RETURNS</span>
            </div>
            <div className="grid gap-3 pt-5 lg:grid-cols-3">
              {strategies.map((strategy, index) => (
                <article key={strategy.name} className="rounded-xl border border-white/10 bg-[#0b0b0b] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] tracking-[.14em] text-[#868f97]">MODEL 0{index + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-[-.05em]">{strategy.name}</h3>
                      <p className="mt-1 text-xs text-[#868f97]">{strategy.universe}</p>
                    </div>
                    <TrendingUp className="size-5" style={{ color: strategy.color }} />
                  </div>
                  <svg viewBox="0 0 380 110" className="mt-8 h-28 w-full" role="img" aria-label={`${strategy.name} illustrative equity curve`}>
                    <path d="M0 25H380M0 58H380M0 95H380" stroke="rgba(255,255,255,.07)" />
                    <path d={strategy.path} fill="none" stroke={strategy.color} strokeWidth="2.5" />
                  </svg>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                    <div><p className="text-[9px] tracking-[.12em] text-[#868f97]">CAGR</p><p className="mt-1 font-mono text-sm text-[#4ebe96]">{strategy.cagr}</p></div>
                    <div><p className="text-[9px] tracking-[.12em] text-[#868f97]">MAX DD</p><p className="mt-1 font-mono text-sm text-[#ffa16c]">{strategy.drawdown}</p></div>
                    <div><p className="text-[9px] tracking-[.12em] text-[#868f97]">SHARPE</p><p className="mt-1 font-mono text-sm text-white">{strategy.sharpe}</p></div>
                  </div>
                  <p className="mt-4 text-[10px] text-[#868f97]">Illustrative period begins {strategy.since}. Costs, taxes and slippage may materially change results.</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.025] p-4 text-xs leading-5 text-[#868f97]">
            <Fingerprint className="mt-0.5 size-4 shrink-0 text-[#479ffa]" />
            <p>These figures are interface placeholders—not actual SYDY performance, recommendations, or guarantees. Replace them with verified methodology, benchmark, fee, slippage and audit disclosures before publication.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-rule bg-[#131313] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>WHAT CLIENTS VALUE</SectionLabel>
              <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
                Guidance that feels<br /><span className="text-[#d6fe51]">clear and personal.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#868f97]">Sample positioning is shown for layout review. Publish only approved, authentic client statements.</p>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-3">
            {testimonials.map(({ quote, person, context }, index) => (
              <figure key={person} className="flex min-h-80 flex-col rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                <div className="flex items-center justify-between">
                  <Quote className="size-6 text-[#479ffa]" />
                  <span className="font-mono text-[10px] text-[#868f97]">0{index + 1}</span>
                </div>
                <blockquote className="mt-12 text-xl leading-8 tracking-[-.035em] text-[#cccccc]">“{quote}”</blockquote>
                <figcaption className="mt-auto border-t border-white/10 pt-5">
                  <p className="text-sm font-semibold text-white">{person}</p>
                  <p className="mt-1 text-xs text-[#868f97]">{context}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden section-rule bg-[#0b0b0b] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            [Eye, "Clarity before products", "Every recommendation should begin with an objective, not an inventory."],
            [Target, "Discipline over noise", "Decisions follow a defined philosophy, portfolio role and review process."],
            [Users, "Personal by design", "Capital is managed in the context of a person, family or business—not in isolation."],
          ].map(([Icon, title, copy]) => {
            const PrincipleIcon = Icon as typeof Search;
            return (
              <article key={String(title)} className="bg-[#131313] p-7">
                <PrincipleIcon className="size-5 text-[#4ebe96]" />
                <h3 className="mt-10 text-2xl font-semibold tracking-[-.06em]">{String(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-[#868f97]">{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
