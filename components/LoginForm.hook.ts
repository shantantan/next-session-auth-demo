"use client";

import { useActionState, useEffect, useState } from "react";
import { loginAction } from "@/lib/auth";

export const useLoginForm = () => {
  const [state, action, isPending] = useActionState(loginAction, undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormError("");
    setFieldErrors({ email: "", password: "" });

    if (!state) {
      return;
    }

    if (state.form) {
      const message = state.form;
      setFormError(message);
    }

    if (state.email) {
      const message = state.email[0];
      setFieldErrors((prev) => ({ ...prev, email: message }));
    }

    if (state.password) {
      const message = state.password[0];
      setFieldErrors((prev) => ({ ...prev, password: message }));
    }
  }, [state]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    action,
    isPending,
    formError,
    fieldErrors,
  };
};
