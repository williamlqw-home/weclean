import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CreditCard,
  Home,
  ShieldCheck,
  Sparkles,
  UserRoundCheck
} from "lucide-react";
import { CleanerCard } from "@/components/CleanerCard";
import { ReviewCard } from "@/components/ReviewCard";
import { cleaners } from "@/lib/mock-data";

const steps = [
  ["Browse", "Filter approved cleaners by location, hourly rate, rating, availability, and cleaning type."],
  ["Book", "Choose a date, service type, hours, address, and special instructions."],
  ["Pay", "Confirm the mock checkout total, then track booking and payment status."],
  ["Review", "After completion, leave a rating that helps the marketplace stay trustworthy."]
];

const faqs = [
  ["Are all cleaners approved?", "Only cleaners reviewed by admin appear in the public directory."],
  ["Can cleaners accept or reject jobs?", "Yes. Bookings start pending cleaner confirmation before becoming confirmed."],
  ["Is payment real?", "This prototype uses mock payment logic with a clean integration point for Stripe or another gateway."],
  ["What happens after a service?", "Completed bookings can be rated and reviewed from the customer dashboard."]
];

export default function HomePage() {
  const featured = cleaners.filter((cleaner) => cleaner.status === "approved").slice(0, 3);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80"
          alt="Professional cleaner preparing a home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-900/55" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/15 px-3 py-2 text-sm font-bold backdrop-blur">
              <Sparkles size={16} aria-hidden />
              Vetted part-time cleaners, booked by the hour
            </div>
            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">WeClean</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Browse approved cleaners, book hourly home cleaning, pay online, and track every
              status from request to review.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/cleaners" className="btn-primary justify-center">
                Book Cleaning
                <ArrowRight size={17} aria-hidden />
              </Link>
              <Link href="/register/cleaner" className="btn-secondary justify-center bg-white/95">
                Become a Cleaner
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          <Feature icon={<UserRoundCheck size={22} />} title="Approved talent profiles" body="Cleaners upload identity documents, service areas, skills, rates, availability, and work photos." />
          <Feature icon={<CalendarCheck size={22} />} title="Hourly booking flow" body="Customers select a cleaner, date, time, duration, cleaning type, address, and instructions." />
          <Feature icon={<CreditCard size={22} />} title="Payment-ready checkout" body="Mock checkout displays subtotal, service fee, total, and payment status for gateway integration." />
        </div>
      </section>

      <section id="how-it-works" className="bg-clean-50">
        <div className="section">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-clean-700">How it works</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">A clear path from signup to completed service</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {steps.map(([title, body], index) => (
              <div key={title} className="rounded-lg border border-clean-100 bg-white p-5 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-clean-500 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-700">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-clean-700">Featured cleaners</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Approved cleaners ready this week</h2>
          </div>
          <Link href="/cleaners" className="btn-secondary">
            View all
            <ArrowRight size={17} aria-hidden />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featured.map((cleaner) => (
            <CleanerCard key={cleaner.id} cleaner={cleaner} />
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-zinc-50">
        <div className="section">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-coral-700">Pricing</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Hourly rates with transparent service fees</h2>
              <p className="mt-4 leading-7 text-ink-700">
                Each cleaner controls their hourly rate. Customers review duration, subtotal,
                service fee, and total before paying.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <PriceCard title="Standard" price="$24-30/hr" body="Recurring home upkeep, bedrooms, bathrooms, floors, and surfaces." />
              <PriceCard title="Deep" price="$28-38/hr" body="Kitchen reset, baseboards, appliance fronts, and detailed bathroom care." />
              <PriceCard title="Move-in" price="$32-45/hr" body="Empty-home cleaning, cabinet interiors, and pre-arrival preparation." />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=80"
            alt="Cleaning supplies in a bright home"
            className="h-[420px] w-full rounded-lg object-cover shadow-soft"
          />
          <div>
            <p className="text-sm font-bold uppercase text-ocean-700">Trust and safety</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Designed for safer home services</h2>
            <div className="mt-6 grid gap-4">
              <TrustRow icon={<BadgeCheck size={20} />} title="Admin approval" body="Cleaner profiles stay pending until admin reviews documents and profile quality." />
              <TrustRow icon={<ShieldCheck size={20} />} title="Verification badges" body="Approved cleaners show verification status, document checks, reviews, and service areas." />
              <TrustRow icon={<Home size={20} />} title="Booking visibility" body="Customers, cleaners, and admin can track status, cancellations, payments, and refunds." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ocean-50">
        <div className="section">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-ocean-700">Customers</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Realistic review flow after completed work</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featured[0].reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-bold uppercase text-clean-700">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900">Useful answers before booking</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <div key={question} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="font-bold text-ink-900">{question}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-700">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900">
        <div className="section flex flex-col items-start justify-between gap-5 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Ready to make cleaning easier?</h2>
            <p className="mt-2 text-white/75">Start with an approved cleaner or apply to join the marketplace.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/cleaners" className="btn-primary justify-center">Book Cleaning</Link>
            <Link href="/register/cleaner" className="btn-secondary justify-center">Become a Cleaner</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-lg bg-clean-50 text-clean-700">{icon}</div>
      <h3 className="mt-4 text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-700">{body}</p>
    </div>
  );
}

function PriceCard({ title, price, body }: { title: string; price: string; body: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <h3 className="font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-coral-700">{price}</p>
      <p className="mt-3 text-sm leading-6 text-ink-700">{body}</p>
    </div>
  );
}

function TrustRow({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <div className="flex gap-4 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-ocean-50 text-ocean-700">{icon}</div>
      <div>
        <h3 className="font-bold text-ink-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-ink-700">{body}</p>
      </div>
    </div>
  );
}
