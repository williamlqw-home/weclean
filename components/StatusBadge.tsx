import { cn } from "@/lib/utils";
import type { BookingStatus, CleanerStatus, PaymentStatus } from "@/lib/types";

type Status = BookingStatus | CleanerStatus | PaymentStatus;

const styles: Record<string, string> = {
  approved: "bg-clean-100 text-clean-700 ring-clean-200",
  pending: "bg-amber-100 text-amber-800 ring-amber-200",
  rejected: "bg-rose-100 text-rose-800 ring-rose-200",
  suspended: "bg-zinc-100 text-zinc-700 ring-zinc-200",
  Paid: "bg-clean-100 text-clean-700 ring-clean-200",
  Pending: "bg-amber-100 text-amber-800 ring-amber-200",
  Failed: "bg-rose-100 text-rose-800 ring-rose-200",
  Refunded: "bg-ocean-100 text-ocean-700 ring-ocean-100",
  "Pending cleaner confirmation": "bg-amber-100 text-amber-800 ring-amber-200",
  Confirmed: "bg-ocean-100 text-ocean-700 ring-ocean-100",
  "In progress": "bg-indigo-100 text-indigo-800 ring-indigo-200",
  Completed: "bg-clean-100 text-clean-700 ring-clean-200",
  Cancelled: "bg-zinc-100 text-zinc-700 ring-zinc-200"
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ring-1",
        styles[status] ?? "bg-zinc-100 text-zinc-700 ring-zinc-200"
      )}
    >
      {status}
    </span>
  );
}
