<template>
  <div class="hello">
    <!-- <Navbar/> -->
    <div id="containermain" class="row center">

      <div id="kol1" class="col s12 m5 l5">
        <img src="https://s3.bukalapak.com/uploads/flash_banner/36803/s-1256-824/Banner_1.jpg" width="100%" height="100%">

      </div>

      <div id="kol2" class="col s12 m5 l5">
        <div id="kol2in" class="col s12">
          <img src="https://s3.bukalapak.com/uploads/flash_banner/80903/s-824-392/Banner_2_75hariini.jpg" width="100%" height="100%">

        </div>
        <div id="kol2in1" class="col s12 m12 l12">
          <!-- <h1>ini gambar</h1>
           -->
          <div class="row">
            <div id="kol2in11" class="col s12 m6 l6">
              <img src="https://s2.bukalapak.com/uploads/flash_banner/20903/s-392-392/Banner_4_pulsa25.jpg" width="100%" height="100%">
            </div>
            <div id="kol2in12" class="col s12 m6 l6 right">
              <img src="https://s4.bukalapak.com/uploads/flash_banner/41903/s-392-392/Banner_4_update.jpg" height="100%" width="100%">
            </div>
          </div>
        </div>
      </div>

      <div id="kol3" class="col s12 m2 l2 center">
        <img src="https://s1.bukalapak.com/uploads/flash_banner/15803/s-392-824/c19e96da-6c2a-47db-a197-e7d551ef1fa0.jpg" width="100%" height="100%">

      </div>

    </div>


  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
export default {
  name: 'HelloWorld',
  components: {
    // Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#containermain {
  /* border: 1px solid black; */
  width: 98%;
  margin: 5px;
}

#kol2in {
  /* // border: 1px solid black; */
  height: 200px;
}

#kol2in1 {
  /* // border: 1px solid black; */
  margin-top: 5px;
  height: 194px;
  /* object-fit: cover; */
}

#kol2in11 {
  /* // border: 1px solid black; */

  height: 194px;
  /* object-fit: cover; */
  /* width: 225px; */
}
#kol2in12 {
  /* // border: 1px solid black; */

  height: 194px;

  /* object-fit: cover; */
  /* margin-left: 20px; */
  /* width: 230px; */
}

#kol1 {
   /* border: 1px solid black; */
  /* margin: 5px; */
  /* margin-top: 1px; */
  height: 400px;
  /* width: 550px; */
}
#kol2 {
   /* border: 1px solid black; */
  margin-left: 0px;
  /* width: 500px; */
}
#kol3 {
 /* border: 1px solid black; */
  /* margin: 5px; */
  height: 400px;
  /* width: 235px; */
  /* margin-left: 30px; */
    /* margin-top: 1px; */

}

#secondnavbar {
  /* // border: 2px solid rgb(252, 248, 248); */
  width: 98%;
  margin: 5px;
  background-color: rgb(185, 12, 47);
  border-radius: 20px;
}

#nav1 {
  border: 5px solid rgb(250, 249, 249);
  /* // border-radius: 40px; */
}
#nav2 {
  border: 5px solid rgb(250, 249, 249);
  /* // border-radius: 40px; */
}
#nav3 {
  border: 5px solid rgb(250, 249, 249);
  /* // border-radius: 40px; */
}

#nav4 {
  border: 5px solid rgb(250, 249, 249);
  /* // border-radius: 5px; */
}
</style>
