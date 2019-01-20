import Vue from "vue"
import App from "./App"
import VueRouter from "vue-router"
import AuthHandler from "./components/AuthHandler"
import ImageList from "./components/ImageList"
import UploadForm from "./components/UploadForm"
import About from "./components/About"
import Frontend from "./components/About-child-component/Frontend"
import Backend from "./components/About-child-component/Backend"
import NotFound from "./components/NotFound"
import store from "./store"
import SuiVue from "semantic-ui-vue"
import requireAuth from "./HOCs/requireAuth"

Vue.use(VueRouter)
Vue.use(SuiVue)
export const router = new VueRouter({
	mode: "history", // to use browser router (default is hash router)
	routes: [
		{ path: "/oauth2/callback", component: AuthHandler },
		{ path: "/upload", component: requireAuth(UploadForm) },
		{
			path: "/about",
			component: About,
			children: [
				{ path: "frontend", component: Frontend },
				{ path: "backend", component: Backend },
			],
		},
		{ path: "/", component: ImageList },
		{ path: "*", component: NotFound },
	],
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app")
