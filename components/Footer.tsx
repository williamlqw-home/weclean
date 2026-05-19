import Link from "next/link";
import { ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 text-lg font-bold text-ink-900">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-clean-500 text-white">
              <Sparkles size={18} aria-hidden />
            </span>
            WeClean
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink-500">
            A friendly marketplace for vetted hourly cleaning help, built for simple booking,
            transparent prices, and safer home services.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-clean-50 px-3 py-2 text-sm font-semibold text-clean-700">
            <ShieldCheck size={16} aria-hidden />
            Verified cleaner profiles
          </div>
        </div>
        <FooterColumn
          title="Marketplace"
          links={[
            ["Browse cleaners", "/cleaners"],
            ["Pricing", "/#pricing"],
            ["How it works", "/#how-it-works"]
          ]}
        />
        <FooterColumn
          title="Accounts"
          links={[
            ["Customer signup", "/register/customer"],
            ["Cleaner signup", "/register/cleaner"],
            ["Admin login", "/admin/login"]
          ]}
        />
        <FooterColumn
          title="Dashboards"
          links={[
            ["Customer", "/dashboard/customer"],
            ["Cleaner", "/dashboard/cleaner"],
            ["Admin", "/dashboard/admin"]
          ]}
        />
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-ink-900">{title}</h3>
      <div className="mt-4 grid gap-3">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="text-sm text-ink-500 hover:text-clean-700">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
