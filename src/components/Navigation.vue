<template>
    <div class="nav-container" :class="[!isNavSticky ? 'nav-sticky' : 'nav-not-sticky' ]">
        <div class="nav-wrapper main-view">
            <div class="logo">
                <a href="">NikArt</a>
            </div>
            <div nav-items>
                <li class="nav-item"><a href="#about">O nas</a></li>
                <li class="nav-item"><a href="#category">Oferta</a></li>
                <li class="nav-item"><a href="#images">Zdjęcia</a></li>
                <li class="nav-item"><a href="#contact">Kontakt</a></li>
            </div>
        </div>
    </div>
</template>

<script>
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