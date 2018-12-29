import api from "../../api/imgur"

const state = {
	token: null
}

const getters = {
	isLoggedIn: state => !!state.token
}

const actions = {
	login: () => {
		api.login()
	},
	logout: ({ commit }) => {
		commit("setToken", null) // the second parameter is the data of mutation
	}
}

const mutations = {
	setToken: (state, data) => {
		state.token = data
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
