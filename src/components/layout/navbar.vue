<template>
	<nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
		<div class="container px-4 mx-auto flex flex-wrap items-center align-middle justify-between">
			<div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
				<a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
					href="#"> Healthier </a><button
					class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
					type="button" @click="toggleNavbar()">
					<Bars3Icon class="w-6 h-6 text-white" />
				</button>
			</div>
			<div class="lg:flex flex-grow items-center rounded-br-md rounded-bl-md  ease-in-out duration-300  flex-row  justify-end bg-white bg-opacity-75 lg:bg-transparent lg:shadow-none"
				v-bind:class="{'hidden': !state.showMenu, 'block': state.showMenu}">
				<ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
					<!-- <li class="flex flex-row w-full justify-end">
						<router-link to="login">
							<button
								class="bg-white text-gray-800 flex flex-row items-center gap-2 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 m-3 md:m-0"
								type="button" style="transition: all 0.15s ease 0s;">
								<UserGroupIcon class="w-5 h-5" /> Join the helpers team	
							</button>
						</router-link>
					</li> -->

					<li class="flex flex-row w-full justify-end">
						<router-link to="register">
							<button
								class="bg-white text-gray-800 flex flex-row items-center gap-2 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 m-3 md:m-0"
								type="button" style="transition: all 0.15s ease 0s;">
								<UserPlusIcon class="w-5 h-5" /> Create an account
							</button>
						</router-link>
					</li>

					<li class="flex flex-row w-full justify-end">
						<router-link to="login">
							<button
								class="bg-white text-gray-800 flex flex-row items-center gap-2 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 m-3 md:m-0"
								type="button" style="transition: all 0.15s ease 0s;">
								<ArrowRightOnRectangleIcon class="w-6 h-6" /> Login
							</button>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script lang="ts">
import { Bars3Icon, ArrowRightOnRectangleIcon, UserPlusIcon, UserGroupIcon } from "@heroicons/vue/24/solid"
import { defineComponent, reactive } from "vue"

export default defineComponent({
	setup() {
		const state = reactive({ showMenu: false })

		const toggleNavbar = () => {
			state.showMenu = !state.showMenu;
		}


		return {
			state,
			toggleNavbar
		}
	},
	components: {
		Bars3Icon,
		ArrowRightOnRectangleIcon,
		UserPlusIcon,
		UserGroupIcon
	}
});
</script>
