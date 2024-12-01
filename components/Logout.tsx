"use client";

import { logoutAction } from "@/lib/auth";

export const Logout = () => {
  return (
    <button
      onClick={() => logoutAction()}
      type="button"
      className="px-3 py-1.5 border border-slate-600 rounded-sm text-sm font-medium disabled:opacity-50"
    >
      ログアウト
    </button>
  );
};
