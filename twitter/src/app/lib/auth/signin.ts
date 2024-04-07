import axiosInstance from "@/app/lib/utils";

export const registerUser = async (formData: FormData) => {
    const response = await axiosInstance.post(
        "/auth/register",
        formData
    );
    return response;
}

export const loginUser = async (formData: FormData) => {
    const response = await axiosInstance.post(
        "/auth/login",
        formData
    );
    return response;
}