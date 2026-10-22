import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge, Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-8 pt-12 md:px-10 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Services</Badge>
          <h1 className="display mt-6 text-[42px] md:text-[64px]">{service.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-muted">{service.summary}</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
        <div className="relative mt-12 h-[380px] overflow-hidden rounded-[32px] md:h-[480px]">
          <Image src={service.image} alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <p className="text-[17px] leading-8 text-muted">{service.intro}</p>
          <ul className="space-y-4 text-[16px] leading-7">
            {service.points.map((point) => (
              <li key={point} className="border-t border-line pt-4">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </>
  );
}
