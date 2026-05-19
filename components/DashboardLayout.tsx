import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DashboardLayout({
  role,
  title,
  navItems,
  children
}: {
  role: string;
  title: string;
  navItems: { label: string; href: string; active?: boolean }[];
  children: ReactNode;
}) {
  return (
    <div className="bg-zinc-50">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit rounded-lg border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
          <p className="text-xs font-bold uppercase tracking-wide text-clean-700">{role}</p>
          <h1 className="mt-1 text-xl font-bold text-ink-900">{title}</h1>
          <div className="mt-5 grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-clean-50 hover:text-clean-700",
                  item.active && "bg-clean-50 text-clean-700"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
