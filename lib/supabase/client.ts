import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "./env";

export function createClient() {
  const { publishableKey, supabaseUrl } = getSupabaseEnv();

  return createBrowserClient(supabaseUrl, publishableKey);
}
