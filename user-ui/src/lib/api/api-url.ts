export const getApiUrl = async () => {
    return import.meta.env.VITE_API_URL || "http://localhost:8080";
}