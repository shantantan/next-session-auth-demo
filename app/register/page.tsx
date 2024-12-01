import Link from "next/link";
import { RegisterForm } from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-xl font-bold">ユーザー登録</h1>

      <div className="mt-10">
        <RegisterForm />
      </div>

      <div className="mt-16">
        <p className="text-sm">
          既にアカウントをお持ちですか？
          <Link href="/login" className="ml-2 text-blue-800 underline">
            ログイン
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
