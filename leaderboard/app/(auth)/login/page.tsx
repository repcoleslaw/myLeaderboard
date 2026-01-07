import { signInWithEmail } from "../actions"

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md rounded-lg border bg-white p-6 shadow-sm">
      <h1 className="text-xl font-semibold">Sign in</h1>
      <p className="mt-2 text-sm text-gray-600">
        Use email magic link (simple MVP).
      </p>

      <form action={signInWithEmail} className="mt-6 space-y-3">
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded border px-3 py-2"
        />
        <button className="w-full rounded bg-black px-3 py-2 text-white">
          Send magic link
        </button>
      </form>
    </div>
  )
}
