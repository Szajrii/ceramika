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
                <p>Klasyczny proces produkcji wyrobów ceramicznych polega na dokładnym wymieszaniu odpowiednich surowców, formowaniu, wysuszeniu i wypaleniu.
                    Proces wypalania odbywa się w piecach: tunelowych, komorowych lub w piecach grafitowych, często o kontrolowanej atmosferze wypalania. Temperatura wypalania mieści
                    się w zakresie od 900 °C  do 2000 °C. W wysokich temperaturach zachodzi zjawisko spiekania, w wyniku którego otrzymuje się czerep o pożądanej gęstości, znacznie mniejszej
                    od gęstości surowca, ze względu na usunięcie wody podczas obróbki termicznej. Dzięki wieloletniej nauce i doświadczeniu przy wykorzystaniu najlepszego sprzętu
                jesteśmy w stanie tworzyć najlepsze wyroby ceramiczne w Miechowie.</p>
                <span @click="displayGallery = !displayGallery" id="show-gallery">{{expandGalleryText}}<i class="fas fa-angle-double-right" :class="{'icon-rotate' : displayGallery }"></i></span>
            </div>
            <Gallery :class="{'gallery-display' : displayGallery }"></Gallery>
        </div>
    </section>
</template>

<script>
import Carousel from './Carousel'
import Gallery from  './Gallery'
import {Eventbus} from '../eventbus/Eventbus'

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
        },
        computed: {
          expandGalleryText() {
              if(this.displayGallery === false){
                  return 'Zobacz zdjęcia'
              }else {
                  return 'Ukryj zdjęcia'
              }
          }
        },
        created() {
            Eventbus.$on('showgallery', () => this.displayGallery = true)
        }
    }
</script>

<style scoped>

</style>