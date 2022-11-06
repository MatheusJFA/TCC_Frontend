<template>
    <div class="p-6 sm:p-16">

        <loading :active="isLoading" :can-cancel="false" :is-full-page="true" />

        <h2 class="text-2xl text-green-900 font-bold">
            Account successfully validade </h2>
        <h3>Now you can Login our system, We hope you enjoy the application</h3>

        <form action="#">
            <div class="flex flex-col md:flex-row gap-2 mt-4">
                <button type="button" @click="backLogin" class="w-full py-3 px-6 rounded-md bg-leafgreen-700 hover:bg-leafgreen-900
                                    focus:bg-leafgreen-800 active:bg-leafgreen-600">
                    <span class="text-white font-semibold">Back</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import { useToast } from "vue-toastification"
import { useUserStore } from "../store/user"
import { useRoute, useRouter } from "vue-router"
import { useI18n } from 'vue-i18n';
import { ref } from "vue";

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

        async function validate() {
            try {
                isLoading.value = true;
                const token = route.query.token as string;
                await userStore.verifyAccountEmail(token);
                toast.success(t("SUCCESS.REGISTER.EMAIL_VERIFIED"));
                isLoading.value = false;
            } catch (error) {
                isLoading.value = false;
                toast.clear();
                toast.error(t("ERROR.HTTP.SERVER_ERROR"));
            }
        }

        onMounted(async () => {
            await validate();
        });

        const backLogin = () => {
            router.push("/login")
        }

        return {
            isLoading,
            backLogin,
        }
    }
})

</script>

<style>
</style>
