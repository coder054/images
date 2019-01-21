<template >
  <div :class="{ showed: showNoti, 'notification-wr': true}">
  	<span @click="togglee('showNoti')" class="close-not-icon"> x </span>
		<p class="not-content"> {{notiContent}} </p>
  </div>
</template>


<script>

import { mapGetters } from 'vuex'
import {mapActions} from 'vuex'


export default {
  name: 'Notification',
   computed: 
    {
      ...mapGetters(['showNoti', 'notiContent']),
    },
    	methods: { 
		...mapActions([ 'togglee' ]),
	}
}

</script>


<style>

.notification-wr{
  width: 300px;
  background: black;
  color: white;
  padding: 10px;
  border-radius: 4px;
  position: fixed;
  right: 20px;
  top: -100px;
	opacity: 0;
  z-index: 100;
  transition: all 2s ease;
}

.notification-wr.showed{
	top: 50px;
	opacity: 1
}

.close-not-icon{
  position: absolute;
  top: 1px;
  right: 1px;
  cursor: pointer;
  padding: 2px 7px;
}





</style>
