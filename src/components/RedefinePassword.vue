<template>
    <div class="p-6 sm:p-16">

        <loading :active="isLoading" :can-cancel="false" :is-full-page="true" />

        <h2 class="text-2xl text-green-900 font-bold">
            Input your new password </h2>
        <h3>Insert a new password for your account</h3>

        <form action="#" class="space-y-8 mt-5">
            <div class="space-y-2">
                <label for="recovery-email" class="text-gray-700">Password:</label>
                <input type="password" v-model="state.password.value" name="recovery-email" id="recovery-email" class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-green-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400">
            </div>
            <div class="flex flex-col md:flex-row gap-2">
                <button type="button" @click="backLogin" class="w-full md:w-2/4 py-3 px-6 rounded-md border border-gray-200 bg-white hover:bg-slate-50
                                    focus:bg-slate-300 active:bg-leafgreen-600">
                    <span class="text-black-1000 font-semibold">Back</span>
                </button>

                <button type="button" @click="validate" class="w-full md:w-2/4 py-3 px-6 rounded-md bg-leafgreen-700 hover:bg-leafgreen-900
                                    focus:bg-leafgreen-800 active:bg-leafgreen-600">
                    <span class="text-white font-semibold">Submit</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import { useToast } from "vue-toastification"
import { useUserStore } from "../store/user"
import { useRoute, useRouter } from "vue-router"
import { useI18n } from 'vue-i18n';
import { ref } from "vue";
import { validPassword } from "../utils/validator";

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default defineComponent({
    components: {
        Loading
    },
    setup() {
        const { t } = useI18n();
        const router = useRouter()
        const route = useRoute();
        const toast = useToast()
        const userStore = useUserStore()

        let isLoading = ref(false);

        const state = reactive({
            password: {
                value: "",
                errorMessage: ""
            }
        });

        function cleanErrors() {
            toast.clear();
            state.password.errorMessage = "";
        }

        async function validate() {
            try {
                cleanErrors();
                validateFields();

                if (state.password.errorMessage) return false;

                isLoading.value = true;

                const token = route.query.token as string;
                await userStore.resetPasswordAccount(state.password.value, token).then(() => {
                    toast.success(t("SUCCESS.REGISTER.RESET_PASSWORD"));
                    isLoading.value = false;
                });
            } catch (error: any) {
                isLoading.value = false;
                toast.clear();
                toast.error(error.response.data?.message|| t("ERROR.HTTP.SERVER_ERROR"));
            }
        }

        function validateFields() {
            if (state.password.value === "" || !validPassword) {
                state.password.errorMessage = t("ERROR.FIELD.REQUIRED", { field: "E-mail" });
                toast.error(state.password.errorMessage);
                isLoading.value = false;
            }
        }

        const backLogin = () => {
            router.push("/login")
        }

        return {
            state,
            validate,
            isLoading,
            backLogin,
        }
    }
})

</script>
<style>

</style>
