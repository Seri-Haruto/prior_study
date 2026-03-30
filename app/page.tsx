import Link from "next/link";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
            <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white/80 shadow-xl backdrop-blur">
            <div className="grid gap-8 px-8 py-12 sm:px-12 lg:grid-cols-2 lg:items-center">
                <div>
                <p className="mb-3 inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-600">
                    内定者インターン事前課題
                </p>

                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    型安全な
                    <br />
                    会員登録フォーム
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    Next.js，TypeScript，React Hook Form，zod を用いて、
                    型安全なフォームを実装しました。optional と nullable の違いや，
                    クライアント側・サーバー側のバリデーション分担を意識しています。
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                    href="/signup"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                    >
                    フォームを試す
                    </Link>

                </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-inner">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-800">
                    このアプリで確認できること
                    </p>

                    <div className="mt-5 space-y-4">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm font-medium text-slate-900">型安全</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                        フォーム入力から API レスポンスまで，型を意識して安全に扱います。
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm font-medium text-slate-900">
                        バリデーション
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                        zod によるルール定義を行い，クライアント側・サーバー側で再利用しています。
                        </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-sm font-medium text-slate-900">
                        optional / nullable
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                        メールアドレスとニックネームで違いを実装しています。
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section id="features" className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">01</p>
                <h2 className="mt-3 text-lg font-bold text-slate-900">
                フロント側で検証
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                React Hook Form と zodResolver を用いて，入力直後にエラーを表示できます。
                </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">02</p>
                <h2 className="mt-3 text-lg font-bold text-slate-900">
                サーバー側でも再検証
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                API Route でも同じ schema を使って検証し，不正な入力を受け取らない設計にしています。
                </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">03</p>
                <h2 className="mt-3 text-lg font-bold text-slate-900">
                コンポーネント分割
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                UI・バリデーション・API・型定義を分離し，読みやすく保守しやすい構成にしています。なお，any は使用していません
                </p>
            </div>
            </section>
        </div>
        </main>
    );
}