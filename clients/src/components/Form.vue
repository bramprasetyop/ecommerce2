<template>
  <div>
    <!-- ====================== component form =========================== -->

    <div id="rowform" class="row">
      <div id="leftside" class="col s12 m6 l6">

        <h4 id="additem">Add Item</h4>

        <form class="col s12 m12 l12">
          <div class="row">
            <div class="input-field col s12">
              <input v-model='addbrand' id="brand" type="text" class="validatecbrand">
              <label for="brand">Brand</label>

            </div>
          </div>
        </form>
        <form class="col s12 m12 l12">
          <div class="row">
            <div class="input-field col s12">
              <input v-model='addPrice' id="price" type="text" class="validatecprice">
              <label for="price">Price</label>
            </div>
          </div>
        </form>

        <form class="col s12 m12 l12">
          <div class="row">
            <div class="input-field col s12">
              <input v-model='category' id="category" type="text" class="validateccategory">
              <label for="category">Category</label>
            </div>
          </div>
        </form>

        <form class="col s12 m12 l12">
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input @change="fetchImg" type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
        </form>

        <router-link to="">
          <div id="submitbut" class="col s12 m8 l8">
            <h6 @click="upload" style="color:white">Submit</h6>
          </div>
        </router-link>

      </div>

      <div class="col s12 m6 l6"></div>

    </div>
    <!-- ====================== component form =========================== -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      addbrand: '',
      addPrice: '',
      img: null,
      category: ''
    }
  },
  methods: {
    fetchImg(e) {
      this.img = e.target.files[0]
    },
    upload() {
      let formData = new FormData()
      formData.append('image', this.img)
      formData.append('brand', this.addbrand)
      formData.append('price', this.addPrice)
      formData.append('category', this.category)
      
      // ====================== axios ==========================
      axios({
        url: 'http://localhost:3000/home',
        method: 'post',
        data: formData,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log(response);
          
          this.addbrand = ''
          this.addPrice = ''
          this.category = ''
          alertify.notify('Upload Success!', 'custom', 2)
        })
        // { this.linkImg = response.data.link }
        .catch(err => console.log(err))
      // ====================== axios ==========================
    }
  }
}
</script>

<style>
#rowform {
  width: 98%;
  /* border: 1px solid black; */
}

#submitbut {
  border: 1px solid rgb(95, 7, 25);
  height: 50px;
  width: 40%;
  border-radius: 9px;
  background-color: rgb(95, 7, 25);
}

#leftside {
  /* border: 1px solid rgb(66, 6, 18); */
  padding: 20px;
  width: 30%;
  border-radius: 8px;
  -webkit-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
}
#additem {
  font-family: cursive;
  color: rgb(95, 7, 25);
}
</style>
