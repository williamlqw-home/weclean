import Link from "next/link";
import { CalendarDays, MapPin, ShieldCheck, Star } from "lucide-react";
import type { Cleaner } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export function CleanerCard({ cleaner }: { cleaner: Cleaner }) {
  const nextSlot = cleaner.availability[0];

  return (
    <article className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/cleaners/${cleaner.slug}`} className="block">
        <img src={cleaner.photo} alt={cleaner.name} className="h-56 w-full object-cover" />
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-ink-900">{cleaner.name}</h3>
              {cleaner.verified ? (
                <ShieldCheck size={17} className="text-clean-500" aria-label="Verified cleaner" />
              ) : null}
            </div>
            <p className="mt-1 flex items-center gap-1 text-sm text-ink-500">
              <MapPin size={15} aria-hidden />
              {cleaner.location}
            </p>
          </div>
          <div className="rounded-md bg-amber-50 px-2.5 py-1 text-sm font-bold text-amber-700">
            <span className="inline-flex items-center gap-1">
              <Star size={14} fill="currentColor" aria-hidden />
              {cleaner.rating || "New"}
            </span>
          </div>
        </div>

        <p className="mt-4 line-clamp-2 text-sm leading-6 text-ink-700">{cleaner.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {cleaner.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-ink-700">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">
          <div>
            <p className="text-lg font-bold text-ink-900">{formatCurrency(cleaner.hourlyRate)}/hr</p>
            <p className="flex items-center gap-1 text-xs text-ink-500">
              <CalendarDays size={14} aria-hidden />
              {nextSlot.day} from {nextSlot.times[0]}
            </p>
          </div>
          <Link href={`/book/${cleaner.slug}`} className="btn-primary">
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}
