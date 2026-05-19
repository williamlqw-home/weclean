import type { ReactNode } from "react";
import { MessageSquareWarning, RefreshCcw, UsersRound } from "lucide-react";
import { AdminApprovalTable } from "@/components/AdminApprovalTable";
import { DashboardLayout } from "@/components/DashboardLayout";
import { StatusBadge } from "@/components/StatusBadge";
import { bookings, cleaners, customers, payments } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const navItems = [
  { label: "Metrics", href: "/dashboard/admin", active: true },
  { label: "Cleaner approvals", href: "/dashboard/admin#approvals" },
  { label: "Bookings", href: "/dashboard/admin#bookings" },
  { label: "Payments", href: "/dashboard/admin#payments" },
  { label: "Customers", href: "/dashboard/admin#customers" },
  { label: "Reviews", href: "/dashboard/admin#reviews" }
];

export default function AdminDashboardPage() {
  const pending = cleaners.filter((cleaner) => cleaner.status === "pending").length;
  const revenue = payments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <DashboardLayout role="Admin" title="Operations" navItems={navItems}>
      <div className="space-y-6">
        <section className="grid gap-4 md:grid-cols-5">
          <Metric title="Customers" value={String(customers.length)} />
          <Metric title="Cleaners" value={String(cleaners.length)} />
          <Metric title="Pending approvals" value={String(pending)} />
          <Metric title="Bookings" value={String(bookings.length)} />
          <Metric title="Revenue" value={formatCurrency(revenue)} />
        </section>

        <section id="approvals">
          <AdminApprovalTable />
        </section>

        <section id="bookings" className="rounded-lg border border-zinc-200 bg-white shadow-sm">
          <SectionHeader title="Booking management" body="View all bookings, update status, and handle cancellations." />
          <div className="divide-y divide-zinc-100">
            {bookings.map((booking) => (
              <div key={booking.id} className="grid gap-4 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold text-ink-900">{booking.id}</p>
                    <StatusBadge status={booking.bookingStatus} />
                    <StatusBadge status={booking.paymentStatus} />
                  </div>
                  <p className="mt-2 text-sm text-ink-500">
                    {booking.customerName} booked {booking.cleanerName} for {booking.date}, {booking.hours} hours
                  </p>
                </div>
                <select className="field w-full lg:w-56" defaultValue={booking.bookingStatus}>
                  {["Pending cleaner confirmation", "Confirmed", "In progress", "Completed", "Cancelled", "Refunded"].map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </section>

        <section id="payments" className="rounded-lg border border-zinc-200 bg-white shadow-sm">
          <SectionHeader title="Payment management" body="Monitor payment status, refund status, and platform commission." />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-zinc-50 text-xs uppercase text-ink-500">
                <tr>
                  <th className="px-5 py-3">Payment</th>
                  <th className="px-5 py-3">Customer</th>
                  <th className="px-5 py-3">Amount</th>
                  <th className="px-5 py-3">Commission</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Refund</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-5 py-4 font-bold text-ink-900">{payment.id}</td>
                    <td className="px-5 py-4 text-ink-700">{payment.customerName}</td>
                    <td className="px-5 py-4 font-semibold text-ink-900">{formatCurrency(payment.amount)}</td>
                    <td className="px-5 py-4 text-ink-700">{formatCurrency(payment.commission)}</td>
                    <td className="px-5 py-4"><StatusBadge status={payment.status} /></td>
                    <td className="px-5 py-4 text-ink-700">{payment.refundStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="customers" className="grid gap-4 md:grid-cols-3">
          {customers.map((customer) => (
            <div key={customer.id} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <UsersRound className="text-ocean-700" size={20} aria-hidden />
              <h3 className="mt-3 font-bold text-ink-900">{customer.name}</h3>
              <p className="mt-1 text-sm text-ink-500">{customer.email}</p>
              <p className="mt-1 text-sm text-ink-700">{customer.location}</p>
            </div>
          ))}
        </section>

        <section id="reviews" className="grid gap-4 md:grid-cols-2">
          <ActionCard icon={<MessageSquareWarning size={20} />} title="Review moderation" body="Flagged reviews would appear here for admin action before hiding or restoring content." />
          <ActionCard icon={<RefreshCcw size={20} />} title="Cancellation handling" body="Admin can update booking status to cancelled, refunded, or completed depending on support outcomes." />
        </section>
      </div>
    </DashboardLayout>
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

function SectionHeader({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-b border-zinc-200 p-5">
      <h2 className="text-lg font-bold text-ink-900">{title}</h2>
      <p className="mt-1 text-sm text-ink-500">{body}</p>
    </div>
  );
}

function ActionCard({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="text-coral-700">{icon}</div>
      <h3 className="mt-3 font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-700">{body}</p>
    </div>
  );
}
