<template>
  <div id="app">
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <EmptySpace></EmptySpace>
      <Category></Category>
      <SmallGallery></SmallGallery>
      <Contact></Contact>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Nav from './components/Navigation'
import Header from './components/Header'
import About from "./components/About";
import EmptySpace from "./components/EmptySpace";
import Category from "./components/Category";
import Contact from "./components/Contact";
import SmallGallery from "./components/Small-Gallery";

export default {
  name: 'App',
  components: {
      Header,
      About,
      EmptySpace,
      Category,
      SmallGallery,
      Contact,
      Footer,
      Nav,
  },
    data(){
      return {
          header: true
      }
    }
}
</script>

<style>

</style>
