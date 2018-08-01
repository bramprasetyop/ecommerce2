<template>
  <div class="homefashion">

    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <SecondNavbar/>
    <FashionPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import SecondNavbar from '@/components/SecondNavbar.vue'
import FashionPage from '@/components/FashionPage.vue'

export default {
  name: 'fashion',
  components: {
    HelloWorld,
    Navbar,
    SecondNavbar,
    FashionPage
  }
}
</script>
