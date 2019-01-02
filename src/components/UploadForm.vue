<template>
	<div class="upload-wr">
		<input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*">
		<span>Drag images here!</span>
		<div class="spinner-wr" v-if="isUploading">
			<img src="./spinner.gif" alt="">
		</div>
	</div>
</template>


<script>
import { mapGetters } from 'vuex'



import { mapActions } from 'vuex'


export default {
	name: 'UploadForm',
	computed: mapGetters(['isUploading']),
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

.spinner-wr{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
}

</style>
