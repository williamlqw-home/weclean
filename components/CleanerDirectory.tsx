"use client";

import { useMemo, useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import { cleaners, cleaningTypes, locations } from "@/lib/mock-data";
import type { CleaningType } from "@/lib/types";
import { CleanerCard } from "./CleanerCard";
import { EmptyState } from "./EmptyState";

export function CleanerDirectory() {
  const [location, setLocation] = useState("Any location");
  const [maxRate, setMaxRate] = useState(40);
  const [rating, setRating] = useState(4.5);
  const [availability, setAvailability] = useState("Any day");
  const [type, setType] = useState("Any type");

  const approvedCleaners = useMemo(() => cleaners.filter((cleaner) => cleaner.status === "approved"), []);

  const filtered = useMemo(() => {
    return approvedCleaners.filter((cleaner) => {
      const matchesLocation = location === "Any location" || cleaner.serviceAreas.includes(location);
      const matchesRate = cleaner.hourlyRate <= maxRate;
      const matchesRating = cleaner.rating >= rating;
      const matchesAvailability =
        availability === "Any day" || cleaner.availability.some((slot) => slot.day === availability);
      const matchesType = type === "Any type" || cleaner.cleaningTypes.includes(type as CleaningType);

      return matchesLocation && matchesRate && matchesRating && matchesAvailability && matchesType;
    });
  }, [availability, location, maxRate, rating, type, approvedCleaners]);

  return (
    <div className="grid gap-6 lg:grid-cols-[290px_1fr]">
      <aside className="h-fit rounded-lg border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-clean-50 text-clean-700">
            <SlidersHorizontal size={18} aria-hidden />
          </span>
          <div>
            <h2 className="font-bold text-ink-900">Filters</h2>
            <p className="text-sm text-ink-500">{filtered.length} cleaners match</p>
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <label className="field-label">
            Location
            <select className="field" value={location} onChange={(event) => setLocation(event.target.value)}>
              {locations.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="field-label">
            Hourly rate up to ${maxRate}
            <input
              type="range"
              min="20"
              max="45"
              value={maxRate}
              onChange={(event) => setMaxRate(Number(event.target.value))}
              className="w-full accent-clean-500"
            />
          </label>

          <label className="field-label">
            Minimum rating
            <select className="field" value={rating} onChange={(event) => setRating(Number(event.target.value))}>
              <option value={4.8}>4.8 and up</option>
              <option value={4.5}>4.5 and up</option>
              <option value={4}>4.0 and up</option>
            </select>
          </label>

          <label className="field-label">
            Availability
            <select className="field" value={availability} onChange={(event) => setAvailability(event.target.value)}>
              {["Any day", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="field-label">
            Cleaning type
            <select className="field" value={type} onChange={(event) => setType(event.target.value)}>
              <option>Any type</option>
              {cleaningTypes.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
      </aside>

      <section>
        <div className="mb-5 flex flex-col justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold text-clean-700">
              <Filter size={16} aria-hidden />
              Approved cleaner marketplace
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-ink-900">Find trusted hourly cleaning help</h1>
          </div>
          <p className="text-sm text-ink-500">Only admin-approved cleaners are publicly listed.</p>
        </div>

        {filtered.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((cleaner) => (
              <CleanerCard key={cleaner.id} cleaner={cleaner} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No cleaners match these filters"
            body="Try widening the location, rating, hourly rate, availability, or cleaning type filters."
          />
        )}
      </section>
    </div>
  );
}
