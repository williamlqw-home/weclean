"use client";

import { useState } from "react";
import { Ban, CheckCircle2, Eye, XCircle } from "lucide-react";
import { cleaners } from "@/lib/mock-data";
import type { Cleaner, CleanerStatus } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

export function AdminApprovalTable() {
  const [rows, setRows] = useState<Cleaner[]>(cleaners);
  const [selected, setSelected] = useState<Cleaner | null>(cleaners.find((cleaner) => cleaner.status === "pending") ?? null);

  function updateStatus(id: string, status: CleanerStatus) {
    setRows((current) => current.map((cleaner) => (cleaner.id === id ? { ...cleaner, status } : cleaner)));
    setSelected((current) => (current?.id === id ? { ...current, status } : current));
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-200 p-4">
          <h2 className="text-lg font-bold text-ink-900">Cleaner approval management</h2>
          <p className="mt-1 text-sm text-ink-500">Review profiles, documents, approval status, and actions.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-zinc-50 text-xs uppercase text-ink-500">
              <tr>
                <th className="px-4 py-3">Cleaner</th>
                <th className="px-4 py-3">Area</th>
                <th className="px-4 py-3">Rate</th>
                <th className="px-4 py-3">Documents</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {rows.map((cleaner) => (
                <tr key={cleaner.id} className="align-middle">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img src={cleaner.photo} alt={cleaner.name} className="h-10 w-10 rounded-lg object-cover" />
                      <div>
                        <p className="font-bold text-ink-900">{cleaner.name}</p>
                        <p className="text-xs text-ink-500">{cleaner.experienceYears} years experience</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-ink-700">{cleaner.location}</td>
                  <td className="px-4 py-4 font-semibold text-ink-900">{formatCurrency(cleaner.hourlyRate)}/hr</td>
                  <td className="px-4 py-4 text-ink-700">{cleaner.documents.identity}</td>
                  <td className="px-4 py-4">
                    <StatusBadge status={cleaner.status} />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <button className="icon-btn" aria-label="View cleaner" onClick={() => setSelected(cleaner)}>
                        <Eye size={16} aria-hidden />
                      </button>
                      <button className="icon-btn text-clean-700" aria-label="Approve cleaner" onClick={() => updateStatus(cleaner.id, "approved")}>
                        <CheckCircle2 size={16} aria-hidden />
                      </button>
                      <button className="icon-btn text-rose-700" aria-label="Reject cleaner" onClick={() => updateStatus(cleaner.id, "rejected")}>
                        <XCircle size={16} aria-hidden />
                      </button>
                      <button className="icon-btn text-zinc-700" aria-label="Suspend cleaner" onClick={() => updateStatus(cleaner.id, "suspended")}>
                        <Ban size={16} aria-hidden />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <aside className="h-fit rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        {selected ? (
          <>
            <img src={selected.photo} alt={selected.name} className="h-44 w-full rounded-lg object-cover" />
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-ink-900">{selected.name}</h3>
                <p className="text-sm text-ink-500">{selected.serviceAreas.join(", ")}</p>
              </div>
              <StatusBadge status={selected.status} />
            </div>
            <p className="mt-4 text-sm leading-6 text-ink-700">{selected.bio}</p>
            <div className="mt-4 rounded-lg bg-zinc-50 p-4 text-sm">
              <p className="font-bold text-ink-900">Uploaded documents</p>
              <p className="mt-2 text-ink-700">Identity: {selected.documents.identity}</p>
              <p className="text-ink-700">Background: {selected.documents.backgroundCheck}</p>
              <label className="field-label mt-4">
                Rejection reason
                <textarea className="field min-h-24" placeholder="Reason shown to applicant" />
              </label>
            </div>
          </>
        ) : null}
      </aside>
    </div>
  );
}
