import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: Array<[string, string]> }) {
  return (
    <main className="min-h-screen bg-[#0b0b0b] px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#868f97] hover:text-white"><ArrowLeft size={15} />Back to SYDY Capital</Link>
        <p className="mt-20 text-[10px] tracking-[.18em] text-[#479ffa]">SYDY CAPITAL / LEGAL</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-.08em] md:text-7xl">{title}</h1>
        <p className="mt-7 text-lg leading-8 text-[#cccccc]">{intro}</p>
        <p className="mt-4 rounded-xl border border-[#ffa16c]/20 bg-[#ffa16c]/10 p-4 text-xs leading-5 text-[#d9a889]">Draft website copy for product review. Obtain legal and regulatory approval before publication.</p>
        <div className="mt-12 grid gap-9 border-t border-white/10 pt-10">
          {sections.map(([heading, copy]) => (
            <section key={heading}>
              <h2 className="text-xl font-semibold tracking-[-.04em]">{heading}</h2>
              <p className="mt-3 text-sm leading-7 text-[#868f97]">{copy}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
