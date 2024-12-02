"use client";

interface Props {
  title: string;
  isPending: boolean;
}

export const Submit = ({ title, isPending }: Props) => {
  return (
    <button
      type="submit"
      disabled={isPending}
      className="px-3 py-1.5 border border-slate-600 rounded-sm font-medium disabled:opacity-50"
    >
      {title}
    </button>
  );
};
