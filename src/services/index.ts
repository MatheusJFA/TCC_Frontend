import axios, { AxiosRequestConfig } from "axios";
import AuthorizationService from "./auth.service";
import ClientService from './client.service';
import i18n from "../i18n";
import router from "../router"


const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
    try {
        let token;
        const route = router.currentRoute.value;

        const alreadySetAuthorization = config.headers?.authorization;
        
        if (alreadySetAuthorization) {
            token = alreadySetAuthorization;
        } else {
            token = localStorage.getItem("refreshToken") || "";
            config.headers!.Authorization = `Bearer ${token}`;
        }

        if (!token && route.meta.requiresAuth) throw new Error(i18n.global.t("ERROR.TOKEN.NOT_FOUND"));

        return config;
    } catch (error) {
        throw error;
    }
});

export default {
    authorization: AuthorizationService(httpClient),
    client: ClientService(httpClient)
}
