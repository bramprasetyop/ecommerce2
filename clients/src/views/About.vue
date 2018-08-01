<template>
  <div class="about">

    <Navbar/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Form/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'aboutPage',
  components: {
    HelloWorld,
    Navbar,
    Form
  }
}
</script>
