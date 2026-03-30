# Typed Signup Form

Next.js / TypeScript / React Hook Form / zod を用いて作成した、型安全な会員登録フォームです。
内定者インターンの事前課題として作成しました。

---

## 概要

本アプリでは、型安全性を重視したフォーム設計を目的とし、以下の点を意識して実装しました。

* 型定義とバリデーションの一貫性
* フロントエンドとサーバー側の責務分離
* optional / nullable の違いの明確化
* UI・ロジック・型の分離設計

---

## 使用技術

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui（構成ベースで使用）
* React Hook Form
* zod
* Radix UI
* Lucide React

---


## 機能

* 会員登録フォーム
* バリデーション（zod）
* エラーメッセージ表示
* API送信
* 結果画面表示
* optional / nullable の確認

---

## 設計方針

### 1. 責務分離

* UI → `components/`
* バリデーション → `lib/validators/`
* API → `app/api/`
* 型 → `types/`

責務ごとにファイルを分離することで、可読性と保守性を向上させました。

---

### 2. 型安全なデータフロー

```txt
フォーム入力
→ zodで検証（フロント）
→ API送信
→ zodで再検証（サーバー）
→ 型付きレスポンス
```

フロント・バックエンドの両方で同一スキーマを利用しています。

---

## 技術選定基準

### Next.js

App Router により、画面とAPIを同一プロジェクトで管理できるため採用します。

### TypeScript

型安全な設計を実現するため必須として採用します。

### React Hook Form

フォーム状態管理をシンプルに行うため採用します。

### zod

バリデーションと型定義を統一できるため採用します。

### Tailwind CSS

スタイリングをコンポーネント内で完結させやすいため採用します。

### shadcn/ui

UI部品をベースにしつつ、カスタマイズ性が高いため採用。

---

## optional と nullable の違い

### optional（email）

* 未入力 → `undefined`
* 入力あり → `string`

### nullable（nickname）

* 未入力 → `null`
* 入力あり → `string`

フォーム送信時に以下のように変換しています。

```ts
email === "" → undefined
nickname === "" → null
```

---

## API設計

### エンドポイント

```txt
POST /api/signup
```

### レスポンス

```ts
type SignupResponse =
  | { success: true; userId: string }
  | { success: false; message: string }
```

Union型により、安全な分岐処理を実現しています。

---

## Client / Server の使い分け

* Client Component
  → フォーム入力（SignupForm）

* Server Component
  → ページ描画（page.tsx）

* API Route
  → サーバー処理（route.ts）

---

## TypeScriptのトランスパイル

TypeScriptはビルド時にJavaScriptへ変換されます。

そのため型情報は実行時には存在しないため、
zodを用いて実行時バリデーションを行っています。

---

## 詰まった点

* Tailwindが反映されない問題
  → CSS設定不足が原因

* shadcn/ui CLIが動作しない
  → 手動でコンポーネントを構築

* Zodのバージョン差異
  → required_error / error の違いで混乱

* App Routerの構造
  → `/result` が404になる問題

* 初めてTypeScriptなどを利用し，ライブラリや文法に苦戦

---

## 学んだこと

* 型安全は設計レベルで考える必要がある
* フロントとバックエンドでバリデーションを分ける重要性
* optional と nullable の違い
* コンポーネント分割の重要性
* TypeScriptの使用方法

---

## デプロイ

Vercelでデプロイしました。
以下にURLを添付します。
https://prior-study.vercel.app/
