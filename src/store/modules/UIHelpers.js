const state = {
	showNoti: false,
	notiContent: "",
}

const getters = {
	showNoti: state => state.showNoti,
	notiContent: state => state.notiContent,
}

const actions = {
	togglee({ commit }, propertyName) {
		commit("togglee", propertyName)
	},
	setterr({ commit }, { propertyName, value }) {
		commit("setterr", { propertyName, value })
	},
}

const mutations = {
	togglee(state, propertyName) {
		state[propertyName] = !state[propertyName]
	},
	setterr(state, { propertyName, value }) {
		state[propertyName] = value
	},
}

export default {
	state,
	getters,
	actions,
	mutations,
}
