import type { Metadata } from "next";
import { Badge } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 md:px-10">
      <Badge>Information</Badge>
      <h1 className="display mt-6 text-5xl">Privacy policy</h1>
      <div className="mt-10 space-y-6 text-[16px] leading-8 text-muted">
        <p>
          Gallant Advisory Services LLC (“we”) respects the privacy of visitors and
          clients. This policy explains how we handle information submitted through
          this website.
        </p>
        <h2 className="text-2xl text-black">Information we collect</h2>
        <p>
          If you contact us, we collect the details you provide — typically name,
          email, company, and the content of your message — so we can respond and,
          where agreed, deliver advisory services.
        </p>
        <h2 className="text-2xl text-black">How we use it</h2>
        <p>
          We use contact information to answer enquiries, schedule consultations, and
          administer client work. We do not sell personal data. We may share
          information with professional counterparts only as needed to deliver a
          mandated service, or where required by UAE law.
        </p>
        <h2 className="text-2xl text-black">Contact</h2>
        <p>
          Questions about this policy can be sent to us at {site.address}, or by
          telephone on {site.phones.map((p) => p.display).join(" or ")}.
        </p>
      </div>
    </article>
  );
}
