import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export function Button({ href, children, dark = true, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-medium transition ${
        dark
          ? "bg-black text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] hover:bg-neutral-800"
          : "bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-neutral-100"
      } ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-badge px-4 py-1.5 text-sm text-muted">
      {children}
    </span>
  );
}
