import { createHttpClient } from "@react-workshop/http-client";

export const axios = createHttpClient({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json"
    }
});