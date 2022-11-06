export { };

declare global {
    interface Window {
        stores: unknown;
    }

    interface ImportMetaEnv {
        VITE_BACKEND_URL: string;
        VITE_FRONTEND_URL: string;
        VITE_I18N_LOCALE: string;
        VITE_I18N_FALLBACK_LOCALE: string;
        VITE_RAPID_API: string;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

