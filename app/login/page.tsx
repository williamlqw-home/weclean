import Link from "next/link";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="bg-zinc-50">
      <div className="section grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <section>
          <p className="text-sm font-bold uppercase text-clean-700">Customer login</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-900">Manage bookings, payments, and reviews</h1>
          <p className="mt-4 max-w-xl leading-7 text-ink-700">
            This prototype uses mock authentication. Replace the submit handler with your auth
            provider when connecting the backend.
          </p>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-clean-50 text-clean-700">
              <LogIn size={20} aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-bold text-ink-900">Log in</h2>
              <p className="text-sm text-ink-500">Mock customer account</p>
            </div>
          </div>
          <form className="mt-6 grid gap-4">
            <label className="field-label">
              Email
              <input className="field" type="email" defaultValue="priya@example.com" />
            </label>
            <label className="field-label">
              Password
              <input className="field" type="password" defaultValue="password" />
            </label>
            <Link href="/dashboard/customer" className="btn-primary justify-center">
              Continue
            </Link>
          </form>
          <p className="mt-5 text-sm text-ink-500">
            New customer?{" "}
            <Link href="/register/customer" className="font-bold text-clean-700">
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
