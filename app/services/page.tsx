import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "UAE company incorporation, manufacturing setup, sourcing, finance, logistics, and end-to-end market entry with Gallant Advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-8 pt-12 md:px-10 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Services</Badge>
          <h1 className="display mt-6 text-[42px] md:text-[72px]">Your guide for the road ahead</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-muted">
            End-to-end support for entering the UAE: incorporate, structure, source,
            manufacture, finance, and operate — with one team coordinating the work.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-[28px] border border-line"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="50vw"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl">{service.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">{service.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
