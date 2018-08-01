<template>
  <div class="homecomputer">

    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SecondNavbar/>
    <ComputerPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import ComputerPage from '@/components/ComputerPage.vue'

export default {
  name: 'fashioncomputer',
  components: {
    HelloWorld,
    Navbar,
    SecondNavbar,
    ComputerPage
  }
}
</script>
