<template>
	<div>
		<loading :active="isLoading" :can-cancel="false" :is-full-page="true" />

		<a class="text-gray-500 block" href="#pablo" @click="toggleDropdown($event)" ref="btnDropdownRef">
			<div class="items-center flex">
				<span
					class="w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full">
					<img alt="profile" class="w-full rounded-full align-middle border-none shadow-lg"
						src="/assets/avatars/default-avatar.png" />
				</span>
			</div>
		</a>
		<div ref="popoverDropdownRef"
			class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" :class="{
				hidden: !dropdown.dropdownPopoverShow,
				block: dropdown.dropdownPopoverShow
			}" style="min-width: 12rem">
			<a href="#pablo"
				class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700">
				My Profile
			</a>
			<div class="h-0 my-2 border border-solid border-gray-100" />

			<button @click="logout"
				class="text-sm py-2 px-4 font-normal text-left hover:text-red-500 block w-full whitespace-nowrap bg-transparent text-gray-700">
				Logout
			</button>
		</div>
	</div>
</template>
<script lang="ts">
import { useUserStore } from "../store/user";
import { createPopper } from "@popperjs/core";
import { defineComponent, ref, reactive, onMounted } from 'vue';
import { useI18n } from "vue-i18n";
import { useToast } from "vue-toastification";

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default defineComponent({
	components: {
		Loading,
	},
	setup() {
		const popoverDropdownRef = ref<HTMLInputElement | null>(null);
		const btnDropdownRef = ref<HTMLInputElement | null>(null);

		const dropdown = reactive({
			dropdownPopoverShow: false,
		})

		let dropdownNode: any;
		let popoverDropdownNode: any;


		const userStore = useUserStore();
		const { t } = useI18n();
		const toast = useToast();
		let isLoading = ref(false);

		onMounted(() => {
			dropdownNode = btnDropdownRef.value;
			popoverDropdownNode = popoverDropdownRef.value;
		})

		const toggleDropdown = function (event: Event) {
			event.preventDefault();
			if (dropdown.dropdownPopoverShow) {
				dropdown.dropdownPopoverShow = false;
			} else {
				dropdown.dropdownPopoverShow = true;
				createPopper(dropdownNode, popoverDropdownNode, {
					placement: "bottom-end"
				});
			}
		}

		async function logout() {
			try {
				isLoading.value = true;
				await userStore.logout().then(() => {
					toast.success(t("SUCCESS.LOGOUT"))
					isLoading.value = false;
				});
			} catch (error: any) {
				isLoading.value = false;
				toast.clear();
				toast.error(error.response.data?.message || t("ERROR.HTTP.SERVER_ERROR"));
			}
		}


		return {
			dropdown,
			popoverDropdownRef,
			btnDropdownRef,
			toggleDropdown,
			isLoading,
			logout
		};
	}
})

</script>
