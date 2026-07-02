import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();
  console.log("[portal/layout] cookies present:", allCookies.map(c => `${c.name}=${c.value.slice(0, 40)}...`));

  const supabase = await createClient();
  const { data: { session }, error } = await supabase.auth.getSession();
  console.log("[portal/layout] getSession result:", { session: session ? `exists (user: ${session.user.email})` : null, error });

  if (!session) {
    redirect("/login?redirect=/portal");
  }

  return <>{children}</>;
}
