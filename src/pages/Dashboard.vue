<template>
	<div>
		<loading :active="isLoading" :can-cancel="false" :is-full-page="true" />
		<sidebar-component @selectRoute="selectedRoute" />
		<div class="relative md:ml-64 bg-gray-100">
			<navbar-dash-component />
			<!-- Header -->
			<div class="relative bg-green-500 md:pt-32 pb-32 pt-12">
			</div>

			<div class="px-4 md:px-10 mx-auto w-full -m-24">
				<header class="relative pb-10 flex">
					<p class="text-sm text-white pr-5">Level: {{ experience.level }}</p>

					<p class="text-sm text-white">
						{{ `${experience.currentLevelRequiredExperience} xp` }}
					</p>
					<div class="mx-6 lg:mx-6 flex-1 bg-gray-200 h-1 rounded-md">
						<div class="relative bg-purple-700 h-1"
							:style="{ width: `${currentXpPercentage.toFixed(2)}%` }">
							<p class="text-sm text-white absolute -right-4 w-full top-2">
								{{ `${experience.xp} xp (${currentXpPercentage.toFixed(2)}%)` }}
							</p>
						</div>
					</div>
					<p class="text-sm text-white">
						{{ `${experience.forNextLevel} xp` }}
					</p>
				</header>

				<!-- Routes -->

				<Nutrition v-show="currentRoute === ''" />
				<Exercise v-show="currentRoute === 'exercise'" />
				<MealPlanner v-show="currentRoute === 'mealPlan'" />
				<!-- <Chat v-show="currentRoute === 'chat'" /> -->
				
				<!-- Footer -->
				<footer class="block py-4">
					<div class="container mx-auto px-4">
						<hr class="mb-4 border-b-1 border-blueGray-200" />
						<div class="flex flex-wrap items-center md:justify-between justify-center">
							<div class="w-full md:w-6/12 px-4">
								<div class="text-sm text-blueGray-500 font-semibold py-1">
									Copyright © {{ date }} Celson Fernando & Matheus José
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import SidebarComponent from "../components/Sidebar.vue";
import NavbarDashComponent from "../components/NavbarDashboard.vue";
import Nutrition from "../components/Nutrition.vue"
import Exercise from "../components/Exercise.vue"
import MealPlanner from "../components/MealPlanner.vue"
// import Chat from "../components/Chat.vue"
import { defineComponent } from "@vue/runtime-core"
import { onBeforeMount, computed, onMounted, reactive, ref } from "vue";
import { useUserStore } from "../store/user";
import { useRoute, useRouter } from "vue-router";
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

export default defineComponent({
	name: "dashboard-page",
	components: {
		SidebarComponent,
		NavbarDashComponent,
		Nutrition,
		MealPlanner,
		// Chat,
		Exercise,
		Loading,
	},
	setup() {
		const date = new Date().getFullYear()

		let isLoading = ref(false);
		let currentRoute = ref('');

		let healthData = reactive([]);
		let exerciseData = reactive([]);

		let bodyPartList = reactive([]);
		let equipmentList = reactive([]);
		let targetMuscleList = reactive([]);

		const router = useRouter();
		const route = useRoute();
		const userStore = useUserStore();

		const experience = userStore.$state.experience;
		const currentXpPercentage = computed(() => ((experience.xp / experience.forNextLevel) * 100));

		const getHealthData = async () => {
			const id = route.params.id as string;
			await userStore.getHealthData(id);
		}

		const getExerciseData = async () => {
			const exercises = await userStore.getAllExercises();
			exerciseData.values = exercises;
		}

		const getExpData = async () => {
			const id = route.params.id as string;
			await userStore.getExperience(id);
		}

		const selectedRoute = (event: any) => {
			currentRoute.value = event;
			window.scrollTo(0, 0);
		};

		onMounted(() => {
			const refreshToken = localStorage.getItem("refreshToken");
			if (!refreshToken) {
				router.push({ name: "login" })
				return false;
			}
		});

		onBeforeMount(async () => {
			isLoading.value = true;
			await getHealthData();
			await getExpData();
			await getExerciseData();
			isLoading.value = false;
		});

		return {
			date,
			currentRoute,
			isLoading,
			experience,
			currentXpPercentage,
			selectedRoute,
			bodyPartList,
			equipmentList,
			targetMuscleList,
			healthData,
			exerciseData
		}
	}
})
</script>
<style>

</style>
