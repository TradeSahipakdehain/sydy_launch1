import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["Wealth philosophy", "#wealth"],
      ["SYDY approach", "#approach"],
      ["Systematic strategies", "#strategies"],
      ["Market insights", "/blog"],
    ],
  },
  {
    title: "Investments",
    links: [
      ["Mutual funds & equity", "#mutual-funds"],
      ["Bonds & fixed income", "#fixed-income"],
      ["PMS, AIF & alternatives", "#alternatives"],
      ["Investment calculators", "#command"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Begin a conversation", "#contact"],
      ["Testimonials", "#testimonials"],
      ["Disclosures", "/disclosures"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] px-6 pb-8 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold tracking-[.12em]">
              <span className="grid size-9 place-items-center rounded-full border border-[#4ebe96] font-serif text-lg text-[#4ebe96]">S</span>
              SYDY <span className="font-normal text-[#868f97]">CAPITAL</span>
            </Link>
            <p className="mt-6 max-w-sm text-2xl leading-8 tracking-[-.045em] text-[#cccccc]">Prosperity through Vision.</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#868f97]">Investment thinking, research and disciplined portfolio management for individuals, families and businesses.</p>
            <div className="mt-5 grid gap-2 text-sm">
              <a href="tel:+919066868949" className="text-[#cccccc] transition hover:text-white">+91 90668 68949</a>
              <a href="mailto:ashish05beit@gmail.com" className="text-[#cccccc] transition hover:text-white">ashish05beit@gmail.com</a>
              <p className="font-mono text-xs text-[#d6fe51]">AMFI ARN-352412</p>
            </div>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm text-[#4ebe96] hover:text-[#d6fe51]">Start a conversation <ArrowUpRight size={15} /></a>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-[10px] tracking-[.16em] text-[#868f97]">{group.title.toUpperCase()}</p>
                <nav className="mt-5 grid gap-3 text-sm">
                  {group.links.map(([label, href]) => (
                    <Link key={label} href={href} className="text-[#cccccc] transition hover:text-white">{label}</Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-5 border-t border-white/10 pt-7 text-[11px] leading-5 text-[#868f97] md:grid-cols-[.6fr_1.4fr]">
          <p>© 2026 SYDY CAPITAL. All rights reserved.</p>
          <p>Illustrative product experience only. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully. Performance figures, calculators and model outputs are not recommendations, offers or guarantees.</p>
        </div>
      </div>
    </footer>
  );
}
