<template>
	<div>
		<sui-modal v-model="openStateForModalViewImage">
			<i v-if="imageIndex > 0" @click="prevImage" class="angle left icon prev-button"></i>
			<i v-if="!isMaxIndex" @click="nextImage" class="angle right icon next-button"></i>

			<i @click="toggle('openStateForModalViewImage')" class="close icon"></i>
			<div class="black-band">
				<span> <label for="img-name"> Name:  </label> <span id="img-name"> {{ image.name ? image.name : "unknown" }} </span> </span>
				<span> <label for="img-view"> Views:  </label> <span id="img-view"> {{image.views}} </span> </span>
				<span> <label for="img-time"> Submitted:  </label> <span id="img-time"> {{datetime}} </span> </span>
				<span> <label for="img-bandwidth"> Bandwith:  </label> <span id="img-bandwidth"> {{bandwidth}} </span> </span>
			</div>

			<div class="img-model-wr">
				<img :src="image.link" :alt="image.name">
			</div>

			<div class="title-and-desc-wr">
				<div class="left">
					<p class="title-img"> {{image.title}} </p>
					<p class="desc-img"> {{image.description}} </p>
				</div>
				<div class="right">
					<span @click="toggle('openStateForModalEditTitleAndDesc')" > edit title/description </span>
				</div>


			</div>
		</sui-modal>
	</div>

</template>


<script>
	import {mapActions, mapGetters} from 'vuex'
	
export default {
	name: 'Modal',
	methods: {
		...mapActions([ 'nextImage', 'prevImage', 'toggle' ])
	},

	computed: mapGetters(['isMaxIndex', 'imageIndex', 'bandwidth', 'datetime', 'image', 'openStateForModalViewImage', 'title', 'description']),


}
</script>


<style scoped>

	





.black-band{
	background-color: black;
	padding: 15px;
	color: white;
	display: flex; 
	flex-direction: row;
	justify-content: space-between; /* rat quan trong */
	flex-wrap: wrap;
}


.black-band > span > span {
	color: aqua;
	padding-left: 5px;
}


.img-model-wr{
	text-align: center;
	padding: 20px;
}

.img-model-wr img{
	max-width: 800px;
	max-height: 400px;

/*		max-width: 300px;
	max-height: 150px;*/
}

.next-button, .prev-button{
	position: absolute;
	cursor: pointer;
	 top: 50%;
	transform: translateY(-50%);
	font-size: 30px;
	
}

.next-button{
	right: 0;
}

.prev-button{
	left: 0;
}

.title-and-desc-wr{
	display: flex; 
flex-direction: row;
justify-content: space-between; /* rat quan trong */
flex-wrap: wrap;
	background-color: #000;
	padding: 10px 20px;
	color: white;
}


.title-and-desc-wr .right{
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;
}

.title-and-desc-wr .right span{
	cursor: pointer;
}

</style>
