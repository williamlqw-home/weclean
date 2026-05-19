import { CheckCircle2, CircleAlert } from "lucide-react";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export default function SupabaseCheckPage() {
  const configured = hasSupabaseEnv();

  return (
    <main className="bg-zinc-50">
      <div className="section">
        <section className="mx-auto max-w-2xl rounded-lg border border-zinc-200 bg-white p-6 shadow-soft">
          <div className="flex items-start gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-clean-50 text-clean-700">
              {configured ? <CheckCircle2 size={22} aria-hidden /> : <CircleAlert size={22} aria-hidden />}
            </span>
            <div>
              <p className="text-sm font-bold uppercase text-clean-700">Supabase setup</p>
              <h1 className="mt-1 text-2xl font-bold text-ink-900">
                {configured ? "Environment variables found" : "Environment variables needed"}
              </h1>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                {configured
                  ? "The project can now create Supabase browser and server clients. The next step is replacing mock auth with Supabase Auth actions."
                  : "Copy .env.local.example to .env.local and fill in your Supabase project URL and publishable key."}
              </p>
              <div className="mt-5 rounded-lg bg-zinc-50 p-4 text-sm text-ink-700">
                <p className="font-bold text-ink-900">Expected variables</p>
                <p className="mt-2 font-mono">NEXT_PUBLIC_SUPABASE_URL</p>
                <p className="font-mono">NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
