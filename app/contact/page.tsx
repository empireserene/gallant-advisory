import type { Metadata } from "next";
import { Badge } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Gallant Advisory in Al Muraqabbat, Dubai. ${site.phones.map((p) => p.display).join(", ")}. ${site.address}`,
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-8 pt-12 md:px-10 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Contact us</Badge>
          <h1 className="display mt-6 text-[42px] md:text-[72px]">We&apos;d love to hear from you</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-muted">
            Call us or visit the office in Al Muraqabbat. We are ready to discuss
            UAE market entry and how we can support your setup.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
        <div className="mx-auto max-w-xl rounded-[28px] bg-[#f7f8f8] p-8 text-center">
          <h2 className="text-2xl">Visit or call</h2>
          <p className="mt-5 text-[16px] leading-8 text-muted">{site.address}</p>
          <p className="mt-6 space-y-2">
            {site.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="block text-xl hover:underline">
                {phone.display}
              </a>
            ))}
          </p>
          <p className="mt-8 text-sm leading-6 text-muted">
            Gallant Advisory Services LLC
            <br />
            Unit 10, 3001 Rigga Business Center
            <br />
            Al Muraqabbat
            <br />
            Dubai
          </p>
          <a
            className="mt-8 inline-block text-sm underline"
            href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
      <FAQ />
    </>
  );
}
