<template>
	<nav
		class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
		<div
			class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
			<!-- Toggler -->
			<button
				class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
				type="button" @click="toggleCollapseShow('bg-white m-2 py-3 px-6')">
				<Bars3Icon class="w-6 h-6 text-black-1000" />
			</button>
			<!-- Brand -->
			<a class="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
				href="javascript:void(0)">
				Healthier
			</a>
			<!-- User -->
			<ul class="md:hidden items-center flex flex-wrap list-none">
				<li class="inline-block relative">
					<!-- <user-dropdown></user-dropdown> -->
				</li>
			</ul>
			<!-- Collapse -->
			<div
				class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
				:class="classesSidebar.collapseShow">
				<!-- Collapse header -->
				<div class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
					<div class="flex flex-wrap">
						<div class="w-6/12">
							<a class="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
								href="javascript:void(0)">
								Healthier
							</a>
						</div>
						<div class="w-6/12 flex justify-end">
							<button type="button"
								class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
								@click="toggleCollapseShow('hidden')">
								<XMarkIcon class="w-6 h-6 text-black-1000" />
							</button>
						</div>
					</div>
				</div>
				<!-- Navigation -->
				<ul class="md:flex-col md:min-w-full flex flex-col list-none">

					<li class=" cursor-pointer">
						<div class="flex w-full" @click="$emit('selectRoute', '')">
							<button
								class="text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold flex flex-row items-center">
								<img src="/assets/icons/nutricao_sidebar.svg" alt="Exercícios" class="pr-3" />
								Nutrition
							</button>
						</div>
					</li>
					<li class="cursor-pointer">
						<div class="flex w-full" @click="$emit('selectRoute', 'exercise')">
							<button
								class="text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold flex flex-row items-center">
								<img src="/assets/icons/fitness_center_sidebar.svg" alt="Exercícios" class="pr-3 fill-slate-900" />
								Exercise
							</button>
						</div>
					</li>
					<li class=" cursor-pointer">
						<div class="flex w-full" @click="$emit('selectRoute', 'mealPlan')">
							<button
								class="text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold flex flex-row items-center">
								<img src="/assets/icons/calendar.svg" alt="Meal Plan" class="pr-3 w-9 h-6">
								Meal Plan
							</button>
						</div>
					</li>
					<!-- <li class="items-center">
						<button @click="$emit('selectRoute', 'chat')"
							class="text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold block">
							<i class="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>
							Chat
						</button>
					</li> -->

				</ul>
				<!-- Divider -->
				<hr class="my-4 md:min-w-full" />
				<!-- Heading -->
			</div>
		</div>
	</nav>
</template>
<script lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";
import { defineComponent, reactive } from 'vue';

export default defineComponent({
	components: {
		Bars3Icon,
		XMarkIcon,
	},
	setup() {
		const classesSidebar = reactive({
			collapseShow: 'hidden'
		});

		const toggleCollapseShow = function (classes: string) {
			classesSidebar.collapseShow = classes
		}

		return {
			classesSidebar,
			toggleCollapseShow,
		}
	}
})
</script>
