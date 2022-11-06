import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./style.css";

import i18n from "./i18n";

import { Buffer as BufferPolyfill } from 'buffer'
declare var Buffer: typeof BufferPolyfill;
globalThis.Buffer = BufferPolyfill

createApp(App)
	.use(Toast)
	.use(i18n)
	.use(createPinia())
	.use(router)
	.mount("#app")
