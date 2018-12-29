<template>
	<div class="ui secondary pointing menu">
		<a href="/" class="active item">
    Image Storage
  </a>
		<a class="item">
    Messages
  </a>
		<a class="item">
    Friends
  </a>
		<div class="right menu">
			<a class="ui item" @click="login">
      Login
    </a>
		</div>
	</div>

</template>


<script>
import { mapActions } from 'vuex'

export default {
	name: 'Header',
	methods: mapActions(['login', 'logout'])
}

</script>


<style>


</style>
