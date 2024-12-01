import { z } from "zod";

const maxNameSize = 8;
const maxEmailSize = 256;
const minPasswordSize = 4;
const maxPasswordSize = 8;

const nameSchema = z
  .string({ required_error: "ユーザーネームを入力してください" })
  .max(maxNameSize, { message: `${maxNameSize}文字以下で入力してください` });

const emailSchema = z
  .string({ required_error: "メールアドレスを入力してください" })
  .max(maxEmailSize, { message: "メールアドレスを入力してください" })
  .email("有効なメールアドレスを入力してください");

const passwordSchema = z
  .string({
    required_error: "パスワードを入力してください",
  })
  .min(minPasswordSize, {
    message: `${minPasswordSize}文字以上で入力してください`,
  })
  .max(maxPasswordSize, {
    message: `${maxPasswordSize}文字以下で入力してください`,
  })
  .regex(/[a-z0-9]{4,8}/, {
    message: "使用できる文字は半角英小文字、半角数字のみです",
  });

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
