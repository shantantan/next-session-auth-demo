"use client";

import { useRegisterForm } from "@/components/Register.hook";
import { Input } from "@/components/Input";
import { Submit } from "@/components/Submit";

export const RegisterForm = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    action,
    isPending,
    formErrors,
  } = useRegisterForm();

  return (
    <form action={action} className="text-sm">
      {formErrors.form && (
        <div className="mb-6 p-3 border border-red-400 rounded">
          <p className="text-red-600">{formErrors.form}</p>
        </div>
      )}

      <div className="space-y-6">
        <Input
          id="name"
          name="name"
          type="name"
          label="ユーザーネーム"
          value={name}
          setValue={setName}
          fieldError={formErrors.name}
        />

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
        <Submit title="登録する" isPending={isPending} />
      </div>
    </form>
  );
};
