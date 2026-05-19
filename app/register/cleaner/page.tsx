import type { ReactNode } from "react";
import { BadgeCheck, Camera, FileUp, UserRoundCog } from "lucide-react";
import { RegisterSessionButton } from "@/components/RegisterSessionButton";

export default function CleanerRegisterPage() {
  return (
    <main className="bg-zinc-50">
      <div className="section grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <p className="text-sm font-bold uppercase text-clean-700">Cleaner application</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-900">Build a marketplace profile for admin review</h1>
          <p className="mt-4 leading-7 text-ink-700">
            Cleaners submit identity documents, service areas, hourly rate, availability, and
            portfolio photos. Admin reviews the profile before it appears publicly.
          </p>
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 text-amber-700" size={20} aria-hidden />
              <div>
                <h2 className="font-bold text-ink-900">Profile status: Pending approval</h2>
                <p className="mt-1 text-sm leading-6 text-ink-700">
                  After submission, admin can approve, reject with a reason, or request changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-clean-50 text-clean-700">
              <UserRoundCog size={20} aria-hidden />
            </span>
            <h2 className="text-xl font-bold text-ink-900">Cleaner profile upload</h2>
          </div>
          <form className="mt-6 grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                Full name
                <input className="field" defaultValue="Nora Hill" />
              </label>
              <label className="field-label">
                Phone number
                <input className="field" defaultValue="+1 555 0142" />
              </label>
              <label className="field-label">
                Email
                <input className="field" type="email" defaultValue="nora@example.com" />
              </label>
              <label className="field-label">
                Hourly rate
                <input className="field" type="number" defaultValue="23" />
              </label>
            </div>
            <label className="field-label">
              Address / service area
              <input className="field" defaultValue="South Bay, Lakeshore" />
            </label>
            <label className="field-label">
              Bio
              <textarea className="field min-h-24" defaultValue="Reliable part-time cleaner with residential references and flexible weekday availability." />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                Work experience
                <textarea className="field min-h-24" defaultValue="2 years residential cleaning, recurring apartment upkeep, laundry add-ons." />
              </label>
              <label className="field-label">
                Skills
                <textarea className="field min-h-24" defaultValue="Standard cleaning, laundry add-on, eco products, pet-friendly homes." />
              </label>
            </div>
            <label className="field-label">
              Availability schedule
              <textarea className="field min-h-24" defaultValue="Tue 10:00, Tue 14:00, Fri 09:00, Sat 12:00" />
            </label>
            <div className="grid gap-4 sm:grid-cols-3">
              <UploadBox icon={<Camera size={18} />} title="Profile photo" />
              <UploadBox icon={<FileUp size={18} />} title="Identity document" />
              <UploadBox icon={<Camera size={18} />} title="Portfolio photos" />
            </div>
            <RegisterSessionButton role="cleaner" label="Submit application" redirectTo="/dashboard/cleaner" />
          </form>
        </section>
      </div>
    </main>
  );
}

function UploadBox({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <label className="grid cursor-pointer gap-3 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center hover:border-clean-300 hover:bg-clean-50">
      <span className="mx-auto grid h-10 w-10 place-items-center rounded-lg bg-white text-clean-700">{icon}</span>
      <span className="text-sm font-bold text-ink-900">{title}</span>
      <input type="file" className="sr-only" />
    </label>
  );
}
