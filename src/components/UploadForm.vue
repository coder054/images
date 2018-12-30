<template>
	<div class="upload-wr">
		<input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*">
		<span>Drag images here!</span>

	</div>
</template>


<script>
import { mapActions } from 'vuex'


export default {
	name: 'UploadForm',
	methods: mapActions(['uploadImages'])
}

</script>


<style scoped>
.upload-wr {
	height: 30vh;
	border: 2px dashed #999;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}

.upload-wr:hover {
	background-color: #eee;
}

input {
	border: 1px solid red;
	width: 100%;
	height: 30vh;
	position: absolute;
	opacity: 0
}

</style>
