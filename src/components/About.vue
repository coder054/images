<template>
	<div>
		<ul>
			<li> <router-link :to="pathFrontend"> Frontend </router-link> </li>
			<li> <router-link :to="pathBackend"> Backend </router-link> </li>
			
		</ul>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>


<script>

export default {
	computed: {
		pathFrontend(){
			return "/about/frontend"
		},
		pathBackend (){
			return "/about/backend"
		}
	},
	name: 'About',
	created(){
			// console.log("this.$route", this.$route)
	}
}
</script>
