"use client";

import { useLoginForm } from "@/components/LoginForm.hook";
import { Input } from "@/components/Input";
import { Submit } from "@/components/Submit";

export const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    action,
    isPending,
    formErrors,
  } = useLoginForm();

  return (
    <form action={action} className="text-sm">
      {formErrors.form && (
        <div className="mb-6 p-3 border border-red-400 rounded">
          <p className="text-red-600">{formErrors.form}</p>
        </div>
      )}

      <div className="space-y-6">
        <Input
          id="email"
          name="email"
          type="email"
          label="メールアドレス"
          value={email}
          setValue={setEmail}
          fieldError={formErrors.email}
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="パスワード"
          value={password}
          setValue={setPassword}
          fieldError={formErrors.password}
        />
      </div>

      <div className="mt-8">
        <Submit title="ログイン" isPending={isPending} />
      </div>
    </form>
  );
};
