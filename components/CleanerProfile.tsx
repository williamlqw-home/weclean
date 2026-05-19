import Link from "next/link";
import type { ReactNode } from "react";
import { Briefcase, CalendarDays, MapPin, ShieldCheck, Star } from "lucide-react";
import type { Cleaner } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { ReviewCard } from "./ReviewCard";

export function CleanerProfile({ cleaner }: { cleaner: Cleaner }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
      <div className="space-y-8">
        <section className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-soft">
          <div className="grid md:grid-cols-[280px_1fr]">
            <img src={cleaner.photo} alt={cleaner.name} className="h-80 w-full object-cover md:h-full" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold tracking-tight text-ink-900">{cleaner.name}</h1>
                    {cleaner.verified ? (
                      <ShieldCheck size={22} className="text-clean-500" aria-label="Verified cleaner" />
                    ) : null}
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-ink-500">
                    <MapPin size={17} aria-hidden />
                    {cleaner.serviceAreas.join(", ")}
                  </p>
                </div>
                <div className="rounded-lg bg-clean-50 p-4 text-right">
                  <p className="text-2xl font-bold text-clean-700">{formatCurrency(cleaner.hourlyRate)}/hr</p>
                  <p className="text-sm text-ink-500">Transparent hourly rate</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Stat icon={<Star size={18} fill="currentColor" />} label="Rating" value={`${cleaner.rating} (${cleaner.reviewsCount})`} />
                <Stat icon={<Briefcase size={18} />} label="Experience" value={`${cleaner.experienceYears} years`} />
                <Stat icon={<ShieldCheck size={18} />} label="Checks" value={cleaner.documents.backgroundCheck} />
              </div>

              <p className="mt-6 text-base leading-7 text-ink-700">{cleaner.bio}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {cleaner.skills.map((skill) => (
                  <span key={skill} className="rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-semibold text-ink-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-ink-900">Portfolio</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cleaner.portfolio.map((photo) => (
              <img key={photo} src={photo} alt="Cleaner portfolio" className="h-56 w-full rounded-lg object-cover" />
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-ink-900">Reviews</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {cleaner.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      </div>

      <aside className="h-fit rounded-lg border border-zinc-200 bg-white p-6 shadow-soft lg:sticky lg:top-24">
        <h2 className="text-xl font-bold text-ink-900">Availability</h2>
        <div className="mt-4 grid gap-3">
          {cleaner.availability.map((slot) => (
            <div key={slot.day} className="rounded-lg bg-zinc-50 p-3">
              <p className="flex items-center gap-2 font-semibold text-ink-900">
                <CalendarDays size={16} aria-hidden />
                {slot.day}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {slot.times.map((time) => (
                  <span key={time} className="rounded-md bg-white px-2.5 py-1 text-sm font-semibold text-ink-700 ring-1 ring-zinc-200">
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link href={`/book/${cleaner.slug}`} className="btn-primary mt-5 w-full justify-center">
          Book {cleaner.name.split(" ")[0]}
        </Link>
      </aside>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-zinc-50 p-4">
      <div className="text-clean-700">{icon}</div>
      <p className="mt-2 text-xs font-semibold uppercase text-ink-500">{label}</p>
      <p className="mt-1 font-bold text-ink-900">{value}</p>
    </div>
  );
}
