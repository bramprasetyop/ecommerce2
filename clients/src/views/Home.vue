<template>
  <div class="home">
   
    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SecondNavbar/>
    <Body/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import Body from '@/components/Body.vue'




export default {
  name: 'home',
  components: {
    HelloWorld,
    Navbar,
    SecondNavbar,
    Body
  }
}
</script>
