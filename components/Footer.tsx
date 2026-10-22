import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <Image src="/logo.png" alt="" width={160} height={60} className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-[15px] leading-7 text-muted">
            One-stop destination for businesses entering the UAE — from incorporation
            to a running operation.
          </p>
          <p className="mt-6 text-[15px] leading-7 text-muted">
            {site.address}
            <br />
            <a href={site.phoneHref} className="text-black hover:underline">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm text-muted">Pages</p>
          <ul className="space-y-3 text-[15px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm text-muted">Information</p>
          <ul className="space-y-3 text-[15px]">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/policies/privacy-policy">Privacy policy</Link>
            </li>
            <li>
              <Link href="/policies/terms-conditions">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1400px] px-5 py-6 text-sm text-muted md:px-10">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
