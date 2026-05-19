import { Star } from "lucide-react";
import type { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold text-ink-900">{review.customerName}</h3>
          <p className="text-sm text-ink-500">{new Date(review.date).toLocaleDateString()}</p>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-sm font-bold text-amber-700">
          <Star size={15} fill="currentColor" aria-hidden />
          {review.rating}
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-ink-700">{review.comment}</p>
    </article>
  );
}
