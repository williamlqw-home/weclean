import { CreditCard } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function PaymentSummary({
  hourlyRate,
  hours,
  subtotal,
  serviceFee,
  total
}: {
  hourlyRate: number;
  hours: number;
  subtotal: number;
  serviceFee: number;
  total: number;
}) {
  return (
    <aside className="rounded-lg border border-zinc-200 bg-white p-5 shadow-soft">
      <div className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-ocean-50 text-ocean-700">
          <CreditCard size={18} aria-hidden />
        </span>
        <div>
          <h3 className="font-bold text-ink-900">Payment summary</h3>
          <p className="text-sm text-ink-500">Mock checkout, gateway-ready structure</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 text-sm">
        <SummaryRow label="Hourly rate" value={formatCurrency(hourlyRate)} />
        <SummaryRow label="Duration" value={`${hours} hour${hours === 1 ? "" : "s"}`} />
        <SummaryRow label="Subtotal" value={formatCurrency(subtotal)} />
        <SummaryRow label="Service fee" value={formatCurrency(serviceFee)} />
      </div>
      <div className="mt-5 border-t border-zinc-200 pt-4">
        <SummaryRow label="Total" value={formatCurrency(total)} strong />
      </div>
    </aside>
  );
}

function SummaryRow({
  label,
  value,
  strong = false
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={strong ? "font-bold text-ink-900" : "text-ink-500"}>{label}</span>
      <span className={strong ? "text-lg font-bold text-ink-900" : "font-semibold text-ink-900"}>
        {value}
      </span>
    </div>
  );
}
