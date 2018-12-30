import Vue from "vue"
import App from "./App"
import VueRouter from "vue-router"
import AuthHandler from "./components/AuthHandler"
import ImageList from "./components/ImageList"
import UploadForm from "./components/UploadForm"
import About from "./components/About"
import Frontend from "./components/About-child-component/Frontend"
import Backend from "./components/About-child-component/Backend"
import store from "./store"

Vue.use(VueRouter)
export const router = new VueRouter({
	mode: "history", // to use browser router (default is hash router)
	routes: [
		{ path: "/oauth2/callback", component: AuthHandler },
		{ path: "/upload", component: UploadForm },
		{
			path: "/about",
			component: About,
			children: [
				{ path: "frontend", component: Frontend },
				{ path: "backend", component: Backend }
			]
		},
		{ path: "/", component: ImageList }
	]
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app")
