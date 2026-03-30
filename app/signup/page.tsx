import SignupForm from "./SignupForm";

export default function SignupPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4 py-12">
        <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
            <p className="mb-3 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
                内定者インターン事前課題
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                型安全な会員登録フォーム
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Next.js・TypeScript・React Hook Form・zod を用いて，
                型安全なフォームを実装しました。optional / nullable の違いや，
                クライアント側・サーバー側のバリデーション分担も意識しています。
            </p>
            </div>

            <SignupForm />
        </div>
        </main>
    );
}