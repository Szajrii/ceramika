<template>
    <section class="small-gallery-container" id="images">
        <div class="small-gallery-content main-view">
            <div class="small-gallery-header">
                <h1>
                    NikArt
                </h1>
                <p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </p>
                <h2>Przepiękna ceramika inspirowana Miechowską tradycją. </h2>
            </div>
            <div class="small-gallery-slider">
                <Carousel></Carousel>
            </div>
            <div class="small-gallery-text">
                <p>The earliest forms of pottery were made from clays that were fired at low temperatures in pit-fires or in open bonfires. They were hand formed and undecorated.
                    Because the biscuit form of earthenware is porous, it has limited utility for storage of liquids, however earthenware.
                    It can be made from a wide variety of clays. The development of ceramic glaze which makes it impermeable makes it a popular and practical form of pottery making.
                    The addition of decoration has evolved.</p>
                <span @click="displayGallery = !displayGallery">Zobacz zdjęcia <i class="fas fa-angle-double-right" :class="{'icon-rotate' : displayGallery }"></i></span>
            </div>
            <Gallery :class="{'gallery-display' : displayGallery }"></Gallery>
        </div>
    </section>
</template>

<script>
import Carousel from './Carousel'
import Gallery from  './Gallery'

    export default {
        name: "Small-Gallery",
        components: {
            Carousel,
            Gallery
        },
        data(){
            return {
                displayGallery: false
            }
        }
    }
</script>

<style scoped>

</style>