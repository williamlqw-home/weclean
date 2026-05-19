import Link from "next/link";
import type { ReactNode } from "react";
import { LoginForm } from "@/components/LoginForm";
import type { AuthRole } from "@/lib/auth";

const roleCopy: Record<AuthRole, { eyebrow: string; heading: string; body: string; footer: ReactNode }> = {
  customer: {
    eyebrow: "Customer sign in",
    heading: "Book, pay, and review cleaning services",
    body: "Use the customer account to browse cleaners, track booking status, and manage completed-service reviews.",
    footer: (
      <>
        New customer?{" "}
        <Link href="/register/customer" className="font-bold text-clean-700">
          Create an account
        </Link>
      </>
    )
  },
  cleaner: {
    eyebrow: "Cleaner sign in",
    heading: "Manage requests, jobs, and earnings",
    body: "Use the cleaner account to accept booking requests, monitor profile approval, and review completed jobs.",
    footer: (
      <>
        New cleaner?{" "}
        <Link href="/register/cleaner" className="font-bold text-clean-700">
          Submit an application
        </Link>
      </>
    )
  },
  admin: {
    eyebrow: "Admin sign in",
    heading: "Review cleaners, bookings, and payments",
    body: "Admin credentials remain fixed for this prototype while the operations dashboard stays behind its own account type.",
    footer: "Admin demo: admin@weclean.test / password"
  }
};

export function RoleLoginScreen({ role }: { role: AuthRole }) {
  const copy = roleCopy[role];

  return (
    <main className="relative overflow-hidden bg-zinc-50">
      <img
        src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=80"
        alt="Clean home interior"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
      <div className="section relative grid min-h-[720px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <section className="max-w-xl">
          <p className="text-sm font-bold uppercase text-clean-700">{copy.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-ink-900">{copy.heading}</h2>
          <p className="mt-4 leading-7 text-ink-700">{copy.body}</p>
        </section>

        <div className="mx-auto w-full max-w-md">
          <LoginForm role={role} />
          <p className="mt-4 text-center text-sm text-ink-600">{copy.footer}</p>
        </div>
      </div>
    </main>
  );
}
