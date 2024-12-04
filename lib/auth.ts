"use server";

import { redirect } from "next/navigation";
import prisma from "@/prisma/db";
import bcrypt from "bcryptjs";
import { loginSchema, registerSchema } from "@/lib/schema";
import { removeSession, setSession } from "@/lib/session";

export const registerAction = async (
  prevState: unknown,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const validatedFields = registerSchema.safeParse({
    name: name ? name : undefined,
    email: email ? email : undefined,
    password: password ? password : undefined,
  });

  if (!validatedFields.success) {
    return {
      form: "",
      ...validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { name, email, password } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 8);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error(`Error register action: ${error}`);
    return {
      form: "ユーザー登録に失敗しました",
      name: "",
      email: "",
      password: "",
    };
  }

  redirect("/login");
};

export const loginAction = async (prevState: unknown, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const validatedFields = loginSchema.safeParse({
    email: email ? email : undefined,
    password: password ? password : undefined,
  });

  if (!validatedFields.success) {
    return {
      form: "",
      ...validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { email, password } = validatedFields.data;

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      throw new Error();
    }

    const isValidPassword = await bcrypt.compare(password, user?.password);

    if (!isValidPassword) {
      throw new Error();
    }

    await setSession({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    console.error(`Error login action: ${error}`);
    return {
      form: "メールアドレスまたはパスワードが正しくありません",
      email: "",
      password: "",
    };
  }

  redirect("/");
};

export const logoutAction = async () => {
  await removeSession();

  redirect("/login");
};
