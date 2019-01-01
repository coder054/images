import api from "../../api/imgur"
import { router } from "../../main"

const state = {
	images: [],
	isLoadingComplete: false
}

const getters = {
	images: state => state.images,
	column: state => state.column,
	isLoadingComplete: state => state.isLoadingComplete
}

const actions = {
	async fetchImages({ rootState, commit }) {
		const { token } = rootState.auth
		const result = await api.fetchImages(token)
		const {
			data: { data }
		} = result
		commit("setImages", data)
		commit("setLoadingComplete", true)
	},

	async uploadImages({ rootState }, images) {
		const { token } = rootState.auth
		// filter only image files
		const imagesOnly = Array.from(images).filter(image =>
			image.type.includes("image/")
		)

		await api.uploadImages(imagesOnly, token)
		router.push("/")
	}
}

const mutations = {
	setImages(state, images) {
		state.images = images
	},
	setLoadingComplete(state, complete) {
		state.isLoadingComplete = complete
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
