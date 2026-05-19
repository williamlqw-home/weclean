"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/cleaners", label: "Browse cleaners" },
  { href: "/dashboard/customer", label: "Customer" },
  { href: "/dashboard/cleaner", label: "Cleaner" },
  { href: "/dashboard/admin", label: "Admin" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-ink-900">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-clean-500 text-white">
            <Sparkles size={18} aria-hidden />
          </span>
          WeClean
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-clean-50 hover:text-clean-700",
                pathname === link.href && "bg-clean-50 text-clean-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className="btn-secondary">
            Log in
          </Link>
          <Link href="/cleaners" className="btn-primary">
            Book Cleaning
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md border border-zinc-200 p-2 text-ink-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-clean-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link href="/login" className="btn-secondary text-center" onClick={() => setOpen(false)}>
                Log in
              </Link>
              <Link href="/cleaners" className="btn-primary text-center" onClick={() => setOpen(false)}>
                Book
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
