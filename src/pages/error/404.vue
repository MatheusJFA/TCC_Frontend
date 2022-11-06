<template>
    <div class="flex h-screen bg-white">
        <div class="m-auto border-lg border-gray-500">
            <div class="flex flex-row">
                <div class="flex-col">
                    <h1 class="text-gray-500 text-7xl">404</h1>
                </div>

                <h1 class="px-3 text-gray-500 text-6xl">|</h1>

                <div class="flex-col">
                    <div class="flex-col">
                        <h1 class="text-gray-500 text-4xl font-bold font-PoiretOne">{{ t("ERROR.HTTP.NOT_FOUND") }}
                        </h1>
                        <p class="text-gray-500 text-2xl font-medium font-PoiretOne">{{ t("ERROR.HTTP.NOT_FOUND_MESSAGE") }}</p>
                    </div>

                    <div class="flex-col my-5">
                        <router-link :to="{ name: 'home' }" class="text-white font-bold bg-gray-500 rounded p-2">
                            {{ t("BACK_TO_HOME") }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
    setup() {
        const { t, locale } = useI18n();

        onBeforeMount(async () => {
            const language = window.localStorage.getItem("language") || "en";
            locale.value = language;
        });

        return { t }
    },
});
</script>

<style>
</style>