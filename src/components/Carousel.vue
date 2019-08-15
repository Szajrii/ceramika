<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333; font-size: 3.2vw; font-family: Raleway;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <b-carousel-slide>
                <img
                        slot="img"
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="480"
                        src="../img/slider-one.jpg"
                        alt="image slot"
                >
                <p>Wysoka jakość</p>
            </b-carousel-slide>

            <b-carousel-slide>
                <img
                        slot="img"
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="480"
                        src="../img/slider-two.jpg"
                        alt="image slot"
                >
                <p>Długoletnia tradycja</p>
            </b-carousel-slide>

        </b-carousel>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>