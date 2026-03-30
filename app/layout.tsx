import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
    title: "Typed Signup Form",
    description: "型安全な会員登録フォーム",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="ja">
        <body>{children}</body>
        </html>
    );
}