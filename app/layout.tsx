import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
    title: "会員登録フォーム",
    description: "Type-safe signup form built with Next.js",
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