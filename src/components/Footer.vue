<template>
    <footer class="footer-container">
        <div class="footer-wrapper main-view">
            <span class="copyright-icon">&copy; </span>
            <h1>NikArt</h1>
            <span>{{year}}</span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>