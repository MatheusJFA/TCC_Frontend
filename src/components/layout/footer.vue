<template>
	<footer class="relative bg--300 pt-8 bg-leafgreen-200 pb-6">
		<div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
			style="height: 80px;">
			<svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
				version="1.1" viewBox="0 0 2560 100" x="0" y="0">
				<polygon class="text-leafgreen-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
			</svg>
		</div>
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap">
				<div class="w-full lg:w-6/12 px-4">
					<h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
					<h5 class="text-lg mt-0 mb-2 text-gray-700">
						You can contact us through GitHub, we will get back to you as soon as possible.
					</h5>
					<div class="mt-6 row-auto">
							<a href="https://github.com/CelsonF" class="mr-5" target="_blank">
								<button
									class="bg-white hover:bg-slate-200 ease-in-out duration-200 text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
									type="button">
									<img src="/assets/icons/github-icon.svg" alt="GITHUB" />
								</button>									Celson Fernando

							</a>
							<a href="https://github.com/MatheusJFA" target="_blank">
								<button
									class="bg-white hover:bg-slate-200 ease-in-out duration-200 text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
									type="button">
									<img src="/assets/icons/github-icon.svg" alt="GITHUB" />
								</button>									Matheus José
							</a>
					</div>
				</div>
			</div>
			<hr class="my-6 border-gray-400" />
			<div class="flex flex-wrap items-center md:justify-between justify-center">
				<div class="w-full md:w-4/12 px-4 mx-auto text-center">
					<div class="text-sm text-gray-600 font-semibold py-1">
						Copyright © {{ date }} - HealthierCorps
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		const date = new Date().getFullYear()

		return { date };
	},
});
</script>

<style>

</style>
