"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { subscribe } from "@/app/subscription-action"

type State = { ok: boolean; message: string }

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState<State, FormData>(subscribe, {
    ok: false,
    message: "",
  })

  return (
    <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        aria-label="Email address"
        required
        className="flex-1"
      />
      <Button type="submit" disabled={pending} className="bg-yellow-400 text-black hover:bg-yellow-300">
        {pending ? "Submitting..." : "Subscribe"}
      </Button>
      {state?.message ? (
        <p role="status" className={`w-full text-center text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>
          {state.message}
        </p>
      ) : null}
    </form>
  )
}
