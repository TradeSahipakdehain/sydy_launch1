import { Mail, MessageCircle, Phone } from "lucide-react";

const trustMarks = [
  { mark: "SEBI", icon: "/brand-icons/sebi.png", detail: "Indian securities regulator" },
  { mark: "NSE", icon: "/brand-icons/nse.png", detail: "Market infrastructure" },
  { mark: "BSE", icon: "/brand-icons/bse.svg", detail: "Market infrastructure" },
  { mark: "AMFI", icon: "/brand-icons/amfi.png", detail: "Registered Mutual Fund Distributor", reference: "ARN-352412" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust and registration information" className="section-rule bg-[#101010] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] tracking-[.18em] text-[#4ebe96]">TRUSTED BY INVESTORS ACROSS INDIA</p>
            <p className="mt-2 text-sm text-[#cccccc]">Clear access, disciplined advice and transparent investor communication.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#cccccc]">
            <a href="tel:+919066868949" className="inline-flex items-center gap-2 transition hover:text-white"><Phone size={14} className="text-[#4ebe96]" /> +91 90668 68949</a>
            <a href="mailto:ashish05beit@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white"><Mail size={14} className="text-[#479ffa]" /> ashish05beit@gmail.com</a>
            <a href="https://wa.me/919066868949" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><MessageCircle size={14} className="text-[#4ebe96]" /> WhatsApp</a>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustMarks.map((item) => (
            <div key={item.mark} className="flex min-h-24 items-center gap-4 bg-[#0b0b0b] px-5 py-4">
              <span className="grid h-14 min-w-20 place-items-center rounded-lg border border-white/15 bg-white p-2">
                <img src={item.icon} alt={`${item.mark} logo`} width="64" height="40" loading="lazy" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="text-xs leading-5 text-[#868f97]">{item.detail}</p>
                {item.reference && <p className="mt-1 font-mono text-xs font-semibold text-[#d6fe51]">{item.reference}</p>}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] leading-4 text-[#69727a]">Regulatory and association details are supplied by SYDY Capital. Verify current registration status and scope before relying on this information.</p>
      </div>
    </section>
  );
}
