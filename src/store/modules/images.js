import api from "../../api/imgur"
import { router } from "../../main"

const state = {
	images: []
}

const getters = {
	images: state => state.images,
	column: state => state.column
}

const actions = {
	async fetchImages({ rootState, commit }) {
		const { token } = rootState.auth
		const result = await api.fetchImages(token)
		const {
			data: { data }
		} = result
		commit("setImages", data)
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
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
