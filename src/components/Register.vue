<template>
	<div class="p-6 sm:p-16">

		<loading :active="isLoading" :can-cancel="false" :is-full-page="true" />

		<h2 class="text-2xl text-green-900 font-bold">
			Enter your information </h2>
		<small>
			Complete the fields to register in our application </small>

		<form action="#">
			<div class="flex flex-col lg:flex-row gap-2">
				<div class="lg:w-8/12 md:w-full">
					<div class="mt-5">
						<label for="name-register" class="text-gray-700">Name:</label>
						<input type="text" name="name-register" id="name-register" v-model="state.name.value" class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-green-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400">
					</div>

					<div class="mt-3">
						<label for="email-register" class="text-gray-700">E-mail:</label>
						<input type="email" name="email-register" id="email-register" v-model="state.email.value" class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-green-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400">

					</div>
					<div class="mt-3">
						<label for="pwd-register" class="text-gray-700">Password:</label>
						<input type="password" name="pwd-register" id="pwd-register" v-model="state.password.value"
							class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-green-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400">

					</div>
					<div class="mt-3">
						<label for="pwdcheck-register" class="text-gray-700">Confirm password:</label>
						<input type="password" name="pwdcheck-register" id="pwdcheck-register"
							v-model="state.confirmPassword.value" class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-green-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400">
					</div>
				</div>
				<div class="lg:w-4/12 md:w-full">
					<div class="mt-5">
						<label for="name-user" class="text-gray-700">Birthdate:</label>
						<div class="flex">
							<input type="date" name="name-user" id="name-user" v-model="state.birthdate.value" class="w-10/12 px-4 py-3 data-register rounded-l-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-green-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400">
							<span
								class="img-input calendar-input w-2/12 bg-white rounded-r-md border border-r-gray-300 "></span>
						</div>
					</div>

					<div class="mt-3">
						<label for="sex-register" class="text-gray-700">Sex:</label>
						<select v-model="state.sex.value" class="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
									focus:ring-2 focus:ring-green-300 focus:outline-none
									invalid:ring-2 invalid:ring-red-400" name="sex-register" id="sex-register">
							<option selected disabled hidden :value="''">Select gender</option>
							<option v-for="sex in sexValues" :key="sex" :value="sex">{{ sex }}</option>
						</select>
					</div>

					<div class="mt-3">
						<label for="weight-register" class="text-gray-700">Weight:</label>
						<div class="flex">
							<input v-maska='["# kg", "#.# kg", "#.## kg", "##.## kg", "###.## kg"]'
								v-model="state.weigth.value" name="weight-register" id="weight-register" class="w-10/12 md:w-full px-4 py-3 rounded-l-md border border-gray-300 text-gray-600
										transition duration-300 focus:ring-2 focus:ring-green-300 focus:outline-none
										invalid:ring-2 invalid:ring-red-400">
							<span class="img-input weight-input w-2/12 bg-white rounded-r-md border
									border-r-gray-300 ">
							</span>
						</div>
					</div>
					<div class="mt-3">
						<label for="height-register" class="text-gray-700">Height:</label>
						<div class="flex">
							<input v-maska='["# m", "#.# m", "#.## m"]' v-model="state.heigth.value"
								name="height-register" id="height-register" class="block w-10/12 px-4 py-3 rounded-l-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-green-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400">
							<span class="img-input height-input w-2/12  bg-white rounded-r-md border
									border-r-gray-300 ">
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col md:flex-row gap-2 mt-4">
				<button type="button" @click="backHome" class="w-full md:w-2/4 py-3 px-6 rounded-md border border-gray-200 bg-white hover:bg-slate-50
                                    focus:bg-slate-300 active:bg-leafgreen-600">
					<span class="text-black-1000 font-semibold">Cancel</span>
				</button>

				<button type="button" @click="registerUser" class="w-full md:w-2/4 py-3 px-6 rounded-md bg-leafgreen-700 hover:bg-leafgreen-900
                                    focus:bg-leafgreen-800 active:bg-leafgreen-600">
					<span class="text-white font-semibold">Register</span>
				</button>
			</div>
		</form>
	</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "@vue/runtime-core";
import { useToast } from "vue-toastification"
import { useUserStore } from "../store/user"
import { useRouter } from "vue-router"
import { useI18n } from 'vue-i18n';
import { ref } from "vue";
import { maska } from "maska"
import { validEmail, validPassword } from "../utils/validator";

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default defineComponent({
	directives: {
		maska
	},
	components: {
		Loading
	},
	setup() {
		const { t } = useI18n();
		const router = useRouter()
		const toast = useToast()
		const userStore = useUserStore()

		let isLoading = ref(false);

		let sexValues = ref([]);

		let state = reactive({
			name: {
				value: "",
				errorMessage: ""
			},
			email: {
				value: "",
				errorMessage: ""
			},
			password: {
				value: "",
				errorMessage: ""
			},
			confirmPassword: {
				value: "",
				errorMessage: ""
			},
			birthdate: {
				value: "",
				errorMessage: ""
			},
			sex: {
				value: "",
				errorMessage: ""
			},
			helpers: [],
			weigth: {
				value: "0",
				errorMessage: ""
			},
			heigth: {
				value: "0",
				errorMessage: ""
			},
		})


		function cleanErrors() {
			toast.clear();
			state.name.errorMessage = "";
			state.email.errorMessage = "";
			state.password.errorMessage = "";
			state.confirmPassword.errorMessage = "";
			state.birthdate.errorMessage = "";
			state.sex.errorMessage = "";
			state.weigth.errorMessage = "";
			state.heigth.errorMessage = "";
		}

		function validate() {
			if (state.name.value === "" || state.name.value.length < 5) {
				state.name.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Name" });
				toast.error(state.name.errorMessage);
			}

			if (state.email.value === "" || !validEmail) {
				state.email.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "E-mail" });
				toast.error(state.email.errorMessage);
			}

			if (state.password.value === "" || !validPassword) {
				state.password.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Password" });
				toast.error(state.password.errorMessage);
			}

			if (state.confirmPassword.value === "") {
				state.confirmPassword.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Confirm Password" });
				toast.error(state.confirmPassword.errorMessage);
			}

			if (state.confirmPassword.value !== state.password.value) {
				state.confirmPassword.errorMessage = t("ERROR.USER.PASSWORD_NOT_MATCHING");
				toast.error(state.confirmPassword.errorMessage);
			}

			if (state.birthdate.value === "") {
				state.birthdate.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Birthdate" });
				toast.error(state.birthdate.errorMessage);
			}

			if (state.sex.value === "") {
				state.sex.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Sex" });
				toast.error(state.sex.errorMessage);
			}

			if (parseInt(state.weigth.value.replace(/([A-Za-z ])/g, "")) < 10 || parseInt(state.weigth.value.replace(/([A-Za-z ])/g, "")) > 600) {
				state.weigth.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Weight" });
				toast.error(state.weigth.errorMessage);
			}

			if (parseFloat(state.heigth.value.replace(/([A-Za-z ])/g, "")) < 0.10 || parseFloat(state.heigth.value.replace(/([A-Za-z ])/g, "")) > 3.50) {
				state.heigth.errorMessage = t("ERROR.FIELD.INVALID_OR_REQUIRED", { field: "Heigth" });
				toast.error(state.heigth.errorMessage);
			}

			isLoading.value = false;
		}

		function cleanState() {
			state.name.value = "";
			state.email.value = "";
			state.password.value = "";
			state.confirmPassword.value = "";
			state.birthdate.value = "";
			state.sex.value = "";
			state.weigth.value = "";
			state.heigth.value = "";
		}

		async function registerUser() {
			try {
				isLoading.value = true;

				cleanErrors();
				validate();

				if (
					state.name.errorMessage !== "" ||
					state.email.errorMessage !== "" ||
					state.password.errorMessage !== "" ||
					state.confirmPassword.errorMessage !== "" ||
					state.birthdate.errorMessage !== "" ||
					state.sex.errorMessage !== "" ||
					state.weigth.errorMessage !== "" ||
					state.heigth.errorMessage !== ""
				) return false;

				await userStore.createUser(
					state.name.value,
					state.email.value,
					state.password.value,
					state.birthdate.value,
					state.sex.value.toUpperCase(),
					parseFloat(state.heigth.value.replace(/([^\w.])/g, "")),
					parseFloat(state.weigth.value.replace(/([^\w.])/g, "")), state.helpers)
					.then(() => {
						toast.success(t("SUCCESS.REGISTER.VERIFICATION_EMAIL"));
						toast.success(t("SUCCESS.REGISTER.REGISTER_SUCCESS"));
						isLoading.value = false;
						cleanState();
					});
			} catch (error: any) {
				isLoading.value = false;
				toast.clear();
				toast.error(error.response.data?.message || t("ERROR.HTTP.SERVER_ERROR"));
			}
		}

		const getSexValues = async () => {
			isLoading.value = true;
			await userStore.getSexValues()
				.then(response => {
					isLoading.value = false;
					sexValues.value = response
				})
				.catch(() => {
					isLoading.value = false;
				});
		}

		onMounted(async () => {
			await getSexValues();
		})

		const backHome = () => {
			router.push("/")
		}

		return {
			isLoading,
			backHome,
			state,
			registerUser,
			sexValues
		}
	}
})

</script>
<style>
.calendar-input {
	background-image: url("/assets/icons/calendar_month.svg");
}

.data-register::-webkit-inner-spin-button,
.data-register::-webkit-calendar-picker-indicator {
	display: none;
	appearance: none;
	-webkit-appearance: none;
}

.weight-input {
	background-image: url("/assets/icons/weight.svg");
}

.height-input {
	background-image: url("/assets/icons/height.svg");
}

.img-input {
	background-size: 1.5rem;
	background-position: center;
	background-repeat: no-repeat;
}
</style>
