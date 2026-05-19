"use client";

import { useMemo, useState } from "react";
import { LockKeyhole, WalletCards } from "lucide-react";
import { cleaners } from "@/lib/mock-data";
import { calculateBookingTotal } from "@/lib/utils";
import { PaymentSummary } from "./PaymentSummary";
import { StatusBadge } from "./StatusBadge";

export function CheckoutExperience() {
  const cleaner = cleaners[0];
  const [status, setStatus] = useState<"Pending" | "Paid" | "Failed">("Pending");
  const totals = useMemo(() => calculateBookingTotal(cleaner.hourlyRate, 3), [cleaner.hourlyRate]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-ocean-50 text-ocean-700">
            <LockKeyhole size={20} aria-hidden />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-ink-900">Payment checkout</h1>
            <p className="text-sm text-ink-500">Mock card flow for a future gateway integration.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <label className="field-label">
            Cardholder name
            <input className="field" defaultValue="Priya Shah" />
          </label>
          <label className="field-label">
            Card number
            <input className="field" defaultValue="4242 4242 4242 4242" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              Expiry
              <input className="field" defaultValue="12/30" />
            </label>
            <label className="field-label">
              CVC
              <input className="field" defaultValue="123" />
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button className="btn-primary" onClick={() => setStatus("Paid")}>
            <WalletCards size={17} aria-hidden />
            Pay now
          </button>
          <button className="btn-secondary" onClick={() => setStatus("Failed")}>
            Simulate failure
          </button>
          <StatusBadge status={status} />
        </div>
      </section>

      <PaymentSummary hourlyRate={cleaner.hourlyRate} hours={3} {...totals} />
    </div>
  );
}
