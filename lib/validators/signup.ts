import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "名前は2文字以上で入力してください")
    .max(30, "名前は30文字以内で入力してください"),

age: z.coerce.number({
  required_error: "年齢は必須です",
  invalid_type_error: "数値を入力してください",
})
  .int("年齢は整数で入力してください")
  .min(18, "18以上で入力してください"),

  email: z
    .string()
    .email("正しいメールアドレスを入力してください")
    .optional()
    .or(z.literal("")),

  nickname: z
    .string()
    .max(20, "ニックネームは20文字以内で入力してください")
    .nullable(),

  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "利用規約への同意が必要です",
  }),

  receiveNewsletter: z.boolean(),
});

export type SignupFormValues = z.infer<typeof signupSchema>;