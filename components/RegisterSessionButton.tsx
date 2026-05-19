"use client";

import { useRouter } from "next/navigation";
import { demoAccounts, saveSession, type AuthRole } from "@/lib/auth";

export function RegisterSessionButton({
  role,
  label,
  redirectTo
}: {
  role: AuthRole;
  label: string;
  redirectTo: string;
}) {
  const router = useRouter();

  function handleClick() {
    const account = demoAccounts[role];
    saveSession({
      role: account.role,
      name: account.name,
      email: account.email
    });
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <button type="button" className="btn-primary justify-center" onClick={handleClick}>
      {label}
    </button>
  );
}
