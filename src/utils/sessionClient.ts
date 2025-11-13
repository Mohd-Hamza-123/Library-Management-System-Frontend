import { apiResponse } from "@/types/api"

export const getSession = async (): Promise<apiResponse> => {
    try {
        const response = await fetch("/api/session", { cache: "no-store" })
        const session = await response.json()
        return session
    } catch (error) {
        return {
            success: false,
            message: "Your are not logged in",
            error: error instanceof Error ? error.message : "unknown error"
        }
    }
}