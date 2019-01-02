<template>

  <div>
    <Modal v-if="isLoggedIn && hasImage">  </Modal>
    <div class="select-column-wr" v-if="isLoggedIn && hasImage">
      <span class="select-colum-label"> Select number of Columns: </span>
      <select class="select-column" v-model="column">
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
    <!-- <h3 v-if="!isLoadingComplete && isLoggedIn"> ... Loading Images ... </h3> -->
    <h3 v-if="!hasImage && isLoadingComplete"> You don't upload nay images yet, let <router-link class="upload-link" to="/upload"> upload </router-link> some images! </h3>

      <transition  name="deletebox">
        <div id="deletebox" class="textbox operation" v-if="isAskingForDelete">
            <div class="message">
                <h2>Select images for deletion:</h2>
                <span class="green">&nbsp;<span class="image-counter">1</span>&nbsp;<span class="image-count-word" googl="true">images</span> selected</span>
            </div>

            <div class="right">
                <div class="small-loader" style="display: none;"></div>
                <input  @click="deleteImage(deletehash)" type="button" class="button-medium button-danger title" value="Delete" id="delete-button" original-title="permanently delete images">

                <button @click="setDeleteHash('')" class="cancel-delete"> Cancel </button>
            </div>
        </div>  
      </transition>


      <div 
      :style="{columnCount: column }" 
      v-if="isLoggedIn && hasImage"
       class="img-list-wrapper">
        <transition-group name="image-list" tag="span">
          <div v-for="(image, index) in images"  class="img-wr list-item" :key="image.link">
            <img :class="{marked: image.deletehash == deletehash}"  @click="clickImage(index)" :data-index="index" :src="image.link" >
            <i @click="setDeleteHash(image.deletehash)" class="trash icon" googl="true"></i>
          </div>
        </transition-group>
      </div>



      <h2 v-if="!isLoggedIn"> Login to get started! </h2>

    </div>
</template>


<script>
import Modal from "./Modal"
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'ImageList',
  data() {
    return {
      column: 4,
      show: true,
    }
  },
  components: {
    Modal
  }
  ,
  computed: {
    hasImage (){
      return !!this.images.length
    } ,
    ...mapGetters(['images', 'isLoggedIn', 'isLoadingComplete', 'image', 'isMaxIndex', 'imageIndex', 'isAskingForDelete', 'deletehash'])
  },
  methods: {
    toggle(){
      this.show = !this.show
    },
    ...mapActions(['fetchImages', 'clickImage', 'deleteImage', 'toggleAskingForDelete', 'setDeleteHash'])
  },
  created() {
    this.fetchImages()
  }
}

</script>


<style scoped>

.img-list-wrapper {
  column-gap: 5px;
}


.img-list-wrapper img {
  max-width: 100%;
  margin-bottom: 10px;
  border: 3px solid rgba(0,0,0,0);
  border-radius: 4px;
}

div.img-wr:hover img{
  border: 3px solid green;
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


i.trash.icon{
  position: absolute;
  bottom: 30px;
  right: 20px;
  font-size: 18px;
  cursor: pointer;
  background: rgba(0,0,0,0.7);
  color: #aaa;
  opacity: 0;
  transition: all 0.05s ease;
  width: 50px;
  height: 30px;
  padding: 5px;
  border-radius: 1px;
  transition: all 0.2s ease;
}


i.trash.icon:hover{
  color: white;
}

div.img-wr{
  position: relative;
}

div.img-wr:hover i.trash.icon{
  opacity: 1;
}




.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}


.component-fade-enter-active, .component-fade-leave-active {
  transition: all .8s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}



/*.list-item {
  display: inline-block;
  margin-right: 10px;
}*/
.image-list-enter-active, .image-list-leave-active {
  transition: all 3.2s;
}
.image-list-enter, .image-list-leave-to /* .image-list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s;
}

span.green{
  color: green;
  font-size: 16px;
}

#deletebox{
  display: flex; 
  flex-direction: row;
  justify-content: space-between; /* rat quan trong */
  flex-wrap: wrap;
}

.message h2{
  display: inline-block;
  margin-right: 10px;
  font-size: 17px;
}


#delete-button, .cancel-delete{
  
  padding: 7px 15px;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: all 0.2s ease;
}
#delete-button{
  background-color: RGB(208, 2, 98);
  margin-right: 5px;
}

.cancel-delete{
  background-color: #999;
}
#delete-button:hover{
  background-color: RGB(159, 162, 169);
}



.deletebox-enter-active, .deletebox-leave-active {
  transition: all .6s ease;
  opacity: 1;
  max-height: 36px;

}
.deletebox-enter, .deletebox-leave-to
/* .deletebox-leave-active below version 2.1.8 */ {
  opacity: 0;
  max-height: 0;
  transition: all .4s ease;
}

.marked{
  border: 3px solid red!important;
}

</style>
