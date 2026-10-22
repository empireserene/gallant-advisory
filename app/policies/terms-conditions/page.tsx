import type { Metadata } from "next";
import { Badge } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 md:px-10">
      <Badge>Information</Badge>
      <h1 className="display mt-6 text-5xl">Terms & conditions</h1>
      <div className="mt-10 space-y-6 text-[16px] leading-8 text-muted">
        <p>
          This website is operated by {site.legalName}, {site.address}. By using the
          site you agree to these terms.
        </p>
        <h2 className="text-2xl text-black">Advisory nature of content</h2>
        <p>
          Material on this website is general information about UAE market entry and
          related services. It is not legal, tax, or investment advice and does not
          create a client relationship. Engagement terms are agreed in writing before
          work begins. Authority fees, bank decisions, and licence outcomes remain
          subject to the relevant UAE authorities and institutions.
        </p>
        <h2 className="text-2xl text-black">Liability</h2>
        <p>
          We take care to keep the site accurate, but we do not warrant that content
          is complete or current. To the extent permitted by law, we are not liable
          for loss arising from use of this website alone.
        </p>
        <h2 className="text-2xl text-black">Contact</h2>
        <p>
          {site.legalName}
          <br />
          {site.address}
          <br />
          {site.phoneDisplay}
        </p>
      </div>
    </article>
  );
}
