import Link from "next/link";
import { MessageSquareText, Plus, Star } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { AuthGuard } from "@/components/AuthGuard";
import { EmptyState } from "@/components/EmptyState";
import { ErrorState } from "@/components/ErrorState";
import { LoadingState } from "@/components/LoadingState";
import { StatusBadge } from "@/components/StatusBadge";
import { bookings } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const navItems = [
  { label: "Bookings", href: "/dashboard/customer", active: true },
  { label: "Payments", href: "/checkout" },
  { label: "Leave a review", href: "/dashboard/customer#review" },
  { label: "Browse cleaners", href: "/cleaners" }
];

export default function CustomerDashboardPage() {
  const upcoming = bookings.filter((booking) => ["Confirmed", "Pending cleaner confirmation", "In progress"].includes(booking.bookingStatus));
  const completed = bookings.filter((booking) => booking.bookingStatus === "Completed");
  const cancelled = bookings.filter((booking) => ["Cancelled", "Refunded"].includes(booking.bookingStatus));

  return (
    <AuthGuard role="customer">
      <DashboardLayout role="Customer" title="Priya Shah" navItems={navItems}>
        <div className="space-y-6">
        <section className="grid gap-4 md:grid-cols-4">
          <Metric title="Upcoming" value={String(upcoming.length)} />
          <Metric title="Completed" value={String(completed.length)} />
          <Metric title="Cancelled" value={String(cancelled.length)} />
          <Metric title="Paid total" value={formatCurrency(bookings.reduce((sum, booking) => sum + booking.total, 0))} />
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-3 border-b border-zinc-200 p-5 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-xl font-bold text-ink-900">Booking dashboard</h1>
              <p className="text-sm text-ink-500">Track booking status, payment status, and post-service reviews.</p>
            </div>
            <Link href="/cleaners" className="btn-primary">
              <Plus size={17} aria-hidden />
              New booking
            </Link>
          </div>
          <BookingList title="Upcoming bookings" items={upcoming} />
          <BookingList title="Completed bookings" items={completed} />
          <BookingList title="Cancelled bookings" items={cancelled} />
        </section>

        <section id="review" className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-amber-50 text-amber-700">
              <Star size={19} aria-hidden />
            </span>
            <div className="flex-1">
              <h2 className="font-bold text-ink-900">Review completed service</h2>
              <p className="mt-1 text-sm text-ink-500">A completed booking can be rated after the appointment window closes.</p>
              <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <label className="field-label">
                  Your review
                  <textarea className="field min-h-24" defaultValue="Sofia was punctual, careful, and made the move-in clean easy." />
                </label>
                <button className="btn-primary">
                  <MessageSquareText size={17} aria-hidden />
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          <LoadingState label="Refreshing latest booking status" />
          <EmptyState title="No saved addresses yet" body="Saved service addresses will appear here after backend profile storage is connected." />
          <ErrorState message="Payment webhooks are mocked in this prototype. Connect the gateway webhook endpoint before production." />
        </div>
        </div>
      </DashboardLayout>
    </AuthGuard>
  );
}

function BookingList({ title, items }: { title: string; items: typeof bookings }) {
  return (
    <div className="border-b border-zinc-100 p-5 last:border-b-0">
      <h2 className="font-bold text-ink-900">{title}</h2>
      <div className="mt-4 grid gap-3">
        {items.length ? (
          items.map((booking) => (
            <div key={booking.id} className="grid gap-4 rounded-lg bg-zinc-50 p-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-bold text-ink-900">{booking.cleanerName}</p>
                  <StatusBadge status={booking.bookingStatus} />
                  <StatusBadge status={booking.paymentStatus} />
                </div>
                <p className="mt-2 text-sm text-ink-500">
                  {booking.date} at {booking.time} for {booking.hours} hours, {booking.cleaningType}
                </p>
              </div>
              <p className="font-bold text-ink-900">{formatCurrency(booking.total)}</p>
            </div>
          ))
        ) : (
          <EmptyState title="Nothing here yet" body="Bookings will appear in this section when their status matches this tab." />
        )}
      </div>
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
