import { getApiUrl } from "./api-url";

export const throwIfError = async (response : Response) => {
    if(!response.ok) {
        const error = await response.text();
        throw new Error(error);
    }
}