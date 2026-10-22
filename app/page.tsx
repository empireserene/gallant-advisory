import Image from "next/image";
import Link from "next/link";
import { Badge, Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { services, steps } from "@/lib/site";

const heroImages = [
  "/images/hero-port.jpg",
  "/images/hero-dubai.jpg",
  "/images/hero-build.jpg",
  "/images/hero-marina.jpg",
  "/images/hero-factory.jpg",
  "/images/hero-skyline.jpg",
];

export default function Home() {
  return (
    <>
      <section id="hero" className="mx-auto max-w-[1400px] px-5 pb-8 pt-10 md:px-10 md:pt-16">
        <div className="ml-auto max-w-3xl text-center md:text-right">
          <Badge>Gallant Advisory</Badge>
          <h1 className="display mt-6 text-[42px] md:text-[72px] lg:text-[80px]">
            Your one-stop path into Dubai.
          </h1>
          <p className="mt-6 text-[17px] leading-8 text-muted md:ml-auto md:max-w-xl">
            We help businesses enter the UAE and build from scratch — company
            incorporation, the right legal structure, premises, sourcing and
            procurement, manufacturing setup, financial and audit support, and
            investment coordination. One advisory team, from first filing to a
            running operation.
          </p>
          <div className="mt-8 flex justify-center md:justify-end">
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </section>

      <div className="overflow-hidden py-6">
        <div className="marquee-track flex w-max gap-4 px-5">
          {[...heroImages, ...heroImages].map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-[280px] w-[340px] shrink-0 overflow-hidden rounded-[28px] md:h-[360px] md:w-[460px]"
            >
              <Image src={src} alt="" fill className="object-cover" sizes="460px" />
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <Badge>About</Badge>
            <h2 className="display mt-6 text-4xl md:text-6xl lg:text-[68px]">
              A practical consulting team for ambitious businesses shaping their UAE future.
            </h2>
          </div>
          <Button href="/about">Learn more</Button>
        </div>
      </section>

      <section id="services" className="pb-10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Badge>Services</Badge>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="display text-4xl md:text-6xl">Your guide for the road ahead</h2>
            <p className="max-w-xl text-[16px] leading-7 text-muted">
              We stay with you from market entry to delivery — licensing, operations,
              supply, manufacturing, and finance — so Dubai is a working base, not a
              paper company.
            </p>
          </div>
        </div>
        <div className="no-scrollbar mt-12 flex gap-5 overflow-x-auto px-5 pb-4 md:px-10">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative h-[420px] w-[300px] shrink-0 overflow-hidden rounded-[28px] md:w-[360px]"
            >
              <Image
                src={service.image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-2xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
        <p className="mb-4 text-sm text-muted">Benefits</p>
        <h2 className="display max-w-xl text-4xl md:text-6xl">Why choose us?</h2>
        <p className="mt-5 max-w-2xl text-[16px] leading-7 text-muted">
          UAE setup is a chain of decisions — jurisdiction, activity, office, visas,
          bank, tax, suppliers. We cut through that chain with structured analysis and
          hands-on execution.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article className="relative min-h-[340px] overflow-hidden rounded-[28px]">
            <Image src="/images/hero-marina.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl">Get ahead of the market</h3>
              <p className="mt-2 text-white/85">Future-ready UAE structures for your business.</p>
            </div>
          </article>

          <article className="rounded-[28px] bg-[#f3f5f6] p-8">
            <h3 className="display text-3xl md:text-4xl">Making complex decisions simpler.</h3>
            <p className="mt-5 text-[16px] leading-7 text-muted">
              Mainland or free zone, factory or flexi-desk, VAT now or later — we turn
              the rulebook into a sequence, then we run it with you.
            </p>
          </article>

          <article className="rounded-[28px] bg-black p-8 text-white md:col-span-2 xl:col-span-1">
            <h3 className="display text-4xl">Boost your team</h3>
            <p className="mt-5 text-[16px] leading-7 text-white/75">
              Think of us as your in-house UAE desk — experienced, hands-on, and
              objective. We bring the contacts, the filings, and the operating rhythm.
            </p>
            <div className="mt-8 flex -space-x-3">
              {["/images/avatar-1.png", "/images/avatar-2.png", "/images/avatar-3.png"].map(
                (src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border-2 border-black object-cover"
                  />
                ),
              )}
            </div>
          </article>

          <article className="rounded-[28px] border border-line p-8">
            <h3 className="display text-3xl">Practical, not theoretical</h3>
            <p className="mt-4 text-[16px] leading-7 text-muted">
              We do not stop at a slide deck. Incorporation, procurement, plant
              licensing, and banking files are coordinated until the company can operate.
            </p>
          </article>

          <article className="flex items-center gap-6 rounded-[28px] bg-[#f7f8f8] p-8 md:col-span-2 xl:col-span-1">
            <Image src="/images/trophy.png" alt="" width={90} height={130} className="h-28 w-auto" />
            <div>
              <h3 className="text-xl">Trusted by growing businesses</h3>
              <p className="mt-2 text-muted">End-to-end UAE market entry, not licence brokerage.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#0f1417] py-24 text-white">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className="display max-w-3xl text-4xl md:text-6xl">From scratch to a running UAE business</h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/70">
            Most firms sell a licence. We stay for the operating system around it —
            people, premises, suppliers, money, and compliance.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n}>
                <p className="text-sm text-white/45">{step.n}</p>
                <h3 className="mt-3 text-2xl">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
