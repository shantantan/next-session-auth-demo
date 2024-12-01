import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-xl font-bold">ログイン</h1>

      <div className="mt-10">
        <LoginForm />
      </div>

      <div className="mt-16">
        <p className="text-sm">
          アカウントをお持ちですか？
          <Link href="/register" className="ml-2 text-blue-800 underline">
            ユーザー登録
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
