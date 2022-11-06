<template>
	<div class="mx-auto w-full">
		<!-- Card stats -->
		<div class="flex flex-wrap">
			<div class="w-full flex lg:w-6/12 xl:w-6/12 px-4">
				<div
					class="relative w-full flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap">
							<div class="relative w-full ">
								<h3 class="text-blueGray-400 text-center uppercase font-bold text-xl">
									Your Body Mass Index
								</h3>
								<p class="py-8 text-center text-4xl text-blueGray-700">
									{{ healthData.BMI.text.toFixed(2) }}
								</p>
								<p class="text-center font-semibold">
									{{ healthData.BMI.value }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-6/12 xl:w-6/12 px-4">
				<div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap">
							<div class="relative w-full ">
								<h3 class="text-blueGray-400 text-center uppercase font-bold text-xl pb-2">
									Ideal Body Weight
								</h3>
								<div class="flex flex-row justify-between py-1">
									<div>
										{{ healthData.IBW.hanwi.text }}
									</div>
									<div>
										{{ healthData.IBW.hanwi.value.toFixed(2) }} kg
									</div>
								</div>
								<div class="flex flex-row justify-between py-1">
									<div>
										{{ healthData.IBW.devine.text }}
									</div>
									<div>
										{{ healthData.IBW.devine.value.toFixed(2) }} kg
									</div>
								</div>
								<div class="flex flex-row justify-between py-1">
									<div>
										{{ healthData.IBW.miller.text }}
									</div>
									<div>
										{{ healthData.IBW.miller.value.toFixed(2) }} kg
									</div>
								</div>
								<div class="flex flex-row justify-between py-1">
									<div>
										{{ healthData.IBW.robinson.text }}
									</div>
									<div>
										{{ healthData.IBW.robinson.value.toFixed(2) }} kg
									</div>
								</div>
								<div class="flex flex-row justify-between py-1">
									<div>
										Range
									</div>
									<div>
										{{ healthData.IBW.range.minimun.value.toFixed(2) }} ~
										{{ healthData.IBW.range.maximun.value.toFixed(2) }} kg
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full flex lg:w-6/12 xl:w-6/12 px-4 pt-4">
				<div
					class="relative w-full flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap">
							<div class="relative flex flex-col w-full ">
								<h3 class="text-center uppercase font-bold text-xl">
									Your Maintenance Daily Calories
								</h3>
								<div class="flex flex-col">
									<div v-for="item in healthData.MNC" :key="item.text"
										class="flex flex-row justify-between py-2">
										<div>
											{{ item.text }}
										</div>
										<div>
											{{ item.value }} g
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-6/12 xl:w-6/12 px-4 pt-4">
				<div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap">
							<div class="relative w-full ">
								<h3 class="text-blueGray-400 text-center uppercase font-bold text-xl">
									Basal metabolic rate during activities
								</h3>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.base.text }}
									</div>
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.base.value.toFixed(2) }} calories
									</div>
								</div>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.sedentary.text }}
									</div>
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.sedentary.value.toFixed(2) }} calories
									</div>
								</div>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.slightly_active.text }}
									</div>
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.slightly_active.value.toFixed(2) }} calories
									</div>
								</div>

								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.moderately_active.text }}
									</div>
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.moderately_active.value.toFixed(2) }}
										calories
									</div>
								</div>

								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.very_active.text }}
									</div>
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.very_active.value.toFixed(2) }} calories
									</div>
								</div>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.extremely_active.text }}
									</div>
									<div>
										{{ healthData.BMR_ACTIVITY.mifflin.extremely_active.value.toFixed(2) }} calories
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-6/12 xl:w-6/12 px-4 pt-4">
				<div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap">
							<div class="relative w-full ">
								<h3 class="text-blueGray-400 text-center uppercase font-bold text-xl">
									Lean Body Mass
								</h3>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.LBM.boer.text }}
									</div>
									<div>
										{{ healthData.LBM.boer.value.toFixed(2) }} kg
									</div>
								</div>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.LBM.hume.text }}
									</div>
									<div>
										{{ healthData.LBM.hume.value.toFixed(2) }} kg
									</div>
								</div>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.LBM.james.text }}
									</div>
									<div>
										{{ healthData.LBM.james.value.toFixed(2) }} kg
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full lg:w-6/12 xl:w-6/12 px-4 pt-4">
				<div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap">
							<div class="relative w-full ">
								<h3 class="text-center uppercase font-bold text-xl">
									Maximum Muscular Potential
								</h3>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.MMP.maximun.text }}
									</div>
									<div>
										{{ healthData.MMP.maximun.value.toFixed(2) }} kg
									</div>
								</div>
								<div class="flex flex-row justify-between py-2">
									<div>
										{{ healthData.MMP.minimun.text }}
									</div>
									<div>
										{{ healthData.MMP.minimun.value.toFixed(2) }} kg
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="w-full flex lg:w-6/12 xl:w-6/12 px-4 pt-4">
				<div
					class="relative w-full flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap">
							<div class="relative w-full ">
								<h3 class="text-blueGray-400 text-center uppercase font-bold text-xl">
									Fat percentage
								</h3>
								<p class="py-8 text-center text-4xl text-blueGray-700">
									{{ healthData.fatPercentage.value.toFixed(2) }}
								</p>
								<p class="text-center font-semibold">
									{{ healthData.fatPercentage.text }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { useUserStore } from "../store/user";
import { defineComponent, ref } from "vue"

export default defineComponent({
	setup() {
		const userStore = useUserStore();
		const healthData = userStore.$state.nutrition;

		return {
			healthData
		}
	}
})
</script>

<style lang="">

</style>
