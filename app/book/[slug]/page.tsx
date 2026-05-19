import { notFound } from "next/navigation";
import { BookingForm } from "@/components/BookingForm";
import { cleaners } from "@/lib/mock-data";
import { getCleanerBySlug } from "@/lib/utils";

export function generateStaticParams() {
  return cleaners.map((cleaner) => ({ slug: cleaner.slug }));
}

export default async function BookingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cleaner = getCleanerBySlug(slug);

  if (!cleaner || cleaner.status !== "approved") {
    notFound();
  }

  return (
    <main className="bg-zinc-50">
      <div className="section">
        <BookingForm cleaner={cleaner} />
      </div>
    </main>
  );
}
