import { AxiosInstance } from "axios";
import { Buffer } from "buffer";

export default (httpClient: AxiosInstance) => ({
    login: async (email: string, password: string) => {
        const token = Buffer.from(`${email}:${password}`).toString("base64");
        const response = await httpClient.post("/auth/login", {}, {
            headers: {
                authorization: `Basic ${token}`
            },
        });

        return response.data;
    },

    logout: async (token: string) => {
        const response = await httpClient.post("/auth/logout", {}, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        return response.data;
    },

    sendContact: async (name: string, email: string, message: string) => {
        const response = await httpClient.post("/auth/send-Contact", {
            name,
            email,
            message
        });
        return response.data;
    },

    sendVerificationEmail: async (email: string) => {
        const response = await httpClient.post("/auth/send-verification-email", {
            email
        });
        return response.data;
    },

    verifyEmail: async (token: string) => {
        const response = await httpClient.post("/auth/verify-email", {
            token
        });
        return response.data;
    },

    sendForgetPasswordEmail: async (email: string) => {
        const response = await httpClient.post("/auth/send-forgot-password-email", {
            email
        });

        return response.data;
    },


    resetPassword: async (password: string, token: string) => {
        const encodedPassword = Buffer.from(`${password}`).toString("base64");

        const response = await httpClient.post("/auth/reset-password", { token },
            {
                headers: {
                    authorization: `Bearer ${encodedPassword}`
                },
            });

        return response.data;
    },
});
