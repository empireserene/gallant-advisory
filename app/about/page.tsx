import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { steps, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gallant Advisory is a Dubai consulting firm helping businesses enter the UAE and build from incorporation to full operations.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-8 pt-12 md:px-10 md:pt-20">
        <div className="ml-auto max-w-3xl text-center md:text-right">
          <Badge>About us</Badge>
          <h1 className="display mt-6 text-[42px] md:text-[72px]">Our story so far</h1>
          <p className="mt-5 text-[17px] leading-8 text-muted">
            A Dubai-based advisory practice built to take businesses from first
            conversation to a company that can operate in the UAE.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 md:px-10 lg:grid-cols-2">
        <div>
          <Badge>Who we are</Badge>
          <h2 className="display mt-6 text-4xl md:text-6xl">About Gallant Advisory</h2>
          <div className="mt-8 space-y-5 text-[16px] leading-8 text-muted">
            <p>
              Gallant Advisory is a consulting firm for organisations that want to
              enter Dubai and the wider UAE — and actually run a business here. We are
              a one-stop destination: incorporation, corporate structures, premises,
              visas, sourcing and procurement, manufacturing setup, financial and audit
              support, and investment coordination.
            </p>
            <p>
              Clients come to us at a critical decision point. They need a mainland or
              free-zone licence, a factory pathway, a regional trading hub, or a holding
              structure that banks will accept. We partner through that decision and
              through execution — not only with advice, but with coordination across
              authorities, landlords, suppliers, and professional counterparts.
            </p>
            <p>
              Our approach is analytical, collaborative, and practical. We help you
              understand why a structure fits, how the filings work, and what must
              happen next so the company can buy, sell, hire, and report.
            </p>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[32px]">
          <Image src="/images/hero-burj.jpg" alt="Dubai skyline" fill className="object-cover" />
        </div>
      </section>

      <section className="bg-[#f7f8f8] py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Badge>Mission & values</Badge>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">We&apos;re on a mission…</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-8 text-muted">
            To give international businesses a clear, execution-ready path into the UAE
            — insight, structure, and operating support that turn a licence into
            long-term value.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <article key={item.title} className="rounded-[28px] bg-white p-7">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <h2 className="display max-w-3xl text-4xl md:text-6xl">How we work</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="border-t border-line pt-6">
              <p className="text-sm text-muted">{step.n}</p>
              <h3 className="mt-3 text-2xl">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
