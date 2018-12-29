<template>
	<div>AuthHandler</div>
</template>


<script>
import { mapActions } from 'vuex'


// @click="login"


export default {
	name: 'AuthHandler',
	methods: mapActions(['finalizeLogin']),
	created() {
		this.finalizeLogin(window.location.hash)
	}
}

</script>


<style>

</style>
