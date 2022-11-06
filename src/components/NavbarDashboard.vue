<template>
	<!-- Navbar -->
	<nav
		class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
		<div class="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
			<!-- Brand -->
			<a class="text-white text-sm uppercase hidden lg:inline-block font-semibold" href="#">Dashboard</a>
			<!-- User -->
			<ul class="flex-col md:flex-row list-none items-center hidden md:flex">
				<user-dropdown-component></user-dropdown-component>
			</ul>
		</div>
	</nav>
	<!--User Experience-->


	<!-- End Navbar -->
</template>
<script lang="ts">
import UserDropdownComponent from "./UserDropdown.vue";
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
	name: "navbar-dashboard",
	components: {
		UserDropdownComponent,
	},
	setup() {


		return {

		}
	}
})
</script>
