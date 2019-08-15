<template>
    <section class="about-container" id="about">
        <div class="about-content main-view">
                <div class="about-company-text">
                    <h1>Jesteśmy zakładem ceramicznym w Miechowie.</h1><br>
                    <p>Pracownia ceramiczna NikArt powstała z rodzinnej pasji tworzenia. Już w latach 50. w naszej
                        rodzinie powstawały pierwsze gliniane przedmioty, które wychodziły spod ręki dziadka.
                        Dziadek przekazał ogrom wiedzy swojemu synowi, mojemu tacie, z którym dziś ja nadaję
                        glinie niepowtarzalnego charakteru. To właśnie tradycja przekazywana kolejnym pokoleniom
                        i ręczne wykonanie nadaje naszym produktom wyjątkowości i niepowtarzalności.</p>

                    <p>Jesteśmy nie tylko przywiązani do tradycji, ale także do ziemi, z której pochodzimy. Wiele już
                        wykonanych prac jest inspirowanych symboliką Miechowa. Będziemy dumni, jeśli
                        przyjeżdżający do miasta turyści i pielgrzymi, będą mogli zabrać ze sobą kawałek tego, z
                        czego my jesteśmy dumni, zaklęty w glinie.</p>

                    <p>Pracownia NikArt tworzy ceramikę budowlaną, użytkową, jak również artystyczną.
                        Wykonujemy m.in. magnesy z symbolami kojarzącymi się z Miechowem (Bazyliką czy
                        klasztorem Bożogrobców), talerze, misy, kubki, kafelki, kafle na piece i wiele innych.</p>
                </div>
                <div class="about-company-img">
                    <img src="../img/contact.jpg" alt="" id="about-img">
                </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "About",
        data(){
            return{
                screenWidth: 0
            }
        },
        methods: {
            setImgSize(){
                let textSize =  document.getElementsByClassName('about-company-text')[0].clientHeight;
                console.log(textSize)
                document.getElementById('about-img').style.height = textSize + 'px';
            }
        },
        mounted() {
            window.addEventListener ('load' ,( )=> {
                let textSize =  document.getElementsByClassName('about-company-text')[0].clientHeight;
                document.getElementById('about-img').style.height = textSize + 'px';
            });

            window.addEventListener('resize', () => {
                let textSize =  document.getElementsByClassName('about-company-text')[0].clientHeight;
                document.getElementById('about-img').style.height = textSize + 'px';
            })
        }
    }
</script>

<style>

</style>