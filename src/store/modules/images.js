import api from "../../api/imgur"
import { router } from "../../main"
import { getdateAndTimeFromDateString } from "../helpers/time"

const state = {
	images: [],
	isLoadingComplete: false,
	imageIndex: 0,
	bandwidth: 0,
	datetime: 0,
}

const getters = {
	images: state => state.images,
	column: state => state.column,
	isLoadingComplete: state => state.isLoadingComplete,
	imageIndex: state => state.imageIndex,
	image: state => {
		if (typeof state.images == undefined) {
			return {}
		} else {
			return state.images[state.imageIndex] || {}
		}
	},
	isMaxIndex: state => {
		return state.imageIndex == state.images.length - 1
	},
	bandwidth: state => {
		let x = (state.images[state.imageIndex].bandwidth / 1024 / 1024).toFixed(2)
		return x.toString() + " MB"
	},
	datetime: state => {
		let datetimeString = state.images[state.imageIndex].datetime
		return getdateAndTimeFromDateString(datetimeString)
	},
}

const actions = {
	async fetchImages({ rootState, commit }) {
		commit("setLoadingComplete", false)
		const { token } = rootState.auth
		const result = await api.fetchImages(token)
		const {
			data: { data },
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
		// commit("setImageIndex", 0)
		router.push("/")
		window.location.reload()
	},

	clickImage({ commit, dispatch }, index) {
		commit("setImageIndex", index)
		setTimeout(function() {
			dispatch("showModal")
		}, 150)
	},

	showModal() {
		$(".ui.modal").modal("show")
	},

	nextImage({ commit }) {
		commit("nextIndex")
	},

	prevImage({ commit }) {
		commit("prevIndex")
	},
}

const mutations = {
	setImages(state, images) {
		state.images = images
	},
	setLoadingComplete(state, complete) {
		state.isLoadingComplete = complete
	},
	setImageIndex(state, index) {
		state.imageIndex = index
	},

	nextIndex(state) {
		state.imageIndex = state.imageIndex + 1
	},

	prevIndex(state) {
		state.imageIndex = state.imageIndex - 1
	},
}

export default {
	state,
	getters,
	actions,
	mutations,
}
