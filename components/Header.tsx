"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services, site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setOpen(false);
    setSearch(false);
  }, [pathname]);

  const results = query.trim()
    ? [
        ...nav.filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase()),
        ),
        ...services
          .filter((s) =>
            `${s.title} ${s.summary}`.toLowerCase().includes(query.toLowerCase()),
          )
          .map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
      ]
    : [];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="relative z-10">
          <Image
            src="/logo.png"
            alt="Gallant Advisory"
            width={170}
            height={64}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[15px] text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearch((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted hover:text-black"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
              <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f3f4] text-black md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 text-lg">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-1">
                {item.label}
              </Link>
            ))}
            {site.phones.map((phone) => (
              <a key={phone.href} href={phone.href} className="text-muted">
                {phone.display}
              </a>
            ))}
          </div>
        </div>
      )}

      {search && (
        <div className="border-t border-line bg-white px-5 py-5 md:px-10">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages and services"
            className="w-full rounded-2xl border border-line bg-badge px-5 py-3 outline-none"
          />
          {query && (
            <ul className="mt-4 space-y-2">
              {results.length === 0 && (
                <li className="text-sm text-muted">No matches.</li>
              )}
              {results.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
}
