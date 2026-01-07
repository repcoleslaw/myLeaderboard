"use server"

import { redirect } from "next/navigation"
import { createSupabaseServerClient } from "../lib/supabase/server"

export async function signInWithEmail(formData: FormData) {
  const email = String(formData.get("email") || "").trim()
  if (!email) return

  const supabase = await createSupabaseServerClient()

  // Supabase will email a magic link that returns to /api/auth/callback
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/api/auth/callback`,
    },
  })

  if (error) throw new Error(error.message)

  redirect("/login?sent=1")
}

export async function signOut() {
  const supabase = await createSupabaseServerClient()
  await supabase.auth.signOut()
  redirect("/login")
}
