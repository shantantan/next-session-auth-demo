"use client";

import { useActionState, useEffect, useState } from "react";
import { registerAction } from "@/lib/auth";

export const useRegisterForm = () => {
  const [state, action, isPending] = useActionState(registerAction, undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setFormError("");
    setFieldErrors({ name: "", email: "", password: "" });

    if (!state) {
      return;
    }

    if (state.form) {
      const message = state.form;
      setFormError(message);
    }

    if (state.name) {
      const message = state.name[0];
      setFieldErrors((prev) => ({ ...prev, name: message }));
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
    name,
    setName,
    email,
    setEmail,
    action,
    password,
    setPassword,
    isPending,
    formError,
    fieldErrors,
  };
};
