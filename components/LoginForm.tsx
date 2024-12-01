"use client";

import { useLoginForm } from "@/components/LoginForm.hook";
import { cn } from "@/lib/utils";

export const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    action,
    isPending,
    formError,
    fieldErrors,
  } = useLoginForm();

  return (
    <form action={action} className="text-sm">
      {formError && (
        <div className="mb-6 p-3 border border-red-400 rounded">
          <p className="text-red-600">{formError}</p>
        </div>
      )}

      <div className="flex flex-col gap-y-2">
        <label
          htmlFor="email"
          className={cn({ "text-red-600": fieldErrors.email })}
        >
          メールアドレス
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn("border border-border px-3 py-1.5 rounded-sm", {
            "outline-red-600 border-red-600 bg-red-50": fieldErrors.email,
          })}
        />
        {fieldErrors.email && (
          <p className="text-red-600">{fieldErrors.email}</p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-y-2">
        <label
          htmlFor="password"
          className={cn({ "text-red-600": fieldErrors.password })}
        >
          パスワード
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={cn("border border-border px-3 py-1.5 rounded-sm", {
            "outline-red-600 border-red-600 bg-red-50": fieldErrors.password,
          })}
        />
        {fieldErrors.password && (
          <p className="text-red-600">{fieldErrors.password}</p>
        )}
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isPending}
          className="px-3 py-1.5 border border-slate-600 rounded-sm font-medium disabled:opacity-50"
        >
          ログイン
        </button>
      </div>
    </form>
  );
};
