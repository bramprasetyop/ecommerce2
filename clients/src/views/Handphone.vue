<template>
  <div class="homehandphone">

    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SecondNavbar/>
    <handphonePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import handphonePage from '@/components/HandphonePage.vue'

export default {
  name: 'fashion',
  components: {
    HelloWorld,
    Navbar,
    SecondNavbar,
    handphonePage
  }
}
</script>
