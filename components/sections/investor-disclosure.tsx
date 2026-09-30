import Link from "next/link";
import { ArrowUpRight, ClipboardCheck, ReceiptIndianRupee, ShieldAlert } from "lucide-react";

const disclosurePoints = [
  {
    icon: ShieldAlert,
    title: "Market-linked outcomes",
    copy: "Mutual funds are exposed to market and other scheme-specific risks. Returns are neither assured nor guaranteed, past performance may not continue, and a scheme may not achieve its stated objective.",
  },
  {
    icon: ReceiptIndianRupee,
    title: "Regular Plan distribution",
    copy: "SYDY Capital facilitates Regular Plans and earns trail commission on eligible client investments. Direct Plans are available from mutual funds with lower expense ratios because distributor commission is not included; SYDY Capital does not transact in Direct Plans.",
  },
  {
    icon: ClipboardCheck,
    title: "Suitability comes first",
    copy: "Risk profiling is required before investing. Any guided view is indicative, depends on information supplied by the investor and should be independently evaluated with appropriate financial, legal and tax advice.",
  },
];

export function InvestorDisclosure() {
  return (
    <section aria-labelledby="investor-disclosure-title" className="section-rule bg-[#131313] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 md:p-10">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] tracking-[.18em] text-[#ffa16c]">IMPORTANT INVESTOR INFORMATION</p>
            <h2 id="investor-disclosure-title" className="mt-4 max-w-3xl text-4xl font-semibold leading-[.95] tracking-[-.07em] md:text-6xl">
              Understand the risk, cost and distribution model.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#868f97]">Read the applicable scheme documents, current exit load and Total Expense Ratio before making an investment decision.</p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {disclosurePoints.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="bg-[#101010] p-6">
              <Icon className="size-5 text-[#479ffa]" aria-hidden="true" />
              <h3 className="mt-7 text-xl font-semibold tracking-[-.05em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#868f97]">{copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col justify-between gap-4 text-xs leading-5 text-[#868f97] md:flex-row md:items-center">
          <p>Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.</p>
          <Link href="/disclosures" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#b6d6ff] transition hover:text-white">
            Read full disclosures <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
