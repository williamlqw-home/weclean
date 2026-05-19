"use client";

import { MapPin, Navigation } from "lucide-react";

export function GoogleMapTagger({
  address,
  value,
  onChange
}: {
  address: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const query = value.trim() || address.trim() || "Kuala Lumpur";
  const encodedQuery = encodeURIComponent(query);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;

  return (
    <div className="rounded-lg border border-ocean-100 bg-ocean-50 p-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold text-ocean-700">
            <MapPin size={16} aria-hidden />
            Google Maps tag
          </p>
          <p className="mt-1 text-xs leading-5 text-ink-500">
            Confirm the exact pin, landmark, or Google Maps link for the cleaner.
          </p>
        </div>
        <button
          type="button"
          className="btn-secondary justify-center"
          onClick={() => onChange(address)}
        >
          <Navigation size={16} aria-hidden />
          Use address
        </button>
      </div>

      <input
        className="field mt-4"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste Google Maps link, place name, or tagged landmark"
      />

      <div className="mt-4 overflow-hidden rounded-lg border border-ocean-100 bg-white">
        <iframe
          title="Google Maps location preview"
          src={embedUrl}
          className="h-56 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex text-sm font-bold text-ocean-700 hover:text-ocean-500"
      >
        Open selected location in Google Maps
      </a>
    </div>
  );
}
