import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const generateUserId = (): string => {
    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
    const number = Math.floor(Math.random() * 1_000_000)
        .toString()
        .padStart(6, "0");

    return `${letter}${number}`;
};