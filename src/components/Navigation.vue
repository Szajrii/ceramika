<template>
    <div class="nav-container" :class="[!isNavSticky ? 'nav-sticky' : 'nav-not-sticky' ]">
        <div class="nav-wrapper main-view">
            <div class="logo">
                <a href="">NikArt</a>
            </div>
            <div nav-items>
                <li class="nav-item"><span @click="navTo('about')">O nas</span></li>
                <li class="nav-item"><span @click="navTo('category')">Oferta</span></li>
                <li class="nav-item"><span @click="navToGallery">Zdjęcia</span></li>
                <li class="nav-item"><span @click="navTo('contact')">Kontakt</span></li>
            </div>
        </div>
    </div>
</template>

<script>
    import {Eventbus} from '../eventbus/Eventbus'
    export default {
        name: "Navigation",
        data() {
            return {
                scrollPos: 0,
                tmpScroll: 0,
                scrollDirection: '',
                isNavSticky: false
            }
        },
        methods: {
            makeStickyNav(){
                if(this.scrollPos >  this.tmpScroll){
                    this.scrollDirection = 'down';
                    console.log('down')
                }else{
                    this.scrollDirection = 'up';
                    console.log('up')
                }

                if(this.scrollPos > 200 ){
                    if(this.scrollDirection == 'down'){
                        this.isNavSticky = true
                    }else{
                        this.isNavSticky = false
                    }
                }else{
                    this.isNavSticky = false
                }
                this.tmpScroll = window.pageYOffset;
            },
            navToGallery() {
                const galleryPosition = document.getElementById('show-gallery').offsetTop;
                window.scrollTo(0, galleryPosition);
                Eventbus.$emit('showgallery');
            },
            navTo(elementid) {
                const position = document.getElementById(elementid).offsetTop;
                window.scrollTo(0, position)
            }
        },
        created() {
            window.onscroll = ()=> {
                this.scrollPos = window.pageYOffset;
                let tmpScroll = this.scrollPos;
                this.makeStickyNav(tmpScroll);
            }
        }
    }
</script>

<style scoped>

</style>