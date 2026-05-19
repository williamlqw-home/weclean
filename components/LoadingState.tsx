export function LoadingState({ label = "Loading" }: { label?: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-clean-500" />
        <span className="text-sm font-semibold text-ink-700">{label}</span>
      </div>
      <div className="mt-4 grid gap-3">
        <div className="h-3 rounded-md bg-zinc-100" />
        <div className="h-3 w-4/5 rounded-md bg-zinc-100" />
        <div className="h-3 w-2/3 rounded-md bg-zinc-100" />
      </div>
    </div>
  );
}
