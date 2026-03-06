"use server"

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Simulated newsletter subscription action
export async function subscribe(prevState: { ok: boolean; message: string }, formData: FormData) {
  await new Promise((r) => setTimeout(r, 700))

  const email = String(formData.get("email") || "").trim()
  if (!validateEmail(email)) {
    return { ok: false, message: "Please enter a valid email address." }
  }

  // In a real app, store email in your database or email provider list.
  return { ok: true, message: `Thanks for subscribing, ${email}!` }
}
