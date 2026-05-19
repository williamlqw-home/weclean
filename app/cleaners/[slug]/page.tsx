import { notFound } from "next/navigation";
import { CleanerProfile } from "@/components/CleanerProfile";
import { cleaners } from "@/lib/mock-data";
import { getCleanerBySlug } from "@/lib/utils";

export function generateStaticParams() {
  return cleaners.map((cleaner) => ({ slug: cleaner.slug }));
}

export default async function CleanerProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cleaner = getCleanerBySlug(slug);

  if (!cleaner || cleaner.status !== "approved") {
    notFound();
  }

  return (
    <main className="bg-zinc-50">
      <div className="section">
        <CleanerProfile cleaner={cleaner} />
      </div>
    </main>
  );
}
