<template>
	<div class="mx-auto w-full">

		<!-- Card Excercise -->
		<div class="flex flex-wrap">
			<loading :active="isLoading" :can-cancel="false" :is-full-page="true" />
			<div class="mx-auto w-full max-w-7xl flex px-4">
				<div class="relative w-full flex flex-col min-w-0 break-words
				bg-slate-50 rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="flex-auto p-4">
						<div class="flex flex-wrap gap-y-4">
							<div class="relative w-full flex flex-col lg:flex-row gap-2">
								<select class="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
									focus:ring-2 focus:ring-green-300 focus:outline-none
									invalid:ring-2 invalid:ring-red-400" name="BodyPart" id="BodyPart" v-model="state.bodyPart"
									@change="searchBodyPart">
									<option selected disabled hidden :value="''">Select body part</option>
									<option v-for="item in bodyParts" :key="item" :value="item">
										{{ item }}
									</option>
								</select>

								<select class="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
									focus:ring-2 focus:ring-green-300 focus:outline-none
									invalid:ring-2 invalid:ring-red-400" name="Equipment" id="Equipment" v-model="state.equipment"
									@change="searchEquipment">
									<option selected disabled hidden :value="''">Select equipment</option>
									<option v-for="item in equipments" :key="item" :value="item">
										{{ item }}
									</option>
								</select>

								<select class="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
									focus:ring-2 focus:ring-green-300 focus:outline-none
									invalid:ring-2 invalid:ring-red-400" name="TargetMuscle" id="TargetMuscle" v-model="state.targetMuscle"
									@change="searchTargetMuscle">
									<option selected disabled hidden :value="''">Select target muscle</option>
									<option v-for="item in targetMuscles" :key="item" :value="item">
										{{ item }}
									</option>
								</select>
							</div>

							<div class="relative w-full flex flex-col lg:flex-row gap-2">
								<input v-model="state.search" type="text" class="w-full  lg:w-10/12 px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
								focus:ring-2 focus:ring-green-300 focus:outline-none
								invalid:ring-2 invalid:ring-red-400">
								<button type="button" @click="searchExercise" class=" w-full lg:w-2/12 py-3 px-6 rounded-md bg-leafgreen-700 hover:bg-leafgreen-900
                                    focus:bg-leafgreen-800 active:bg-leafgreen-600 text-white">Search</button>
							</div>
						</div>
					</div>


					<div v-show="selectedExercise.name == ''"
						class="mx-auto max-w-2xl px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-4">
						<div class="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
							<div class="group relative grid shadow-md rounded-md bg-white" v-for="item in exercises" :key="item.id">
								<h2
									class="text-lg capitalize font-bold py-2 bg-leafgreen-900  text-center rounded-tr-md rounded-tl-md text-leafgreen-100">
									{{ item.name }}
								</h2>
								<div
									class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
									<img :src="item.gifUrl" :alt="item.name" @click="selectedExercise = item"
										class="h-full w-full object-cover object-center lg:h-full lg:w-full">
								</div>
								<div class="border-t bg-white">
									<div class="flex w-full px-2 flex-col">
										<p class="text-sm my-2 font-bold capitalize text-gray-900">Body part: {{
												item.bodyPart
										}}
										</p>
										<p class="mt-1 text-sm my-1 capitalize text-gray-500">
											<span class="font-bold">
												Target Muscle:
											</span>
											{{ item.target }}
										</p>
										<p class="mt-1 mb-2 text-sm  capitalize text-gray-500">
											<span class="font-bold">Equipment:</span>
											{{ item.equipment }}
										</p>
									</div>
								</div>
								<button @click="changeSelectedExercise(item)" class=" w-full py-2 rounded-br-md rounded-bl-md bg-green-700 hover:bg-leafgreen-900
												focus:bg-leafgreen-800 active:bg-leafgreen-600 text-white">
									Do this exercise
								</button>
							</div>
						</div>
					</div>

					<div v-show="selectedExercise.name !== ''" class="flex flex-col px-4 pb-4">
						<div class="flex flex-row  justify-end">
							<button @click="clearSelectedExercise()"
								class="flex p-2 rounded-md text-white delay-75 bg-red-500 hover:bg-red-700 shadow-sm ">Close
								<XMarkIcon class="w-6 h-6 text-white" />
							</button>
						</div>

						<div class="flex flex-col lg:flex-row">
							<div class="flex flex-col md:w-full lg:w-6/12 rounded-md shadow-md">
								<div class="flex flex-col">
									<h2
										class="text-lg text-center py-2 bg-green-600 rounded-tr-md rounded-tl-md capitalize font-bold text-green-100">
										{{ selectedExercise.name
										}} </h2>
								</div>
								<div
									class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
									<img :src="selectedExercise.gifUrl" :alt="selectedExercise.name"
										class="h-full w-full object-cover object-center lg:h-full lg:w-full">
								</div>

								<div class="flex flex-col rounded-br-md border-t rounded-bl-md p-3 bg-white">
									<p class="text-sm font-bold capitalize text-gray-900">Body part:
										{{ selectedExercise.bodyPart }}
									</p>
									<p class="mt-1 text-sm  capitalize text-gray-500"><span class="font-bold">
											Target Muscle:
										</span>
										{{ selectedExercise.target }}
									</p>
									<p class="mt-1 mb-2 text-sm capitalize text-gray-500">
										<span class="font-bold">
											Equipment:
										</span>
										{{ selectedExercise.equipment }}
									</p>
								</div>
							</div>

							<div class="flex flex-col w-full h-full justify-center">
								<div class="flex justify-center items-center sm:mt-14 pb-4 md:mt-0 text-9xl text-title ">
									<span class="flex gap-x-1 font-DigitalLCD">{{
											timer.minutes.value.toString().padStart(2, "0")
									}}
									</span>
									<span class="flex gap-x-1 font-DigitalLCD ">:</span>
									<span class="flex gap-x-1 font-DigitalLCD ">
										{{ timer.seconds.value.toString().length === 1 ?
												timer.seconds.value.toString().padStart(2, "0") : timer.seconds
										}}
									</span>
								</div>

								<div class="mt-4 flex justify-center">
									<div class="flex flex-row gap-4">
										<button :disabled="timer.isExpired.value" class=" rounded-full px-3 py-3 bg-leafgreen-700 hover:bg-leafgreen-900
												focus:bg-leafgreen-800 active:bg-leafgreen-600" @click="timer.start()">
											<PlayIcon class="w-6 h-6 text-leafgreen-400" />
										</button>
										<button class="rounded-full px-3 py-3 bg-sandybrown-1000 hover:bg-orange-400"
											@click="timer.pause()">
											<PauseIcon class="w-6 h-6 text-sandybrown-200" />
										</button>
										<button
											class="px-3 py-3 rounded-full bg-mediumslateblue-1000 hover:bg-indigo-700"
											@click="restart()">
											<ArrowPathIcon class="w-6 h-6 text-mediumslateblue-400" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p class="font-bold">Resources available in RapidAPI (ExerciseDB)</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { useUserStore } from '../store/user';
import { defineComponent, onMounted, reactive, ref, watchEffect } from 'vue';
import { XMarkIcon, PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/vue/24/solid'
import { useTimer } from 'vue-timer-hook';

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import { useRoute } from 'vue-router';

export default defineComponent({
	components: {
		Loading,
		XMarkIcon,
		PlayIcon,
		PauseIcon,
		ArrowPathIcon
	},
	setup() {
		const TWO_MINUTES = 120;

		const time = new Date();
		time.setSeconds(time.getSeconds() + TWO_MINUTES);
		const timer = useTimer(time.getTime(), false);

		const restart = () => {
			const time = new Date();
			time.setSeconds(time.getSeconds() + TWO_MINUTES);
			timer.restart(time.getTime());
		}

		const userStore = useUserStore();

		const exercises = ref();

		const isLoading = ref(false);

		const bodyParts = ref([]);
		const equipments = ref([]);
		const targetMuscles = ref([]);

		const route = useRoute();
		const selectedExercise = reactive({
			name: "",
			gifUrl: "",
			bodyPart: "",
			equipment: "",
			target: ""
		});

		const state = reactive({
			search: "",
			bodyPart: "",
			targetMuscle: "",
			equipment: "",
		});

		function changeSelectedExercise(item: any) {
			isLoading.value = true;
			selectedExercise.name = item.name;
			selectedExercise.gifUrl = item.gifUrl;
			selectedExercise.bodyPart = item.bodyPart;
			selectedExercise.equipment = item.equipment;
			selectedExercise.target = item.target;
			isLoading.value = false;
		}

		function clearSelectedExercise() {
			isLoading.value = true;
			selectedExercise.name = "";
			selectedExercise.gifUrl = "";
			selectedExercise.bodyPart = "";
			selectedExercise.equipment = "";
			selectedExercise.target = "";
			isLoading.value = false;
		}

		onMounted(() => {
			watchEffect(async () => {
				if (timer.isExpired.value) {
					const id = route.params.id as string;
					const experience = 100;
					userStore.addExperience(id, experience)
				}

				exercises.value = await userStore.getAllExercises();
				bodyParts.value = await userStore.getBodyPartList();
				equipments.value = await userStore.getEquipmentsList();
				targetMuscles.value = await userStore.getTargetMuscleList();

			})
		})

		async function searchExercise() {
			isLoading.value = true;
			const list = await userStore.getAllExercises();

			state.equipment = "";
			state.targetMuscle = "";
			state.bodyPart = "";

			clearSelectedExercise();

			if (state.search.length > 0) exercises.value = list.filter((x: any) => x.name.toUpperCase() === state.search.toUpperCase());
			else exercises.value = list;
			isLoading.value = false;
		};

		async function searchBodyPart() {
			isLoading.value = true;

			state.search = "";
			state.equipment = "";
			state.targetMuscle = "";

			clearSelectedExercise();

			exercises.value = await userStore.getAllExercisesByBodyPart(state.bodyPart);

			isLoading.value = false;
		};

		async function searchEquipment() {
			isLoading.value = true;

			state.search = "";
			state.bodyPart = "";
			state.targetMuscle = "";

			clearSelectedExercise();


			exercises.value = await userStore.getAllExercisesByEquipment(state.equipment);

			isLoading.value = false;
		};

		async function searchTargetMuscle() {
			isLoading.value = true;

			state.search = "";
			state.bodyPart = "";
			state.equipment = "";

			clearSelectedExercise();


			exercises.value = await userStore.getAllExercisesByTargetMuscle(state.targetMuscle);

			isLoading.value = false;
		};

		return {
			state,
			exercises,
			isLoading,
			userStore,
			bodyParts,
			equipments,
			targetMuscles,
			selectedExercise,
			timer,
			changeSelectedExercise,
			clearSelectedExercise,
			restart,
			searchExercise,
			searchBodyPart,
			searchEquipment,
			searchTargetMuscle
		}
	}
})
</script>
<style>

</style>
