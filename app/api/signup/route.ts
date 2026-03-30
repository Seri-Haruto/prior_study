import { NextResponse } from "next/server";
import { signupSchema } from "@/lib/validators/signup";
import type {
    SignupErrorResponse,
    SignupSuccessResponse,
} from "@/types/api";

function generateUserId(): string {
    return crypto.randomUUID();
}

export async function POST(request: Request) {
    try {
        const rawData: unknown = await request.json();

        const parsedResult = signupSchema.safeParse(rawData);

        if (!parsedResult.success) {
        const response: SignupErrorResponse = {
            success: false,
            message: "入力内容に誤りがあります",
            fieldErrors: parsedResult.error.flatten().fieldErrors,
        };

        return NextResponse.json(response, { status: 400 });
        }

        const validatedData = parsedResult.data;

        const response: SignupSuccessResponse = {
        success: true,
        message: "登録に成功しました",
        userId: generateUserId(),
        profile: {
            name: validatedData.name,
            age: validatedData.age,
            email: validatedData.email,
            nickname: validatedData.nickname,
            receiveNewsletter: validatedData.receiveNewsletter,
        },
        };

        return NextResponse.json(response, { status: 200 });
    } catch (error: unknown) {
        const response: SignupErrorResponse = {
        success: false,
        message: "サーバーエラーが発生しました",
        };

        if (error instanceof SyntaxError) {
        response.message = "不正なJSON形式です";
        return NextResponse.json(response, { status: 400 });
        }

        return NextResponse.json(response, { status: 500 });
    }
}