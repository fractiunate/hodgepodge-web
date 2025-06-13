import { LoginForm } from "@/components/login-form"
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 bg-background min-h-svh md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
