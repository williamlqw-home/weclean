"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { CheckCircle2, DollarSign, Star, XCircle } from "lucide-react";
import { bookings, cleaners } from "@/lib/mock-data";
import type { Booking } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

export function CleanerDashboard() {
  const cleaner = cleaners[0];
  const [requests, setRequests] = useState<Booking[]>(
    bookings.map((booking) => ({
      ...booking,
      bookingStatus: booking.id === "BK-1048" ? "Pending cleaner confirmation" : booking.bookingStatus
    }))
  );

  function decide(id: string, decision: "Confirmed" | "Cancelled") {
    setRequests((current) =>
      current.map((booking) => (booking.id === id ? { ...booking, bookingStatus: decision } : booking))
    );
  }

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-4">
        <Metric title="Profile completion" value={`${cleaner.profileCompletion}%`} />
        <Metric title="Accepted bookings" value="18" />
        <Metric title="Completed jobs" value="74" />
        <Metric title="Earnings" value={formatCurrency(2480)} />
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold text-ink-900">Profile readiness</h2>
            <p className="text-sm text-ink-500">Your marketplace profile is approved and visible to customers.</p>
          </div>
          <StatusBadge status={cleaner.status} />
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-md bg-zinc-100">
          <div className="h-full rounded-md bg-clean-500" style={{ width: `${cleaner.profileCompletion}%` }} />
        </div>
      </section>

      <section id="requests" className="rounded-lg border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-200 p-5">
          <h2 className="text-lg font-bold text-ink-900">Booking requests</h2>
          <p className="text-sm text-ink-500">Accept or reject customer requests before they are confirmed.</p>
        </div>
        <div className="divide-y divide-zinc-100">
          {requests.map((booking) => (
            <div key={booking.id} className="grid gap-4 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-ink-900">{booking.customerName}</h3>
                  <StatusBadge status={booking.bookingStatus} />
                  <StatusBadge status={booking.paymentStatus} />
                </div>
                <p className="mt-2 text-sm text-ink-500">
                  {booking.date} at {booking.time} for {booking.hours} hours, {booking.cleaningType}
                </p>
                <p className="mt-1 text-sm text-ink-700">{booking.address}</p>
              </div>
              <div className="flex gap-2">
                <button className="btn-secondary" onClick={() => decide(booking.id, "Cancelled")}>
                  <XCircle size={17} aria-hidden />
                  Reject
                </button>
                <button className="btn-primary" onClick={() => decide(booking.id, "Confirmed")}>
                  <CheckCircle2 size={17} aria-hidden />
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <InfoCard icon={<DollarSign size={20} />} title="Earnings summary" body="$2,480 earned this month with $372 estimated platform commission already included in payment records." />
        <InfoCard icon={<Star size={20} />} title="Reviews received" body="4.9 average rating across 128 customer reviews. Recent customers mention punctuality and careful kitchen work." />
      </section>
    </div>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-ink-500">{title}</p>
      <p className="mt-2 text-2xl font-bold text-ink-900">{value}</p>
    </div>
  );
}

function InfoCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="text-clean-700">{icon}</div>
      <h3 className="mt-3 font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-700">{body}</p>
    </div>
  );
}
