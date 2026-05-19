import { SearchX } from "lucide-react";

export function EmptyState({
  title,
  body
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-zinc-100 text-ink-500">
        <SearchX size={22} aria-hidden />
      </div>
      <h3 className="mt-4 font-bold text-ink-900">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-ink-500">{body}</p>
    </div>
  );
}
