"use client";

import { useActionState, useEffect, useState } from "react";
import { loginAction } from "@/lib/auth";

const fieldNames = ["email", "password"];
const initialErrors: Record<string, string> = {
  form: "",
  ...fieldNames.reduce((acc: Record<string, string>, crr: string) => {
    acc[crr] = "";
    return acc;
  }, {}),
};

export const useLoginForm = () => {
  const [state, action, isPending] = useActionState(loginAction, undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState(initialErrors);

  useEffect(() => {
    setFormErrors(initialErrors);

    if (!state) {
      return;
    }

    type Key = keyof typeof state;
    const keys: Key[] = Object.keys(initialErrors) as Key[];

    for (const key of keys) {
      if (state[key]) {
        const message = key === "form" ? state[key] : state[key][0];
        setFormErrors((prev) => ({ ...prev, [key]: message }));
      }
    }
  }, [state]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    action,
    isPending,
    formErrors,
  };
};
