import Link from "next/link";
import { Shield } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <main className="bg-zinc-50">
      <div className="section grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section>
          <p className="text-sm font-bold uppercase text-ocean-700">Admin access</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-900">Review cleaners, bookings, payments, and reviews</h1>
          <p className="mt-4 max-w-xl leading-7 text-ink-700">
            Admin workflows are mocked so product decisions can be tested before building the
            operational backend.
          </p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-ocean-50 text-ocean-700">
              <Shield size={20} aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-bold text-ink-900">Admin login</h2>
              <p className="text-sm text-ink-500">Mock admin account</p>
            </div>
          </div>
          <form className="mt-6 grid gap-4">
            <label className="field-label">
              Email
              <input className="field" type="email" defaultValue="admin@weclean.test" />
            </label>
            <label className="field-label">
              Password
              <input className="field" type="password" defaultValue="password" />
            </label>
            <Link href="/dashboard/admin" className="btn-primary justify-center">
              Open dashboard
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
