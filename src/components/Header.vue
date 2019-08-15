<template>

    <section class="header-container">
        <div class="header-content main-view">
            <h1 :class="{'visible' : display}">NikArt</h1>
            <p :class="{'visible' : display}">Ceramika Miechów</p>
        </div>
        <div class="header-nav-wrapper main-view">
            <div class="header-nav-button" :class="{'visible' : display}">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                display: false,
                screenHeight: screen.height
            }
        },
        mounted() {
            window.onload = () => {
                this.display = true
            }
        }

    }
</script>

<style>

</style>