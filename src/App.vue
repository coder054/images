<template>
	<div @click="setterr({propertyName: 'showNoti', value: false})">
		<Header></Header>
		<Notification></Notification>
		<div class="ui container">
			<router-view></router-view>
		</div>
	</div>
</template>




<script>
import Header from "./components/Header.vue"
import Notification from "./components/Notification.vue"
import {mapActions} from 'vuex'

export default {
	name: 'App',
	components: {
		Header,
		Notification
	},
		methods: mapActions([ 'setterr' ])
}

</script>


<style>


</style>
