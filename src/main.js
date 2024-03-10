import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Toastifyfrom from "vue3-toastify";

const app = createApp(App);

app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
});

app.mount("#app");
