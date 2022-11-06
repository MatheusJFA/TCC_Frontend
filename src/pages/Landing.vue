<template>
	<navbar-component />
	<main>
		<div
			class="relative pt-16 pb-32 flex content-center items-center justify-center"
			style="min-height: 75vh;">
			<div
				class="absolute top-0 w-full h-full bg-center bg-cover"
				style='background-image:url("/assets/images/bg-pattern.png");'>
				<span
					id="blackOverlay"
					class="w-full h-full absolute opacity-75 bg-stone-900"></span>
			</div>
			<div class="container relative mx-auto">
				<div class="items-center flex flex-wrap">
					<div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
						<div>
							<h1 class="text-white font-semibold text-4xl">
								Healthier - Nutrition and Exercises
							</h1>
							<p class="mt-4 text-lg text-gray-300">
								This is an app that was created to help and encourage people to get
								a healthier lifestyle and guide you with the best professionals.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="top-auto bottom-0 left-0 right-0 w-full h-16 md:h-20 lg:h-28 absolute pointer-events-none overflow-hidden">
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0">
					<polygon
						class="text-leafgreen-400 fill-current"
						points="2560 0 2560 100 0 100"></polygon>
				</svg>
			</div>
		</div>
		<section class="pb-20 bg-leafgreen-400 -mt-24">
			<div class="container mx-auto px-4">
				<div class="flex flex-wrap">
					<div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
						<div
							class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
							<div class="px-4 py-5 flex-auto">
								<div
									class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
									<img src="/assets/icons/nutricao.svg" alt="Nutrição">
								</div>
								<h6 class="text-xl font-semibold">Nutrition</h6>
								<p class="mt-2 mb-4 text-gray-600">
									Search for information about food and count on our food recommendation system.
								</p>
							</div>
						</div>
					</div>
					<div class="w-full md:w-4/12 px-4 text-center">
						<div
							class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
							<div class="px-4 py-5 flex-auto">
								<div
									class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sandybrown-1000">
									<img src="/assets/icons/fitness_center.svg" alt="Exercícios">
								</div>
								<h6 class="text-xl font-semibold">Exercises</h6>
								<p class="mt-2 mb-4 text-gray-600">
									Based on your data, we will make recommendations for exercises, according to your
									needs.
								</p>
							</div>
						</div>
					</div>
					<div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
						<div
							class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
							<div class="px-4 py-5 flex-auto">
								<div
									class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-mediumslateblue-1000">
									<img src="/assets/icons/group.svg" alt="Comunicação">
								</div>
								<h6 class="text-xl font-semibold">Communication with professionals</h6>
								<p class="mt-2 mb-4 text-gray-600">
									Clear your doubts with professionals from different areas.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap items-center mt-32">
					<div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
						<div
							class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
							<object type="image/svg+xml" data="/assets/icons/group.svg" class="text-cyan-500">
								User
							</object>
						</div>
						<h3 class="text-3xl mb-2 font-semibold leading-normal">
							We seek to meet all your physical and psychological needs
						</h3>
						<p
							class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
							To meet your needs, you can be assisted by professionals in the area, who
							will clarify your doubts and help you in all difficulties.
						</p>
					</div>
					<div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
						<div
							class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-leafgreen-900">
							<img
								alt="..."
								src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
								class="w-full align-middle rounded-t-lg" />
							<blockquote class="relative p-8 mb-4">
								<svg
									preserveAspectRatio="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 583 95"
									class="absolute left-0 w-full block"
									style="height: 95px; top: -94px;">
									<polygon
										points="-30,95 583,95 583,65"
										class="text-leafgreen-900 fill-current"></polygon>
								</svg>
								<h4 class="text-xl font-bold text-white">
									You assemble your team.
								</h4>
								<p class="text-md font-light mt-2 text-white">
									To improve your help, a list of helpers will be made available with several
									specialties.
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="relative py-20">
			<div
				class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
				style="height: 80px;">
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0">
					<polygon
						class="text-white fill-current"
						points="2560 0 2560 100 0 100"></polygon>
				</svg>
			</div>
		</section>
		<section class="pt-10 md:pt-20 pb-48">
			<div class="container mx-auto px-2 md:px-4 lg:px-5  ">
				<div class="flex flex-wrap justify-center text-center mb-24">
					<div class="w-full lg:w-6/12 px-4">
						<h2 class="text-4xl font-semibold">Our Team</h2>
						<p class="text-lg leading-relaxed m-4 text-gray-600">
							Our team is made up of undergraduates in Information Systems at the Pontifical University
							Catholic of Minas Gerais
						</p>
					</div>
				</div>
				<div class="flex flex-wrap">
					<div class="w-full md:w-6/12 lg:w-3/6 lg:mb-0 mb-12 px-4">
						<div class="px-6">
							<img
								alt="Celson Fernando"
								src="/assets/avatars/celson_img.png"
								class="shadow-lg rounded-full max-w-full mx-auto"
								style="max-width: 120px;" />
							<div class="pt-6 text-center">
								<h5 class="text-xl font-bold">Celson Fernando</h5>
								<p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
									Developer and UI/UX Designer
								</p>
							</div>
						</div>
					</div>
					<div class="w-full md:w-6/12 lg:w-3/6 lg:mb-0 mb-12 px-4">
						<div class="px-6">
							<img
								alt="Matheus José"
								src="/assets/avatars/matheus_img.png"
								class="shadow-lg rounded-full max-w-full mx-auto"
								style="max-width: 120px;" />
							<div class="pt-6 text-center">
								<h5 class="text-xl font-bold">Matheus José</h5>
								<p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
									Founder, CEO and Developer
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="pb-20 relative block bg-green-900">
			<div
				class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
				style="height: 80px;">
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0">
					<polygon
						class="text-green-900 fill-current"
						points="2560 0 2560 100 0 100"></polygon>
				</svg>
			</div>
			<div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
				<div class="flex flex-wrap text-center justify-center">
					<div class="w-full lg:w-6/12 px-4 sm:pt-10 pt-10">
						<h2 class="text-4xl font-semibold text-white">Are you have a question?</h2>
					</div>
				</div>
			</div>
		</section>
		<section class="relative block py-24 lg:pt-0 bg-green-900">
			<div class="container mx-auto px-4">
				<div class="flex flex-wrap justify-center lg:-mt-64 sm-mt-48">
					<div class="w-full lg:w-6/12 px-4">
						<div
							class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
							<div class="flex-auto p-5 lg:p-10">
								<h4 class="text-2xl font-semibold">Want to talk with us ?</h4>
								<p class="leading-relaxed mt-1 mb-4 text-gray-600">
									Send us an email and we will get back to you as soon as possible.
								</p>
								<div class="relative w-full mb-3 mt-8">
									<label
										class="block uppercase text-gray-700 text-xs font-bold mb-2"
										for="full-name">Full name</label><input
										type="text"
										v-model="contact.name"
										class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
										placeholder="Full Name"
										style="transition: all 0.15s ease 0s;" />
								</div>
								<div class="relative w-full mb-3">
									<label
										class="block uppercase text-gray-700 text-xs font-bold mb-2"
										for="email">E-mail</label><input
										type="email"
										v-model="contact.email"
										class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
										placeholder="E-mail"
										style="transition: all 0.15s ease 0s;" />
								</div>
								<div class="relative w-full mb-3">
									<label
										class="block uppercase text-gray-700 text-xs font-bold mb-2"
										for="message">Message</label><textarea
										rows="4"
										cols="80"
										v-model="contact.message"
										class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
										placeholder="Insert a message..."></textarea>
								</div>
								<div class="text-center mt-6">
									<button
										class="bg-green-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
										type="button"
										@click="sendEmail"
										style="transition: all 0.15s ease 0s;">
										Send
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer-component />
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import { useI18n } from 'vue-i18n';
import { useUserStore } from '../store/user';
import { useToast } from "vue-toastification"

import NavbarComponent from "../components/layout/Navbar.vue";
import FooterComponent from "../components/layout/Footer.vue";
import { onMounted } from "vue";


export default defineComponent({
	components: {
		NavbarComponent,
		FooterComponent
	},

	setup() {
		const { t } = useI18n();
		const userStore = useUserStore();
		const toast = useToast();

		let contact = reactive({
			name: "",
			email: "",
			message: ""
		});


		async function sendEmail() {
			try {
				await userStore.sendEmail(contact.name, contact.email, contact.message);
				toast.success(t("SUCCESS.EMAIL_SEND.CONTACT"))
			} catch (error) {
				toast.clear();
				toast.error(t("ERROR.HTTP.SERVER_ERROR"));
				return false;
			}
			finally {
				clearContactInformation();
			}
		}
		
		onMounted(() => {
			localStorage.removeItem("refreshToken");
            localStorage.removeItem("accessToken");
		});

		function clearContactInformation() {
			contact.name = "";
			contact.email = "";
			contact.message = "";
		}

		window.stores = { userStore }

		return {
			t,
			contact,
			sendEmail
		}
	},
});
</script>

<style scope>

</style>
