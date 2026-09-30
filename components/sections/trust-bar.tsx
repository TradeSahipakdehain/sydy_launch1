import { Mail, MessageCircle, Phone } from "lucide-react";

const trustMarks = [
  { mark: "SEBI", icon: "/brand-icons/sebi-official.png", imageClass: "max-h-20 max-w-20" },
  { mark: "NSE", icon: "/brand-icons/nse-official.png", imageClass: "max-h-16 max-w-[210px]" },
  { mark: "BSE", icon: "/brand-icons/bse-official.png", imageClass: "max-h-20 max-w-[190px]" },
  { mark: "AMFI", icon: "/brand-icons/amfi-official.png", imageClass: "max-h-20 max-w-[180px]" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust and registration information" className="section-rule bg-[#101010] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] tracking-[.18em] text-[#4ebe96]">TRUSTED BY INVESTORS ACROSS INDIA</p>
            <p className="mt-2 text-sm text-[#cccccc]">Clear access, disciplined advice and transparent investor communication.</p>
            <p className="mt-2 font-mono text-xs text-[#d6fe51]">AMFI Registered Mutual Fund Distributor · ARN-352412</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#cccccc]">
            <a href="tel:+919066868949" className="inline-flex items-center gap-2 transition hover:text-white"><Phone size={14} className="text-[#4ebe96]" /> +91 90668 68949</a>
            <a href="mailto:ashish05beit@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white"><Mail size={14} className="text-[#479ffa]" /> ashish05beit@gmail.com</a>
            <a href="https://wa.me/919066868949" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><MessageCircle size={14} className="text-[#4ebe96]" /> WhatsApp</a>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustMarks.map((item) => (
            <div key={item.mark} className="grid min-h-32 place-items-center bg-[#0b0b0b] p-4">
              <span className="flex h-24 w-full items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-white p-3">
                <img src={item.icon} alt={`${item.mark} logo`} loading="lazy" className={`h-auto w-auto object-contain ${item.imageClass}`} />
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] leading-4 text-[#69727a]">Regulatory and association details are supplied by SYDY Capital. Verify current registration status and scope before relying on this information.</p>
      </div>
    </section>
  );
}
