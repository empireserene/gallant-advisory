import Image from "next/image";
import { Badge, Button } from "@/components/Button";

const mosaic = [
  "/images/leaf.jpg",
  "/images/woman-green.jpg",
  "/images/hero-dubai.jpg",
  "/images/stump.jpg",
  "/images/hero-port.jpg",
  "/images/man-plaid.jpg",
  "/images/hero-factory.jpg",
  "/images/hero-marina.jpg",
];

export function CTA() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge>Next step</Badge>
          <h2 className="display mt-6 max-w-xl text-4xl md:text-6xl">
            “Enter Dubai with a structure, a plan, and a team that stays.”
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-7 text-muted">
            Partner with Gallant Advisory to incorporate, source, manufacture, finance,
            and operate in the UAE. From the first licence to a company that can trade,
            hire, and report — we coordinate the work end to end.
          </p>
          <div className="mt-8">
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {mosaic.map((src) => (
            <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={src} alt="" fill className="object-cover" sizes="120px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
