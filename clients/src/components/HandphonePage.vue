<template>
  <div>
    <div id="rowbody" class="row">

      <div v-if="result.category === 'handphone'" v-for="result in results" :key="result" id="body1" class="col s6 m3 l3">

        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" :src="result.image">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              <h5 id="titleitem">{{result.brand}}</h5>
              <i class="material-icons right">more_vert</i>
            </span>



            <button @click="buyItem(result)" class="btn" type="submit" name="action">Buy
              <i class="material-icons right">add_shopping_cart</i>
            </button>

          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{{result.brand}}
              <i class="material-icons right">close</i>
            </span>
            <p>Rp.{{result.price.toLocaleString()}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      auth: false
    }
  },
  created() {
    this.getData()
    if (localStorage.hasOwnProperty('token')) {
      this.auth = true
    }
    else{
      this.auth = false
    }
  },
  computed: {
    ...mapState(['results'])
  },
  methods: {
    ...mapActions(['getData', 'buyItem'])
  }
}
</script>

<style>
.ajs-message.ajs-custom {
  color: white;
  background-color: crimson;
}

.card-image {
  padding: 10px;
  object-fit: fill;
  height: 250px;
}

#rowbody {
  width: 98%;
}

#titleitem {
  font-family: cursive;
}

.btn {
  background-color: rgb(121, 8, 31);
}

#trash {
  background-color: rgb(121, 8, 31);
}

.btn:hover {
  background-color: black;
}
#buy {
  /* margin: 5px; */
  /* border: 1px solid black; */
  width: 100%;
  margin-left: 40px;
}
</style>
