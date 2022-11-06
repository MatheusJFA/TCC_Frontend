import router from "../router";
import services from "../services";
import { Role } from "../types/role.type";
import { Sex } from "../types/sex.type";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            id: '',
            name: '',
            email: '',
            birthdate: '',
            image: `https://dummyimage.com/100x100/fafafa/000000.jpg`,
            sex: Sex.MALE,
            role: Role.VISITOR,
        },
        experience: {
            level: 1,
            xp: 0,
            forNextLevel: 0,
            toNextlevel: 0,
            currentLevelRequiredExperience: 0
        },
        tokens: {
            accessToken: "",
            refreshToken: ""
        },
        nutrition: {
            BMI: {
                text: 0,
                value: ""
            }, // Body Mass Index

            BMR: { //Basal metabolic rate
                base: {
                    text: "",
                    value: 0
                },
                weekly: {
                    text: "",
                    value: 0
                },
                mifflinStJeor: {
                    text: "",
                    value: 0
                },
                harrisBenedict: {
                    text: "",
                    value: 0
                },
                katchMcArdle: {
                    text: "",
                    value: 0
                },
            },

            BMR_ACTIVITY: { //Basal metabolic rate during activities
                base: {
                    base: {
                        text: "",
                        value: 0
                    },
                    sedentary: {
                        text: "",
                        value: 0
                    },
                    slightly_active: {
                        text: "",
                        value: 0
                    },
                    moderately_active: {
                        text: "",
                        value: 0
                    },
                    very_active: {
                        text: "",
                        value: 0
                    },
                    extremely_active: {
                        text: "",
                        value: 0
                    },
                },
                mifflin: {
                    base: {
                        text: "",
                        value: 0
                    },
                    sedentary: {
                        text: "",
                        value: 0
                    },
                    slightly_active: {
                        text: "",
                        value: 0
                    },
                    moderately_active: {
                        text: "",
                        value: 0
                    },
                    very_active: {
                        text: "",
                        value: 0
                    },
                    extremely_active: {
                        text: "",
                        value: 0
                    },
                },
            },

            IBW: { //Ideal body weight
                hanwi: {
                    text: "",
                    value: 0
                },
                miller: {
                    text: "",
                    value: 0
                },
                devine: {
                    text: "",
                    value: 0
                },
                robinson: {
                    text: "",
                    value: 0
                },
                range: {
                    maximun: {
                        text: "",
                        value: 0
                    },
                    minimun: {
                        text: "",
                        value: 0
                    }
                },
            },

            MMP: { //Maximum Muscular Potential
                maximun: {
                    text: "",
                    value: 0
                },
                minimun: {
                    text: "",
                    value: 0
                }
            },

            fatPercentage: { //Fat percentage
                text: "",
                value: 0
            },

            MNC: { //Macronutrients Calculations
                proteins: {
                    text: "",
                    value: 0
                },
                fats: {
                    text: "",
                    value: 0
                },
                carbs: {
                    text: "",
                    value: 0
                },
            },

            LBM: { // Lean Body Mass
                boer: {
                    text: "",
                    value: 0
                },
                hume: {
                    text: "",
                    value: 0
                },
                james: {
                    text: "",
                    value: 0
                }
            }
        },
    }),

    actions: {
        clearUserInformation() {
            this.$reset();
        },

        async createUser(name: string, email: string, password: string, birthdate: string, sex: string, height: number, weight: number, helpers: string[]) {
            await services.client.createClient(name, email, password, birthdate, sex, height, weight, helpers);
            await this.sendVerificationEmail(email);
        },

        async getAllExercises() {
            return await services.client.getAllExercises();
        },

        async getRecipe(id: number) {
            return await services.client.getRecipe(id)
        },

        async getSimilarRecipes(id: number) {
            return await services.client.getSimilarRecipes(id)
        },

        async getRecipeNutritionInformation(id: number) {
					 const response = await services.client.getRecipeNutritionInformation(id)
            return response.data;
        },

        async getAllExercisesByBodyPart(bodyPart: string) {
            return await services.client.getAllExercisesByBodyPart(bodyPart);
        },

        async getAllExercisesByEquipment(equipment: string) {
            return await services.client.getAllExercisesByEquipments(equipment)
        },

        async getAllExercisesByTargetMuscle(targetMuscle: string) {
            return await services.client.getAllExercisesByTargetMuscle(targetMuscle)
        },

        async getMealPlan(id: string) {
            return await services.client.getMealPlan(id);
        },

        async getBodyPartList() {
            return await services.client.getBodyPartList();
        },

        async getEquipmentsList() {
            return await services.client.getEquipmentsList();
        },

        async getTargetMuscleList() {
            return await services.client.getTargetMuscleList();
        },

        async getExperience(id: string) {
            const experience = await services.client.getExperience(id);
            this.$patch({
                experience
            })
        },

        async addExperience(id: string, exp: number) {
            const experience = await services.client.addExperience(id, exp);
            this.$patch({
                experience
            })
        },

        async getHealthData(id: string) {
            const values = await services.client.getClientHealthData(id);

            const BMI = { // Body Mass Index
                text: values.BMI.value,
                value: values.BMI.text
            };

            const BMR = { //Basal metabolic rate
                base: { text: "Base", value: values.BMR.base },
                weekly: { text: "Weekly", value: values.BMR.weekly },
                mifflinStJeor: { text: "Mifflin-St Jeor", value: values.BMR.mifflinStJeor },
                harrisBenedict: { text: "Harris Bendict", value: values.BMR.harrisBenedict },
                katchMcArdle: { text: "Katch McArdle", value: values.BMR.katchMcArdle },
            };

            const BMR_ACTIVITY = { //Basal metabolic rate during activities
                base: {
                    base: { text: "Base", value: values.BMR_ACTIVITY.base.base },
                    sedentary: { text: "Sedentary", value: values.BMR_ACTIVITY.base.sedentary },
                    slightly_active: { text: "Light Exercise", value: values.BMR_ACTIVITY.base.slightly_active },
                    moderately_active: { text: "Moderate Exercise", value: values.BMR_ACTIVITY.base.moderately_active },
                    very_active: { text: "Heavy Exercise", value: values.BMR_ACTIVITY.base.very_active },
                    extremely_active: { text: "Athlete", value: values.BMR_ACTIVITY.base.extremely_active },
                },
                mifflin: {
                    base: { text: "Base", value: values.BMR_ACTIVITY.mifflin.base },
                    sedentary: { text: "Sedentary", value: values.BMR_ACTIVITY.mifflin.sedentary },
                    slightly_active: { text: "Light Exercise", value: values.BMR_ACTIVITY.mifflin.slightly_active },
                    moderately_active: { text: "Moderate Exercise", value: values.BMR_ACTIVITY.mifflin.moderately_active },
                    very_active: { text: "Heavy Exercise", value: values.BMR_ACTIVITY.mifflin.very_active },
                    extremely_active: { text: "Athlete", value: values.BMR_ACTIVITY.mifflin.extremely_active },
                }
            };

            const IBW = { //Ideal body weight
                hanwi: { text: "G.J.Hamwi Formula (1964)", value: values.IBW.hanwi },
                miller: { text: "D.R.Miller Formula(1983)", value: values.IBW.miller },
                devine: { text: "B.J.Devine Formula (1974)", value: values.IBW.devine },
                robinson: { text: "J.D.Robinson Formula(1983)", value: values.IBW.robinson },
                range: {
                    maximun: {
                        text: "Maximum",
                        value: values.IBW.range.maximun
                    },
                    minimun: {
                        text: "Minimun",
                        value: values.IBW.range.minimun
                    }
                }
            };


            const MMP = { //Maximum Muscular Potential
                maximun: { text: "Maximun", value: values.MMP.maximun },
                minimun: { text: "Minimun", value: values.MMP.minimun },
            };

            const fatPercentage = {
                text: "Fat percentage (%)",
                value: values.fatPercentage
            };

            const MNC = { //Macronutrients Calculations
                proteins: {
                    text: "Proteins",
                    value: values.MNC.diet.proteins
                },
                fats: {
                    text: "Fats",
                    value: values.MNC.diet.fats
                },
                carbs: {
                    text: "Carbs",
                    value: values.MNC.diet.carbs
                },
            };

            const LBM = { // Lean Body Mass
                boer: { text: "Boer", value: values.LBM.boer },
                hume: { text: "Hume", value: values.LBM.hume },
                james: { text: "James", value: values.LBM.james }
            };

            const nutrition = {
                BMI,
                BMR,
                BMR_ACTIVITY,
                IBW,
                MMP,
                fatPercentage,
                MNC,
                LBM
            }

            this.$patch({
                nutrition
            })
        },

        async getSexValues() {
            return await services.client.getSexValues();
        },

        async sendEmail(name: string, email: string, message: string) {
            await services.authorization.sendContact(name, email, message);
        },

        async sendVerificationEmail(email: string) {
            await services.authorization.sendVerificationEmail(email);
        },

        async sendResetPasswordEmail(email: string) {
            await services.authorization.sendForgetPasswordEmail(email);
        },

        async verifyAccountEmail(token: string) {
            await services.authorization.verifyEmail(token);
        },

        async resetPasswordAccount(password: string, token: string) {
            await services.authorization.resetPassword(password, token);
        },

        async logout() {
            const token = localStorage.getItem("refreshToken") || "";
            await services.authorization.logout(token);
            this.clearUserInformation();

            localStorage.removeItem("refreshToken")
            localStorage.removeItem("accessToken")

            router.push({ name: "landing" });
        },

        async login(email: string, password: string) {
            const data = await services.authorization.login(email, password);

            const user = data.user;
            const tokens = data.tokens;

            this.$patch({
                user,
                tokens
            });

            localStorage.setItem("refreshToken", tokens.refreshToken)
            localStorage.setItem("accessToken", tokens.accessToken)

            router.push({ path: `/dashboard/${user.id}`, params: { id: user.id } });
        },


    },
});

