<template>

	<div>
		<div>
			<select v-model="column">
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>
			<span>Columns: {{ column }}</span>
		</div>

		<div :style="{columnCount: column }" v-if="isLoggedIn" class="img-wrapper">
			<img v-for="image in images" :src="image.link">
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


<style>

.img-wrapper {
	
	column-gap: 0;

}


.img-wrapper img {
	max-width: 100%;
	padding: 5px;
}

</style>
