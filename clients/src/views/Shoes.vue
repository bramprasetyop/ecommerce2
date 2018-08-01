<template>
  <div class="homeshoes">

    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SecondNavbar/>
    <ShoesPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import ShoesPage from '@/components/ShoesPage.vue'

export default {
  name: 'fashionshoes',
  components: {
    HelloWorld,
    Navbar,
    SecondNavbar,
    ShoesPage
  }
}
</script>
