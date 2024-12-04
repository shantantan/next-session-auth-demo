"use server";

import { cookies } from "next/headers";

export type Session = {
  id: number;
  name: string;
  email: string;
};

export const getSession = async (): Promise<Session | null> => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session");

  if (!session || !session.value) {
    return null;
  }

  return JSON.parse(session.value);
};

export const setSession = async (session: Session) => {
  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify(session));
};

export const removeSession = async () => {
  const sessionStore = await cookies();
  sessionStore.delete("session");
};
