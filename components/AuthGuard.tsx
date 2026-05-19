"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";
import {
  AUTH_CHANGE_EVENT,
  getStoredSession,
  loginPathForRole,
  type AuthRole,
  type AuthSession
} from "@/lib/auth";

export function AuthGuard({
  role,
  children
}: {
  role: AuthRole;
  children: ReactNode;
}) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function syncSession() {
      setSession(getStoredSession());
      setReady(true);
    }

    syncSession();
    window.addEventListener("storage", syncSession);
    window.addEventListener(AUTH_CHANGE_EVENT, syncSession);

    return () => {
      window.removeEventListener("storage", syncSession);
      window.removeEventListener(AUTH_CHANGE_EVENT, syncSession);
    };
  }, []);

  if (!ready) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-white p-6 text-sm font-semibold text-ink-500 shadow-sm">
        Checking your session...
      </div>
    );
  }

  if (session?.role !== role) {
    return (
      <div className="rounded-lg border border-amber-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-amber-50 text-amber-700">
            <ShieldAlert size={20} aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-bold text-ink-900">Login required</h2>
            <p className="mt-1 text-sm leading-6 text-ink-700">
              Please log in with a {role} account to continue.
            </p>
            <Link href={loginPathForRole(role)} className="btn-primary mt-4">
              Go to login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
