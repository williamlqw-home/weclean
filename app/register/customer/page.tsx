import { UserPlus } from "lucide-react";
import { RegisterSessionButton } from "@/components/RegisterSessionButton";

export default function CustomerRegisterPage() {
  return (
    <main className="bg-zinc-50">
      <div className="section grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <p className="text-sm font-bold uppercase text-clean-700">Customer signup</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-900">Create an account before booking</h1>
          <p className="mt-4 leading-7 text-ink-700">
            Customers can save addresses, track booking status, view payment status, and leave
            reviews once a service is complete.
          </p>
        </section>
        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-clean-50 text-clean-700">
              <UserPlus size={20} aria-hidden />
            </span>
            <h2 className="text-xl font-bold text-ink-900">Customer details</h2>
          </div>
          <form className="mt-6 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                Full name
                <input className="field" defaultValue="Priya Shah" />
              </label>
              <label className="field-label">
                Phone
                <input className="field" defaultValue="+1 555 0188" />
              </label>
            </div>
            <label className="field-label">
              Email
              <input className="field" type="email" defaultValue="priya@example.com" />
            </label>
            <label className="field-label">
              Address
              <input className="field" defaultValue="118 River Street, Apt 8" />
            </label>
            <RegisterSessionButton role="customer" label="Create account and browse" redirectTo="/cleaners" />
          </form>
        </section>
      </div>
    </main>
  );
}
