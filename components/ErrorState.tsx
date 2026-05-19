import { AlertTriangle } from "lucide-react";

export function ErrorState({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-rose-200 bg-rose-50 p-5 text-rose-800">
      <div className="flex items-center gap-2 font-bold">
        <AlertTriangle size={18} aria-hidden />
        Something needs attention
      </div>
      <p className="mt-2 text-sm leading-6">{message}</p>
    </div>
  );
}
