import qs from "qs"
import axios from "axios"
const ROOT_URL = "https://api.imgur.com"
var CLIENT_ID

if (process.env.NODE_ENV === "production") {
	CLIENT_ID = "d239260532aebc3"
} else {
	CLIENT_ID = "ac39241553ecb4f"
}

export default {
	login() {
		const queryString = {
			client_id: CLIENT_ID,
			response_type: "token",
		}

		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
			queryString
		)}`
		//  window.location = `${ROOT_URL}/oauth2/authorize?client_id=${CLIENT_ID}&response_type=token`
	},

	fetchImages(token) {
		return axios.get(`${ROOT_URL}/3/account/me/images`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	uploadImages(images, token) {
		const promises = Array.from(images).map(image => {
			const formData = new FormData()
			formData.append("image", image)
			return axios.post(`${ROOT_URL}/3/image`, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
		})

		return Promise.all(promises)
	},

	async deleteImage(imageHash, token) {
		return axios.delete(`${ROOT_URL}/3/image/${imageHash}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	async editTitleAndDesc(imageHash, title, description, token) {
		return axios.post(
			`${ROOT_URL}/3/image/${imageHash}`,
			{ title, description },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		)
	},
}

export const name = "TUANANH"
