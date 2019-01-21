import api from "../../api/imgur"
import { router } from "../../main"
import { getdateAndTimeFromDateString } from "../helpers/time"

const state = {
	images: [],
	isLoadingComplete: false,
	isUploading: false,
	imageIndex: 0,
	bandwidth: 0,
	datetime: 0,
	openStateForModalViewImage: false,
	deletehash: "",
	openStateForModalEditTitleAndDesc: false,
	title: "",
	description: "",
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
	bandwidth: (state, { image }) => {
		let x = (image.bandwidth / 1024 / 1024).toFixed(2)
		return x.toString() + " MB"
	},
	datetime: (state, { image }) => {
		let datetimeString = image.datetime
		return getdateAndTimeFromDateString(datetimeString)
	},
	openStateForModalViewImage: state => state.openStateForModalViewImage,
	openStateForModalEditTitleAndDesc: state =>
		state.openStateForModalEditTitleAndDesc,
	isUploading: state => state.isUploading,
	deletehash: state => state.deletehash,
	isAskingForDelete: state => !!state.deletehash,
	title: state => state.title,
	description: state => state.description,
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

	async uploadImages({ rootState, commit }, images) {
		commit("setUploading", true)
		const { token } = rootState.auth
		// filter only image files
		const imagesOnly = Array.from(images).filter(image =>
			image.type.includes("image/")
		)

		await api.uploadImages(imagesOnly, token)
		// commit("setImageIndex", 0)
		commit("setUploading", false)
		router.push("/")
		commit("setterr", {
			propertyName: "notiContent",
			value: "Upload Completed!",
		})
		commit("togglee", "showNoti")
		// window.location.reload()
	},

	clickImage({ commit, dispatch }, index) {
		commit("setImageIndex", index)
		dispatch("toggle", "openStateForModalViewImage")
		dispatch("setTitleAndDesc")
	},

	setTitleAndDesc({ commit, rootGetters }) {
		commit("setter", { propertyName: "title", value: rootGetters.image.title })
		commit("setter", {
			propertyName: "description",
			value: rootGetters.image.description,
		})
	},

	nextImage({ commit, dispatch }) {
		commit("nextIndex")
		dispatch("setTitleAndDesc")
	},

	prevImage({ commit, dispatch }) {
		commit("prevIndex")
		dispatch("setTitleAndDesc")
	},

	toggle({ commit }, propertyName) {
		commit("toggle", propertyName)
	},

	async deleteImage({ rootState, dispatch, commit }, imageHash) {
		const { token } = rootState.auth
		await api.deleteImage(imageHash, token)
		commit("setDeleteHash", "")
		commit("setterr", {
			propertyName: "notiContent",
			value: "Delete Successfuly!",
		})
		commit("togglee", "showNoti")
		dispatch("fetchImages")
	},

	async editTitleAndDesc(
		{ rootState, dispatch, commit },
		{ imageHash, title, description }
	) {
		const { token } = rootState.auth
		await api.editTitleAndDesc(imageHash, title, description, token)
		dispatch("fetchImages")
		commit("toggle", "openStateForModalEditTitleAndDesc")
		commit("toggle", "openStateForModalViewImage")
		commit("setterr", {
			propertyName: "notiContent",
			value: "Updated Title and Description!",
		})
		commit("togglee", "showNoti")

		commit("setter", { propertyName: "title", value: "" })
		commit("setter", { propertyName: "description", value: "" })
	},
	setDeleteHash({ commit }, hash) {
		commit("setDeleteHash", hash)
	},

	setter({ commit }, { propertyName, value }) {
		commit("setter", { propertyName, value })
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

	toggle(state, propertyName) {
		state[propertyName] = !state[propertyName]
	},

	setUploading(state, a) {
		state.isUploading = a
	},

	setDeleteHash(state, hash) {
		state.deletehash = hash
	},

	setter(state, { propertyName, value }) {
		state[propertyName] = value
	},
}

export default {
	state,
	getters,
	actions,
	mutations,
}
