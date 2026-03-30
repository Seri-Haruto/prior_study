"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import type { CheckedState } from "@radix-ui/react-checkbox";
import {
    User,
    Cake,
    Mail,
    Smile,
    ShieldCheck,
    Bell,
} from "lucide-react";

import { signupSchema } from "@/lib/validators/signup";
import type { SignupResponse } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type SignupFormInput = z.input<typeof signupSchema>;

export default function SignupForm() {
    const router = useRouter();
    const [serverMessage, setServerMessage] = useState<string>("");

    const {
        register,
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormInput>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
        name: "",
        age: undefined,
        email: "",
        nickname: "",
        agreeToTerms: false,
        receiveNewsletter: false,
        },
    });

    const onSubmit = async (values: SignupFormInput) => {
        setServerMessage("");

        const payload = {
        ...values,
        email: values.email === "" ? undefined : values.email,
        nickname: values.nickname === "" ? null : values.nickname,
        };

        try {
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const json: SignupResponse = await response.json();

        if (!response.ok || !json.success) {
            setServerMessage(json.message);
            return;
        }

        const params = new URLSearchParams({
            userId: json.userId,
            name: json.profile.name,
            age: String(json.profile.age),
            email: json.profile.email ?? "",
            nickname: json.profile.nickname ?? "",
            receiveNewsletter: String(json.profile.receiveNewsletter),
        });

        router.push(`/result?${params.toString()}`);
        } catch (error: unknown) {
        console.error(error);
        setServerMessage("通信に失敗しました。時間をおいて再度お試しください。");
        }
    };

    return (
        <section className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur sm:p-10">
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            会員登録フォーム
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
            必須項目を入力して登録してください。入力内容は送信前に検証され、
            サーバー側でも再度バリデーションされます。
            </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="name">名前</Label>
                <div className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                    id="name"
                    type="text"
                    placeholder="芹沢 暖人"
                    className="pl-11"
                    {...register("name")}
                />
                </div>
                {errors.name && (
                <p className="text-sm font-medium text-rose-500">
                    {errors.name.message}
                </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="age">年齢</Label>
                <div className="relative">
                <Cake className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                    id="age"
                    type="number"
                    placeholder="20"
                    className="pl-11"
                    {...register("age")}
                />
                </div>
                {errors.age && (
                <p className="text-sm font-medium text-rose-500">
                    {errors.age.message}
                </p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="nickname">ニックネーム</Label>
                <div className="relative">
                <Smile className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                    id="nickname"
                    type="text"
                    placeholder="せり"
                    className="pl-11"
                    {...register("nickname")}
                />
                </div>
                <p className="text-xs text-slate-500">
                未入力の場合は null として送信されます。（nullable）
                </p>
                {errors.nickname && (
                <p className="text-sm font-medium text-rose-500">
                    {errors.nickname.message}
                </p>
                )}
            </div>

            <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">メールアドレス（任意 / optional）</Label>
                <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                    id="email"
                    type="email"
                    placeholder="seri@example.com"
                    className="pl-11"
                    {...register("email")}
                />
                </div>
                {errors.email && (
                <p className="text-sm font-medium text-rose-500">
                    {errors.email.message}
                </p>
                )}
            </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-4 text-sm font-semibold text-slate-700">
                設定オプション
            </p>

            <div className="space-y-4">
                <Controller
                name="agreeToTerms"
                control={control}
                render={({ field }) => (
                    <div className="flex items-start gap-3">
                    <Checkbox
                        id="agreeToTerms"
                        checked={field.value}
                        onCheckedChange={(checked: CheckedState) =>
                        field.onChange(checked === true)
                        }
                    />
                    <div className="space-y-1">
                        <Label
                        htmlFor="agreeToTerms"
                        className="flex cursor-pointer items-center gap-2"
                        >
                        <ShieldCheck className="h-4 w-4 text-slate-500" />
                        利用規約に同意する
                        </Label>
                        <p className="text-xs text-slate-500">
                        登録には利用規約への同意が必要です。
                        </p>
                    </div>
                    </div>
                )}
                />
                {errors.agreeToTerms && (
                <p className="text-sm font-medium text-rose-500">
                    {errors.agreeToTerms.message}
                </p>
                )}

                <Controller
                name="receiveNewsletter"
                control={control}
                render={({ field }) => (
                    <div className="flex items-start gap-3">
                    <Checkbox
                        id="receiveNewsletter"
                        checked={field.value}
                        onCheckedChange={(checked: CheckedState) =>
                        field.onChange(checked === true)
                        }
                    />
                    <div className="space-y-1">
                        <Label
                        htmlFor="receiveNewsletter"
                        className="flex cursor-pointer items-center gap-2"
                        >
                        <Bell className="h-4 w-4 text-slate-500" />
                        お知らせを受け取る
                        </Label>
                        <p className="text-xs text-slate-500">
                        新機能や更新情報をメールで受け取れます。
                        </p>
                    </div>
                    </div>
                )}
                />
            </div>
            </div>

            {serverMessage && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
                {serverMessage}
            </div>
            )}

            <div className="pt-2">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "送信中..." : "登録する"}
            </Button>
            </div>
        </form>
        </section>
    );
}