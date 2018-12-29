import Vue from "vue"
import App from "./App"
import VueRouter from "vue-router"
import AuthHandler from "./components/AuthHandler"
import ImageList from "./components/ImageList"
import UploadForm from "./components/UploadForm"
import store from "./store"

Vue.use(VueRouter)
export const router = new VueRouter({
	mode: "history", // to use browser router (default is hash router)
	routes: [
		{ path: "/oauth2/callback", component: AuthHandler },
		{ path: "/upload", component: UploadForm },
		{ path: "/", component: ImageList }
	]
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")
