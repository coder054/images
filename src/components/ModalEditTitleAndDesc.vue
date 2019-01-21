<template>
	<div class="modal-edit-title-desc">
		<sui-modal v-model="openStateForModalEditTitleAndDesc">
		
			<i @click="toggle('openStateForModalEditTitleAndDesc')" class="close icon"></i>
			
			<div class="title-edit-modal"> Edit title and desciption </div>

			<div class="input-edit-title-wr">
				<input :value="title" @input="setter({propertyName: 'title', value: $event.target.value })" type="text">
			</div>

			<div class="textarea-edit-desc-wr">
				<textarea :value="description" @input="setter({propertyName: 'description', value: $event.target.value })"  >  </textarea>
			</div>

			<div>
				<button @click="editTitleAndDesc({imageHash: image.deletehash, title, description})" class="save-info-edit"> Save </button>
			</div>

		</sui-modal>  
	</div>

</template>


<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'


export default {
	name: 'ModalEditTitleAndDesc',
	computed: mapGetters(['openStateForModalEditTitleAndDesc', 'title', 'description', 'image']),

	methods: {
		...mapActions([ 'toggle', 'setter', 'editTitleAndDesc' ]),
	}
}

</script>


<style>
.modal-edit-title-desc div.modal{
	max-width: 500px!important;
	padding: 20px;
	background-color: rgb(44, 47, 52);
	color: white;
	
}


.title-edit-modal{
	text-transform: uppercase;
	border-bottom: 1px solid #ddd;
	padding-bottom: 15px;
	margin-bottom: 20px;
}

.input-edit-title-wr input, .textarea-edit-desc-wr textarea{
	width: 100%;
	font-family: inherit;
border: 1px solid transparent;
box-shadow: inset 0 1px 1px rgba(0,0,0,.1);
background-color: #191919;

outline: 0;

box-sizing: border-box;

padding: 5px 10px;
font-size: .9em;
line-height: 1.5em;
resize: none;
color: #f2f2f2;
margin-bottom: 10px;
letter-spacing: .02em;
	transition: all 0.3s ease;
}

.input-edit-title-wr input:focus, .textarea-edit-desc-wr textarea:focus{
	color: #f2f2f2;
	border: 1px solid #1bb76e;
}

.save-info-edit{
	width: 78px;

height: 33px;

font-size: 14px;

color: #fff;

background: #75777c;

border: none;

border-radius: 4px;
	cursor: pointer;
}


.save-info-edit:hover{
	background: #9FA2A9;
}




</style>
