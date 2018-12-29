import api from "../../api/imgur"
import qs from "qs"

const state = {
	token: null
}

const getters = {
	isLoggedIn: state => !!state.token
}

const actions = {
	login() {
		api.login()
	},
	logout({ commit }) {
		commit("setToken", null) // the second parameter is the data of mutation
	},

	finalizeLogin({ commit }, hash) {
		alert(1)
		console.log("hash: ", hash)
		const query = qs.parse(hash.replace("#", ""))
		console.log("query", query)

		commit("setToken", query.access_token)
	}
}

const mutations = {
	setToken(state, data) {
		state.token = data
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
