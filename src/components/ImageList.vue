<template>
	<div>
		<div class="select-column-wr" v-if="isLoggedIn">
			<span class="select-colum-label"> Select number of Columns: </span>
			<select class="select-column" v-model="column">
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>
		</div>

		<div :style="{columnCount: column }" v-if="isLoggedIn" class="img-wrapper">
			<img v-for="image in images" :src="image.link" :key="image.link">
		</div>
			<h2 v-else> Login to get started! </h2>

		</div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'


export default {
	name: 'ImageList',
	data() {
		return {
			column: 4
		}
	},
	computed: mapGetters(['images', 'isLoggedIn']),
	methods: mapActions(['fetchImages']),
	created() {
		this.fetchImages()
	}
}

</script>


<style scoped>

.img-wrapper {
	column-gap: 0;
}


.img-wrapper img {
	max-width: 100%;
	padding: 5px;
}

.select-column-wr{
	margin: 20px 0;
}

.select-colum-label{
	margin-right: 10px;
}
</style>