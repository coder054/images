<template>
  <div>
    <div class="select-column-wr" v-if="isLoggedIn && hasImage">
      <span class="select-colum-label"> Select number of Columns: </span>
      <select class="select-column" v-model="column">
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
    <h3 v-if="!isLoadingComplete"> ... Loading Images ... </h3>
    <h3 v-if="!hasImage && isLoadingComplete"> You don't upload nay images yet, let <router-link class="upload-link" to="/upload"> upload </router-link> some images! </h3>

    <div :style="{columnCount: column }" v-if="isLoggedIn" class="img-wrapper">
      <img v-for="image in images" :src="image.link" :key="image.link">
    </div>
      <h2 v-else> Login to get started! </h2>

    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'ImageList',
  data() {
    return {
      column: 4
    }
  },
  computed: {
    hasImage (){
      return !!this.images.length
    } ,
    ...mapGetters(['images', 'isLoggedIn', 'isLoadingComplete'])
  },
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages()
  }
}

</script>


<style scoped>

.img-wrapper {
  column-gap: 0;
}


.img-wrapper img {
  max-width: 100%;
  padding: 5px;
}

.select-column-wr{
  margin: 20px 0;
}

.select-colum-label{
  margin-right: 10px;
}

.upload-link{
  color: #006699;
  font-weight: bold;
}

</style>