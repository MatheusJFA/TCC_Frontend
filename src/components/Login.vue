<template>
	<router-view name="/login">
		<loading :active="isLoading" :can-cancel="false" :is-full-page="true" />

		<div class="p-6 sm:p-16">
			<h2 class="text-2xl text-green-900 font-bold">
				Welcome back </h2>
			<small>
				Access your account using your registered email </small>
			<form action="#" class="space-y-8 mt-5">
				<div class="space-y-2">
					<label for="email" class="text-gray-700">E-mail:</label>
					<input type="email" name="email" v-model="state.email.value" id="email" class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    					focus:ring-2 focus:ring-green-300 focus:outline-none
    					invalid:ring-2 invalid:ring-red-400">
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label for="pwd" class="text-gray-700">Password:</label>
						<button class="p-2 -mr-2" type="reset">
							<router-link to="recovery">
								<span class="text-sm  text-green-800 font-semibold">Forgot your password ?</span>
							</router-link>
						</button>
					</div>
					<input type="password" name="pwd" id="pwd" v-model="state.password.value" class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                        focus:ring-2 focus:ring-green-300 focus:outline-none
                                        invalid:ring-2 invalid:ring-red-400">
				</div>

				<button @click="login" type="button" class="w-full py-3 px-6 rounded-md bg-leafgreen-700 hover:bg-leafgreen-900
                                    focus:bg-leafgreen-800 active:bg-leafgreen-600">
					<span class="text-white">Log in</span>
				</button>

				<p class="border-t pt-6 text-sm text-green-800">
					Don't have an account?
					<router-link to="/register" class="text-green-600">
						<a href="#">Register</a>
					</router-link>
				</p>
			</form>
		</div>
	</router-view>
</template>

<script lang="ts">
import { useUserStore } from "../store/user"
import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { validEmail, validPassword } from "../utils/validator";

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default defineComponent({
	components: {
		Loading
	},
	setup() {
		const { t } = useI18n();
		const toast = useToast();
		const userStore = useUserStore();

		let isLoading = ref(false);

		const state = reactive({
			email: {
				value: "",
				errorMessage: ""
			},
			password: {
				value: "",
				errorMessage: ""
			}
		});

		function cleanErrors() {
			toast.clear();
			state.email.errorMessage = "";
			state.password.errorMessage = "";
		}

		async function login() {
			try {
				cleanErrors();
				validateFields();

				if (state.email.errorMessage !== "" ||
					state.password.errorMessage !== "") 
						return false;

				isLoading.value = true;
				await userStore.login(state.email.value, state.password.value)
					.then(() => {
						toast.success(t("SUCCESS.LOGIN"));
						isLoading.value = false;
					});
			} catch (error: any) {
				isLoading.value = false;
				toast.clear();
				toast.error(error.response.data?.message || t("ERROR.HTTP.SERVER_ERROR"));
			}
		}


		function validateFields() {
			if (state.email.value === "" || !validEmail) {
				state.email.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "E-mail" });
				toast.error(state.email.errorMessage);
				isLoading.value = false;
			}

			if (state.password.value === "" || !validPassword) {
				state.email.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Password" });
				toast.error(state.email.errorMessage);
				isLoading.value = false;
			}
		}

		onMounted(() => {
			localStorage.removeItem("refreshToken");
			localStorage.removeItem("accessToken");
		});

		return {
			login,
			state,
			isLoading,
		}
	},
});
</script>

<style>

</style>
