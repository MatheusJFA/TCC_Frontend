import { AxiosInstance } from "axios";
import { Buffer } from "buffer";

export default (httpClient: AxiosInstance) => ({
	createClient: async (
		name: string,
		email: string,
		password: string,
		birthdate: string,
		sex: string,
		height: number,
		weight: number,
		helpers: string[]) => {


		const encodedPassword = Buffer.from(`${password}`).toString("base64");

		const response = await httpClient.post("/client", {
			user: {
				name,
				email,
				birthdate,
				sex,
				height,
				weight,
				helpers,
			}
		}, {
			headers: {
				authorization: `Basic ${encodedPassword}`
			},
		});

		return response.data;
	},

	getClient: async (id: string) => {
		const response = await httpClient.get("/client/" + id);
		return response.data;
	},

	getMealPlan: async (id: string) => {
		const response = await httpClient.get("/nutrition/mealPlan/" + id);
		return response.data;
	},

	getRecipe: async (id: number) => {
		const response = await httpClient.get("/nutrition/getRecipe/" + id);
		return response.data;
	},
	
	getSimilarRecipes: async (id: number) => {
		const response = await httpClient.get("/nutrition/getSimilarRecipes/" + id);
		return response.data;
	},
	
	getRecipeNutritionInformation: async (id: number) => {
		const response = await httpClient.get("/nutrition/getNutrition/" + id);
		return response.data;
	},

	getExperience: async (id: string) => {
		const response = await httpClient.get("/client/exp/" + id);
		return response.data;
	},

	addExperience: async (id: string, experience: number) => {
		const response = await httpClient.post("/client/exp/" + id, {
			experience
		});
		return response.data;
	},

	getAllExercises: async () => {
		const response = await httpClient.get("/exercise/all", {});
		return response.data;
	},

	getAllExercisesByBodyPart: async (bodyPart: string) => {
		const response = await httpClient.get("/exercise/bodyParts/" + bodyPart, {});
		return response.data;
	},

	getAllExercisesByEquipments: async (equipment: string) => {
		const response = await httpClient.get("/exercise/equipments/" + equipment, {});
		return response.data;
	},

	getAllExercisesByTargetMuscle: async (targetMuscle: string) => {
		const response = await httpClient.get("/exercise/targetMuscles/" + targetMuscle, {});
		return response.data;
	},

	getClientHealthData: async (id: string) => {
		const response = await httpClient.get("/client/getDietValues/" + id);
		return response.data;
	},

	getSexValues: async () => {
		const response = await httpClient.get("/drop/getSexValues");
		return response.data;
	},

	getBodyPartList: async () => {
		const response = await httpClient.get("/drop/bodyPartsList");
		return response.data.bodyPartsValues;
	},

	getEquipmentsList: async () => {
		const response = await httpClient.get("/drop/equipmentsList");
		return response.data.equipmentsValues;
	},
	
	getTargetMuscleList: async () => {
		const response = await httpClient.get("/drop/targetMuscleList");
		return response.data.targetMusclesValues;
	},
	
	getClients: async () => {
		const response = await httpClient.get("/client");
		return response.data;
	}
});
