<template>
	<div class="h-screen flex items-center justify-center ">
		<img src="/assets/images/bg-green-2.jpg" class="w-full  h-full fixed object-cover blur-xl inset-0 rotate-0"
			alt="background" loading="lazy" />
		<div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

			<div class="m-auto space-y-8 md:w-10/12">
				<div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
					<div class="flex justify-center pt-5">
						<img src="/assets/images/Logo.svg" loading="lazy" class="w-20 ml-4" alt="Healthy_logo" />
					</div>
					<router-view>

					</router-view>
				</div>
				<div class="text-center space-x-4">
					<span class="sm:text-sm">&copy;Healthier</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

	setup() {
		return {}
	},
});
</script>

<style scope>

</style>
