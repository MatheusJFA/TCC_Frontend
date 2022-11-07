<template>
	<div class="mx-auto w-full">

		<!-- Card Excercise -->
		<div class="flex flex-wrap">
			<loading :active="isLoading" :can-cancel="false" :is-full-page="true" />
			<div class="mx-auto w-full max-w-7xl flex px-4">
				<div v-if="selectedRecipe" class="relative flex flex-col min-w-0 break-words
				bg-slate-50 rounded-lg mb-6 xl:mb-0 shadow-lg px-4">
					<div class="flex flex-row my-2 justify-end">
						<button @click="cleanRecipe()"
							class="flex p-2 rounded-md text-white delay-75 bg-red-500 hover:bg-red-700 shadow-sm"> Close
							<XMarkIcon class="w-6 h-6 text-white" />
						</button>
					</div>
					<div class="flex flex-col lg:flex-row ">
						<div class="flex flex-col shadow-md rounded-br-md rounded-bl-md">
							<div class="flex flex-col py-2 rounded-tr-md rounded-tl-md bg-green-600 ">
								<h2 class="text-lg text-center capitalize font-bold text-green-100">
									{{ JSON.parse(selectedRecipe.value).id }} - {{
											JSON.parse(selectedRecipe.value).title
									}}
								</h2>
							</div>
							<div
								class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
								<img
									:src="`https://spoonacular.com/recipeImages/${JSON.parse(selectedRecipe.value).id}-556x370.${JSON.parse(selectedRecipe.value).imageType}`"
									:alt="selectedRecipe.name"
									class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
							</div>
							<div class="p-3 rounded-br-md rounded-bl-md bg-white">
								<p><span class="font-bold">Servings: </span> {{ recipe.data.servings }}</p>
								<p><span class="font-bold">Ready in: </span>{{ recipe.data.readyInMinutes }} minutes</p>
								<p v-show="recipe.data.preparationMinutes > 0">
									<span class="font-bold">{{ recipe.data.preparationMinutes }} </span> minutes of
									<span> preparation</span>
								</p>
								<p v-show="recipe.data.cookingMinutes > 0">
									<span class="font-bold">{{ recipe.data.cookingMinutes }} </span> minutes of
									<span>cooking </span>
								</p>
							</div>
						</div>
						<div class="flex w-6/12 px-4">
							<!-- Receita - Livre de ingredientes -->
							<div class="flex flex-col w-full">
								<p class="my-2"> <span class="font-bold">Vegetarian: </span> {{ recipe.data.vegetarian ?
										"Yes" : "No"
								}}
								</p>
								<p class="my-2"> <span class="font-bold">Vegan: </span> {{ recipe.data.vegan ? "Yes" :
										"No"
								}}</p>
								<p class="my-2"> <span class="font-bold">Gluten Free:</span> {{ recipe.data.glutenFree ?
										"Yes" : "No"
								}}
								</p>
								<p class="my-2"> <span class="font-bold">Dairy Free:</span> {{ recipe.data.dairyFree ?
										"Yes" : "No"
								}}
								</p>
							</div>
						</div>
					</div>

					<!-- Ingrediente -->
					<div class="flex flex-col lg:flex-row w-full pt-4">
						<div class="md:w-full lg:w-6/12">
							<div class="w-full border mb-4 rounded-md shadow-md"
								v-for="ingredient in recipe.data.extendedIngredients" :key="ingredient.id">
								<p class="font-bold p-2 rounded-tr-md rounded-tl-md bg-leafgreen-700 text-green-900">
									Which aisle you
									will found it:
									<span class="uppercase">
										{{ ingredient.aisle }}
									</span>
								</p>
								<div class="flex flex-col bg-white rounded-br-md rounded-bl-md">
									<div
										class="w-24 h-24 flex justify-center items-center rounded-md my-2 mr-2 bg-white">
										<img class="object-contain"
											:src="`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`"
											:alt="ingredient.name">
									</div>
									<p class="font-semibold p-2">
										{{ ingredient.original }}
										{{ ingredient.measures.us.unitLong === ingredient.measures.metric.unitLong ? ""
												: `|
																				${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitLong} of
																				${ingredient.name}`
										}}
									</p>
								</div>
							</div>
						</div>
						<div class="md:w-full lg:w-6/12  lg:pl-4">
							<!-- Summary -->
							<div class="text-justify p-4 bg-gray-200 rounded-md shadow-md">
								<p>
									<span class="font-bold">Summary: </span>
									<span class="leading-7">{{ recipe.data.summary.replace(/(<([^>]+)>)/ig, "") }}
									</span>
								</p>
							</div>
							<!-- Cuisine -->
							<div class="py-2" v-if="recipe.data.cuisine">
								<p><span>Cuisine(s)</span></p>
								<p v-for="cuisine in recipe.data.cuisine" :key="cuisine">
									{{ cuisine }}
								</p>
							</div>

							<!-- Dish type -->
							<div class="py-2" v-if="recipe.data.dishTypes">
								<p><span class="font-bold">Dish Type(s)</span></p>
								<p class="capitalize" v-for="dishType in recipe.data.dishTypes" :key="dishType">
									{{ dishType }}
								</p>
							</div>
							<!-- Instructions -->
							<div class="p-4 bg-gray-200 rounded-md">
								<p>
									<span class="font-bold text-black-1000">Instructions: </span>
									<span class="leading-relaxed text-black-1000 text-justify">{{
											recipe.data.instructions
									}}</span>
								</p>
							</div>

							<!-- Source -->
							<div class="py-4">
								<p> <span class="font-bold">Source:</span> <a :href="recipe.data.sourceUrl"
										target="_blank">{{
												recipe.data.creditsText
										}}</a>
								</p>
							</div>
						</div>
					</div>

					<div class="w-full pt-4">
						<div>
							<span class="font-bold">Nutrition Information</span>
							<iframe id="previewWidget" class="flex flex-row w-full min-h-screen">

							</iframe>
						</div>



						<div class="mx-auto max-w-2xl px-4 sm:py-4 md:px-0 sm:px-6 lg:max-w-7xl lg:px-0">
							<span class="font-bold ">Similar Recipes</span>
							<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
								<div class="shadow-md grid rounded-md" v-for="item in similarRecipes.data" :key="item.id">
									<div class="flex flex-col bg-green-600 rounded-tr-md rounded-tl-md">
										<h2
											class="text-lg text-center  p-3 capitalize font-bold text-leafgreen-200">
											{{ item.id }} - {{ item.title }}
										</h2>
									</div>
									<div
										class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
										<a :href="item.sourceUrl" target="_blank">
											<img :src="`https://spoonacular.com/recipeImages/${item.id}-556x370.${item.imageType}`"
												:alt="item.name"
												class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
										</a>
									</div>
									<div>
										<p> <span>Servings: </span>{{ item.servings }}</p>
										<p> <span>Ready in </span>{{ item.readyInMinutes }} <span>minutes</span></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div v-else class="relative w-full flex flex-col min-w-0 break-words
				bg-slate-50 rounded-lg mb-6 xl:mb-0 shadow-lg">
					<div class="mx-auto max-w-2xl px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-4">
						<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
							v-for="planner in mealPlanner" :key="planner">
							<div class="grid" v-for="(item, index) in planner.items" :key="index">
								<div>
									<h3 class="text-center uppercase font-bold text-xl mt-2">
										Day {{ item.day }}
									</h3>
									<h3 class=" text-center uppercase font-bold text-xl mt-2">
										{{ item.slot === 1 ? "Breakfast" : item.slot === 2 ? "Lunch" : "Dinner" }}
									</h3>
								</div>
								<div class="shadow-md grid rounded-md">
									<div class="flex flex-col ">
										<h2
											class="text-lg text-center bg-green-600 p-3 capitalize rounded-tr-md rounded-tl-md font-bold text-leafgreen-200">
											{{ JSON.parse(item.value).id }} - {{ JSON.parse(item.value).title }}
										</h2>
									</div>
									<div
										class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-white group-hover:opacity-75 lg:aspect-none lg:h-80">
										<img
											:src="`https://spoonacular.com/recipeImages/${JSON.parse(item.value).id}-556x370.${JSON.parse(item.value).imageType}`"
											:alt="item.name"
											class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
									</div>
									<button
										class="rounded-br-md rounded-bl-md text-white font-bold bg-leafgreen-700 hover:bg-leafgreen-900 w-full py-2"
										@click="showRecipe(item)">
										{{ "Show Recipe" }}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { useUserStore } from '../store/user';
import { defineComponent, onMounted, ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { useRoute } from 'vue-router';
import { Buffer } from "buffer";

export default defineComponent({
	components: {
		Loading,
		XMarkIcon
	},
	setup() {
		const userStore = useUserStore();

		const mealPlanner = ref();
		const route = useRoute();

		const selectedRecipe = ref()
		const recipe = ref();
		const nutritionInformation = ref();
		const similarRecipes = ref();

		const isLoading = ref(false);

		async function showRecipe(item: any) {
			isLoading.value = true;
			selectedRecipe.value = item;
			const id = JSON.parse(item.value).id;
			recipe.value = await userStore.getRecipe(id);
			nutritionInformation.value = await userStore.getRecipeNutritionInformation(id);
			similarRecipes.value = await userStore.getSimilarRecipes(id);
			previewNutritionWidget()
			isLoading.value = false;
		}

		function cleanRecipe() {
			selectedRecipe.value = "";
		}

		function previewNutritionWidget() {
			let names: any = []
			recipe.value.data.extendedIngredients.forEach((element: any) => {
				names.push(element.name)
			});

			var postContent = names.join("\n");
			var servings = recipe.value.data.servings;

			var xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function () {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					previewWidgetCallback(xmlHttp.responseText);
				}
			}
			xmlHttp.open("POST", 'https://api.spoonacular.com/recipes/visualizeNutrition?apiKey=' + import.meta.env.VITE_RAPID_API, true);
			xmlHttp.send('defaultCss=true&servings=' + servings + '&ingredientList=' + postContent);
		}


		function previewWidgetCallback(response: any) {
			var el = document.createElement("script");
			el.setAttribute("type", "text/javascript");
			el.setAttribute("src", "https://code.jquery.com/jquery-1.9.1.min.js");
			//@ts-ignore
			document.getElementById('previewWidget').contentDocument.head.appendChild(el);

			el = document.createElement("script");
			el.setAttribute("type", "text/javascript");
			el.setAttribute("src", "https://spoonacular.com/application/frontend/js/jquery.canvasjs.min");
			//@ts-ignore
			document.getElementById('previewWidget').contentDocument.head.appendChild(el);

			// wait until jquery is loaded
			setTimeout(function () {
				//@ts-ignore
				var iframeDocument = document.getElementById('previewWidget').contentDocument;
				iframeDocument.open();
				iframeDocument.write(response);
				iframeDocument.close();

				var el = document.createElement("script");
				el.setAttribute("type", "text/javascript");
				el.setAttribute("src", "https://spoonacular.com/application/frontend/js/nutritionWidget.min.js?c=1");
				//@ts-ignore
				document.getElementById('previewWidget').contentDocument.body.appendChild(el);
			}, 1000);
		}

		onMounted(async () => {
			isLoading.value = true;
			const id = route.params.id as string;
			mealPlanner.value = await userStore.getMealPlan(id);
			isLoading.value = false;
		});

		return {
			recipe,
			selectedRecipe,
			cleanRecipe,
			showRecipe,
			isLoading,
			nutritionInformation,
			similarRecipes,
			mealPlanner,
		}
	}
})
</script>

<style scoped>
table {
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

td,
th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
</style>
