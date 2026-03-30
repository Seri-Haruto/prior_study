import Link from "next/link";
import { CheckCircle2, Mail, Smile, Bell, UserRound, Hash } from "lucide-react";

type ResultPageProps = {
    searchParams: Promise<{
        userId?: string;
        name?: string;
        age?: string;
        email?: string;
        nickname?: string;
        receiveNewsletter?: string;
    }>;
};

export default async function ResultPage({ searchParams }: ResultPageProps) {
    const params = await searchParams;

    const userId = params.userId ?? "";
    const name = params.name ?? "未設定";
    const age = params.age ?? "未設定";
    const email = params.email ?? "";
    const nickname = params.nickname ?? "";
    const receiveNewsletter = params.receiveNewsletter === "true";

    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-100 px-4 py-12">
        <div className="mx-auto max-w-3xl">
            <section className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-xl sm:p-10">
            <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>

                <p className="mt-6 text-sm font-semibold text-emerald-600">
                REGISTRATION COMPLETED
                </p>
                <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                登録が完了しました
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                入力内容は正常に送信されました。以下が今回の登録結果です。
                </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Hash className="h-4 w-4" />
                    ユーザーID
                </p>
                <p className="break-all text-sm text-slate-600">{userId}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <UserRound className="h-4 w-4" />
                    名前
                </p>
                <p className="text-sm text-slate-600">{name}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-sm font-semibold text-slate-700">年齢</p>
                <p className="text-sm text-slate-600">{age}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Mail className="h-4 w-4" />
                    メールアドレス
                </p>
                <p className="text-sm text-slate-600">
                    {email || "未登録（optional）"}
                </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Smile className="h-4 w-4" />
                    ニックネーム
                </p>
                <p className="text-sm text-slate-600">
                    {nickname || "未登録（NULL）"}
                </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Bell className="h-4 w-4" />
                    お知らせ受信
                </p>
                <p className="text-sm text-slate-600">
                    {receiveNewsletter ? "受け取る" : "受け取らない"}
                </p>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                href="/signup"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                もう一度登録する
                </Link>

                <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                ホームに戻る
                </Link>
            </div>
            </section>
        </div>
        </main>
    );
}