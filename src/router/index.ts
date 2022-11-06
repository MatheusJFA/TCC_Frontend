import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';

import Layout from "../pages/Layout.vue";
import Home from "../pages/Home.vue";
import Landing from "../pages/Landing.vue";
import Login from "../components/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import Register from "../components/Register.vue";
import Recovery from "../components/Recovery.vue";
import VerifyEmail from '../components/VerifyEmail.vue';
import RedefinePassword from '../components/RedefinePassword.vue';
import NotFound from "../pages/error/404.vue";
import Unauthorized from "../pages/error/401.vue";


const routes: Array<RouteRecordRaw> = [
	{ path: '/404', name: '/404', component: NotFound, meta: { requiresAuth: false } },
	{ path: '/401', name: '/401', component: Unauthorized, meta: { requiresAuth: false } },
	{
		path: '/',
		name: 'layout',
		component: Layout,
		children: [
			{ path: '', name: "landing", component: Landing },
			{
				path: '/home', name: 'home', component: Home, children: [
					{ path: '/login', name: 'Login', component: Login },
					{ path: '/register', name: 'Register', component: Register },
					{ path: '/recovery', name: 'Recovery', component: Recovery },
					{
						path: '/verify-email',
						props: route => ({ query: route.query.token }),
						name: 'verifyEmail', component: VerifyEmail
					},
					{
						path: '/reset-password',
						props: route => ({ query: route.query.token }),
						name: 'resetPassword', component: RedefinePassword
					},
				],
			},
		]
	},
	{
		path: '/dashboard/:id',
		name: 'dashboard',
		props: route => ({ params: route.params.id }),
		component: Dashboard,
		meta: { requiresAuth: true }
	},
	{ path: '/:pathMatch(.*)*', redirect: '/404' }
];

const router = createRouter({
	history: createWebHistory("/"),
	routes
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
	const token = localStorage.getItem("refreshToken");
	if (to.meta.requiresAuth && !token) router.push({ name: "login" })
	else next();
});


export default router
