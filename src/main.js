import Vue from "vue"
import App from "./App"
import VueRouter from "vue-router"
import AuthHandler from "./components/AuthHandler"
import store from "./store"

Vue.use(VueRouter)
const router = new VueRouter({
	mode: "history", // to use browser router (default is hash router)
	routes: [{ path: "/oauth2/callback", component: AuthHandler }]
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")
