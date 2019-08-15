<template>
    <section class="about-view-container">
        <div class="image-header">
            <img src="../img/about-header.jpg" alt="" :class="{'scale-img' : scale}">
        </div>
        <div class="about-view-content">
            <div class="about-view-text"></div>
            <div class="about-view-items"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AboutView",
        data() {
            return {
                scale: false
            }
        },

    }
</script>

<style scoped>

</style>