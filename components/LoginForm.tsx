"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, LockKeyhole, Mail, Sparkles } from "lucide-react";
import {
  authenticate,
  demoAccounts,
  saveSession,
  type AuthRole
} from "@/lib/auth";
import { cn } from "@/lib/utils";

const roleTabs: { role: AuthRole; label: string; href: string }[] = [
  { role: "customer", label: "Customer", href: "/login" },
  { role: "cleaner", label: "Cleaner", href: "/login/cleaner" },
  { role: "admin", label: "Admin", href: "/login/admin" }
];

export function LoginForm({
  role,
  title = "Welcome Back",
  subtitle = "Please choose an account type below to login."
}: {
  role: AuthRole;
  title?: string;
  subtitle?: string;
}) {
  const router = useRouter();
  const account = demoAccounts[role];
  const [email, setEmail] = useState(account.email);
  const [password, setPassword] = useState(account.password);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const session = authenticate(role, email, password);

    if (!session) {
      setError("The email or password does not match this demo account.");
      return;
    }

    saveSession(session);
    router.push(account.redirectTo);
    router.refresh();
  }

  return (
    <section className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-soft">
      <div className="px-6 pt-7 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-clean-500 text-white">
          <Sparkles size={22} aria-hidden />
        </div>
        <p className="mt-4 text-4xl font-bold text-ink-900">WeClean</p>
        <h1 className="mt-5 text-2xl font-bold text-ink-900">{title}</h1>
        <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
      </div>

      <div className="mt-6 grid grid-cols-3 border-b border-zinc-200 px-6">
        {roleTabs.map((tab) => (
          <Link
            key={tab.role}
            href={tab.href}
            className={cn(
              "border-b-2 border-transparent px-2 pb-3 text-center text-sm font-bold text-ink-500 transition hover:text-clean-700",
              role === tab.role && "border-clean-500 text-clean-700"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <form className="grid gap-4 px-6 py-6" onSubmit={handleSubmit}>
        <label className="field-label">
          Email
          <span className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-500" size={16} aria-hidden />
            <input
              className="field pl-10"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </span>
        </label>
        <label className="field-label">
          Password
          <span className="relative">
            <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-500" size={16} aria-hidden />
            <input
              className="field pl-10"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </span>
        </label>

        {error ? (
          <div className="flex items-start gap-2 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-800">
            <AlertCircle className="mt-0.5 shrink-0" size={16} aria-hidden />
            {error}
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3 text-sm">
          <label className="inline-flex items-center gap-2 text-ink-500">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-clean-500" />
            Remember me
          </label>
          <span className="font-semibold text-ink-500">{account.name}</span>
        </div>

        <button type="submit" className="btn-primary mt-2 justify-center">
          Login
        </button>
      </form>
    </section>
  );
}
