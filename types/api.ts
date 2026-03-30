export interface SignupSuccessResponse {
    success: true;
    message: string;
    userId: string;
    profile: {
        name: string;
        age: number;
        email?: string;
        nickname: string | null;
        receiveNewsletter: boolean;
    };
    }

export interface SignupErrorResponse {
    success: false;
    message: string;
    fieldErrors?: Record<string, string[]>;
}

export type SignupResponse = SignupSuccessResponse | SignupErrorResponse;