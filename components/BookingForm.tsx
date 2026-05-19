"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck, CheckCircle2, Clock, Home, MessageSquare, WalletCards } from "lucide-react";
import { createMockBooking, createMockPaymentIntent } from "@/lib/api";
import type { Cleaner, CleaningType } from "@/lib/types";
import { calculateBookingTotal } from "@/lib/utils";
import { PaymentSummary } from "./PaymentSummary";
import { StatusBadge } from "./StatusBadge";
import { GoogleMapTagger } from "./GoogleMapTagger";

export function BookingForm({ cleaner }: { cleaner: Cleaner }) {
  const [date, setDate] = useState("2026-05-14");
  const [time, setTime] = useState(cleaner.availability[0].times[0]);
  const [hours, setHours] = useState(3);
  const [cleaningType, setCleaningType] = useState<CleaningType>(cleaner.cleaningTypes[0]);
  const [address, setAddress] = useState("118 River Street, Apt 8");
  const [mapTag, setMapTag] = useState("118 River Street, Apt 8");
  const [instructions, setInstructions] = useState("Focus on kitchen appliances and guest bathroom.");
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "paid">("idle");
  const [bookingId, setBookingId] = useState("");

  const totals = useMemo(() => calculateBookingTotal(cleaner.hourlyRate, hours), [cleaner.hourlyRate, hours]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPaymentStatus("processing");

    // TODO: Create the booking server-side, then create/confirm a real payment intent.
    await createMockPaymentIntent(totals.total);
    const booking = await createMockBooking({
      id: "",
      customerId: "cus-1",
      customerName: "Priya Shah",
      cleanerId: cleaner.id,
      cleanerName: cleaner.name,
      date,
      time,
      hours,
      cleaningType,
      address,
      mapTag,
      instructions,
      bookingStatus: "Pending cleaner confirmation",
      paymentStatus: "Paid",
      subtotal: totals.subtotal,
      serviceFee: totals.serviceFee,
      total: totals.total
    });

    setBookingId(booking.id);
    setPaymentStatus("paid");
  }

  if (paymentStatus === "paid") {
    return (
      <div className="rounded-lg border border-clean-200 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-clean-100 text-clean-700">
            <CheckCircle2 size={24} aria-hidden />
          </span>
          <div>
            <h2 className="text-2xl font-bold text-ink-900">Booking created</h2>
            <p className="text-sm text-ink-500">Reference {bookingId}</p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 rounded-lg bg-clean-50 p-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-ink-700">Booking status</span>
            <StatusBadge status="Pending cleaner confirmation" />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-ink-700">Payment status</span>
            <StatusBadge status="Paid" />
          </div>
        </div>
        <a href="/dashboard/customer" className="btn-primary mt-5 justify-center">
          Track booking
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="space-y-5 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink-900">Book {cleaner.name}</h1>
          <p className="mt-1 text-sm text-ink-500">
            Choose the service details and confirm payment to create a pending booking.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="field-label">
            <span className="inline-flex items-center gap-2">
              <CalendarCheck size={16} aria-hidden />
              Date
            </span>
            <input className="field" type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>

          <label className="field-label">
            <span className="inline-flex items-center gap-2">
              <Clock size={16} aria-hidden />
              Time
            </span>
            <select className="field" value={time} onChange={(event) => setTime(event.target.value)}>
              {cleaner.availability.flatMap((slot) =>
                slot.times.map((slotTime) => (
                  <option key={`${slot.day}-${slotTime}`} value={slotTime}>
                    {slot.day} {slotTime}
                  </option>
                ))
              )}
            </select>
          </label>

          <label className="field-label">
            Number of hours
            <input
              className="field"
              type="number"
              min={2}
              max={8}
              value={hours}
              onChange={(event) => setHours(Number(event.target.value))}
            />
          </label>

          <label className="field-label">
            Cleaning type
            <select
              className="field"
              value={cleaningType}
              onChange={(event) => setCleaningType(event.target.value as CleaningType)}
            >
              {cleaner.cleaningTypes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="field-label">
          <span className="inline-flex items-center gap-2">
            <Home size={16} aria-hidden />
            Service address
          </span>
          <input className="field" value={address} onChange={(event) => setAddress(event.target.value)} />
        </label>

        <GoogleMapTagger address={address} value={mapTag} onChange={setMapTag} />

        <label className="field-label">
          <span className="inline-flex items-center gap-2">
            <MessageSquare size={16} aria-hidden />
            Special instructions
          </span>
          <textarea
            className="field min-h-28"
            value={instructions}
            onChange={(event) => setInstructions(event.target.value)}
          />
        </label>

        <div className="rounded-lg bg-ocean-50 p-4">
          <div className="flex items-start gap-3">
            <WalletCards className="mt-0.5 text-ocean-700" size={20} aria-hidden />
            <div>
              <h2 className="font-bold text-ink-900">Mock payment checkout</h2>
              <p className="mt-1 text-sm leading-6 text-ink-700">
                The form simulates a successful payment. The payment helper is isolated so a gateway
                can be added without rewriting the booking UI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <PaymentSummary hourlyRate={cleaner.hourlyRate} hours={hours} {...totals} />
        <button type="submit" className="btn-primary w-full justify-center" disabled={paymentStatus === "processing"}>
          {paymentStatus === "processing" ? "Processing payment..." : "Pay and create booking"}
        </button>
      </div>
    </form>
  );
}
