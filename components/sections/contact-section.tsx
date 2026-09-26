"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock3, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const enquiryAddress = "ashish05beit@gmail.com";

type EnquiryStatus = "idle" | "sending" | "sent" | "activation" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [emailDraft, setEmailDraft] = useState(`mailto:${enquiryAddress}`);
  const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919066868949").replace(/\D/g, "");
  const whatsappHref = useMemo(() => {
    if (!whatsappNumber) return null;
    const message = encodeURIComponent("Hello SYDY Capital, I would like to begin a conversation about my investment portfolio.");
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }, [whatsappNumber]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `SYDY Capital enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`;
    setEmailDraft(`mailto:${enquiryAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${enquiryAddress}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, phone, message, _subject: subject, _honey: String(data.get("website") || "") }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true && result.success !== "true") {
        if (typeof result.message === "string" && /activation/i.test(result.message)) {
          setStatus("activation");
          return;
        }
        throw new Error("Email service rejected the enquiry");
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-rule relative overflow-hidden bg-[#0b0b0b] px-6 py-24 md:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(71,159,250,.16),transparent_38%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="text-[10px] font-medium tracking-[.18em] text-[#4ebe96]">BEGIN A CONVERSATION</p>
          <h2 className="mt-5 text-5xl font-semibold leading-[.9] tracking-[-.09em] md:text-7xl">
            Let’s talk about<br />your <span className="text-[#d6fe51]">wealth.</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-[#868f97]">
            Whether you are starting your first SIP or planning for retirement, education or another goal, begin with a simple conversation.
          </p>
          <div className="mt-10 grid gap-3">
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.025] p-4">
              <MessageCircle className="mt-0.5 size-5 text-[#4ebe96]" />
              <div>
                <p className="text-sm font-medium">WhatsApp conversation</p>
                <p className="mt-1 text-xs leading-5 text-[#868f97]">Message us directly on +91 90668 68949.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.025] p-4">
              <Clock3 className="mt-0.5 size-5 text-[#479ffa]" />
              <div>
                <p className="text-sm font-medium">Relationship-led support</p>
                <p className="mt-1 text-xs leading-5 text-[#868f97]">Portfolio, onboarding and service conversations should be routed to an assigned team member.</p>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:gap-5">
            <a href="tel:+919066868949" className="inline-flex items-center gap-2 text-[#cccccc] transition hover:text-white"><Phone size={15} className="text-[#4ebe96]" /> +91 90668 68949</a>
            <a href="mailto:ashish05beit@gmail.com" className="inline-flex items-center gap-2 text-[#cccccc] transition hover:text-white"><Mail size={15} className="text-[#479ffa]" /> ashish05beit@gmail.com</a>
          </div>
          {whatsappHref ? (
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#4ebe96]/50 bg-[#4ebe96]/10 px-5 text-sm font-semibold text-[#b8f1db] transition hover:bg-[#4ebe96]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#479ffa]">
              <MessageCircle size={17} /> Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
          ) : (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-[#868f97]">
              <MessageCircle size={15} /> Add NEXT_PUBLIC_WHATSAPP_NUMBER to activate WhatsApp
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-[#131313] p-6 md:p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-[10px] tracking-[.15em] text-[#479ffa]">PRIVATE ENQUIRY</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-.06em]">Start a conversation</h3>
            </div>
            <Mail className="size-5 text-[#868f97]" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="hidden" aria-hidden="true"><label htmlFor="enquiry-website">Leave this field empty</label><input id="enquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
            <label className="grid gap-2 text-xs text-[#cccccc]">Name<Input name="name" placeholder="Your name" required /></label>
            <label className="grid gap-2 text-xs text-[#cccccc]">Email<Input name="email" type="email" placeholder="name@company.com" required /></label>
            <label className="grid gap-2 text-xs text-[#cccccc] sm:col-span-2">Phone<Input name="phone" type="tel" placeholder="+91" /></label>
            <label className="grid gap-2 text-xs text-[#cccccc] sm:col-span-2">
              What would you like to discuss?
              <textarea name="message" rows={5} required placeholder="Tell us about your goals, current portfolio or questions." className="rounded-xl border border-white/15 bg-[#0b0b0b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#555f68] focus:border-[#479ffa] focus:ring-2 focus:ring-[#479ffa]/30" />
            </label>
          </div>
          <Button type="submit" disabled={status === "sending"} className="mt-5 w-full">{status === "sending" ? "Sending…" : "Send enquiry"} <ArrowUpRight size={16} /></Button>
          {status === "sent" ? (
            <div role="status" className="mt-4 flex items-start gap-2 rounded-xl border border-[#4ebe96]/20 bg-[#4ebe96]/10 p-3 text-xs leading-5 text-[#b8f1db]">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" /> Your enquiry was accepted by the email service. We will reply as soon as possible.
            </div>
          ) : status === "activation" ? (
            <div role="alert" className="mt-4 rounded-xl border border-[#ffa16c]/30 bg-[#ffa16c]/10 p-3 text-xs leading-5 text-[#f5c2a3]">
              Email delivery is being activated. <a href={emailDraft} className="font-semibold underline underline-offset-2">Open a prefilled email</a> or use WhatsApp for now.
            </div>
          ) : status === "error" ? (
            <div role="alert" className="mt-4 rounded-xl border border-[#ffa16c]/30 bg-[#ffa16c]/10 p-3 text-xs leading-5 text-[#f5c2a3]">
              The email service could not accept this enquiry. <a href={emailDraft} className="font-semibold underline underline-offset-2">Open a prefilled email instead</a>.
            </div>
          ) : (
            <p className="mt-4 text-center text-[10px] leading-4 text-[#868f97]">Your enquiry is sent through our email form provider to {enquiryAddress}. <Link href="/privacy" className="underline underline-offset-2">Privacy details</Link></p>
          )}
        </form>
      </div>
    </section>
  );
}
