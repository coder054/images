<template>
	<div class="ui secondary pointing menu">
		<router-link to="/" class="active item">
			Image Storage
		</router-link>

		<div class="right menu">
			<router-link to="/" class="ui item" v-if="isLoggedIn">
				Galleries
			</router-link>
			<router-link to="/upload" class="ui item" v-if="isLoggedIn">
				Upload
			</router-link>
			<a class="ui item" @click="logout" v-if="isLoggedIn">
				Logout
			</a>
			<a class="ui item" @click="login" v-else>
				Login 
			</a>
		</div>

	</div>
</template>


<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
	name: 'Header',
	computed: mapGetters(['isLoggedIn', 'token']),
	methods: mapActions(['login', 'logout'])
}

</script>


<style>


</style>
