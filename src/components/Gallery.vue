<template>
    <section class="gallery-container">
        <div class="gallery-wrapper main-view">
            <div class="gallery-items">
                <div class="gallery-item">
                    <img src="../img/gallery/image1.jpg" alt="image1" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom1" :style="[activeZoom === 'image1' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image2.jpg" alt="image2" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom2" :style="[activeZoom === 'image2' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image3.jpg" alt="image3" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom3" :style="[activeZoom === 'image3' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
            <div class="gallery-items">
                <div class="gallery-item">
                    <img src="../img/gallery/image4.jpg" alt="image4" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom4" :style="[activeZoom === 'image4' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image5.jpg" alt="image5" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom5" :style="[activeZoom === 'image5' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image6.jpg" alt="image6" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom6" :style="[activeZoom === 'image6' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
            <div class="gallery-items">
                <div class="gallery-item">
                    <img src="../img/gallery/image7.jpg" alt="image7" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom7" :style="[activeZoom === 'image7' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image8.jpg" alt="image8" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom8" :style="[activeZoom === 'image8' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image9.jpg" alt="image9" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom9" :style="[activeZoom === 'image9' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
            <div class="gallery-items">
                <div class="gallery-item">
                    <img src="../img/gallery/image10.jpg" alt="image10" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom10" :style="[activeZoom === 'image10' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image11.jpg" alt="image11" @mouseover="letUserZoomImage($event)">
                    <div class="image-zoom" id="zoom11" :style="[activeZoom === 'image11' ? {'display' : 'block'} : {'display': 'none'}]"  @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
                <div class="gallery-item">
                    <img src="../img/gallery/image12.jpg" alt="image12" @mouseover="letUserZoomImage($event)" >
                    <div class="image-zoom" id="zoom12" :style="[activeZoom === 'image12' ? {'display' : 'block'} : {'display': 'none'}]" @mouseleave="clearZoomImage()" @click="setModal()">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-gallery" v-if="modalView">
            <div class="modal-image">
                <i class="fas fa-times" id="close-modal" @click="closeModal"></i>
                <i class="fas fa-arrow-circle-left" id="left-arrow" @click="previousImage"></i>
                <img :src="currentImg" alt="">
                <i class="fas fa-arrow-circle-right" id="right-arrow" @click="nextImage"></i>
            </div>
            <div class="modal-background" @click="closeModal"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Gallery",
        data() {
            return {
                activeZoom: '',
                modalView: false,
                img: ""
            }
        },
        methods: {
          letUserZoomImage(event) {
                this.activeZoom = event.target.alt;
          },
          clearZoomImage() {
              this.activeZoom = '';
          },
          setModal(event) {
              this.modalView = true;
              let body =  document.getElementsByTagName("body");
              body[0].style.overflowY = "hidden";
              this.img = parseInt(this.activeZoom.slice(5,7));
             // document.getElementsByClassName('modal-gallery')[0].addEventListener('click', this.closeModal);
              //event.stopPropagation()
          },
          nextImage() {
              if(this.img < 12) {
                  this.img++;
              }else {
                  this.img = 1;
              }
          },
          previousImage() {
              if(this.img > 1){
                  this.img--;
              }else {
                  this.img = 12;
              }
          },
          closeModal() {
              this.modalView = false;
              let body =  document.getElementsByTagName("body");
              body[0].style.overflowY = "auto";
          }
        },
        computed: {
          currentImg() {
              return require(`../img/gallery/image${this.img}.jpg`)
          }
        },
    }
</script>

<style scoped>

</style>