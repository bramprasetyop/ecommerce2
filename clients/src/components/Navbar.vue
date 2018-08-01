<template>
  <div class="navbar">
    <div id="rownavbar" class="row">
      <router-link to="/">
        <div id="logo" class="col s12 m2 l2">

          <img style="color:white" src="https://i2.wp.com/netjurnal.com/wp-content/uploads/2018/04/logo-bukalapak.png" width="100%" height="100%">

        </div>
      </router-link>
      <div id="oii" class="col s5 m5 l5">

      </div>
      <div id="oii" class="col s5 m5 l5 right">

        <router-link to="/">
          <div v-if="auth" id="kolnav2" class="col s5 m3 l3 right">
            <span>
              <h6 @click="logout()" style="color:white">Logout</h6>
            </span>

          </div>
        </router-link>

        <router-link to="/admin">
          <div v-if="auth" id="kolnav2" class="col s5 m3 l3 right">
            <span>
              <h6 style="color:white">Admin</h6>
            </span>

          </div>
        </router-link>

        <router-link to="">

          <div v-if="!auth" @click="openModal()" id="kolnav4" class="col s5 m3 l3 right">
            <span>
              <h6 style="color:white">Login</h6>
            </span>
          </div>
        </router-link>

        <router-link to="">
          <div @click="modalCart" id="kolnav3" class="col s5 m3 l3 right">
            <h6>
              <span style="color:white">Cart</span>
              <i style="color:white" class="material-icons">shopping_cart </i>
              <span style="color:white"></span>

            </h6>

          </div>
        </router-link>
      </div>
    </div>
    <hr id="linehr">

    <!-- ================================ modal =================================== -->
    <modal v-if="showModal">

      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <i class="material-icons prefix">email</i>
                <input v-model="addEmail" placeholder="Email..." id="icon_prefix" type="text" class="validate">

              </div>

              <div class="modal-body">
                <i class="material-icons prefix">lock</i>
                <input v-model="addPassword" placeholder="Password..." id="icon_prefixx" type="password" class="validate">
              </div>

              <div class="row">
                <router-link to="">
                  <div id="loginbutton" class=" col s12 center">
                    <h6 style="color:white" @click="login()">
                      Login
                    </h6>
                  </div>
                </router-link>
              </div>
              <div class="row">
                <router-link to="">
                  <div id="loginbutton" class=" col s12 center">
                    <h6 style="color:white" @click="close()">
                      Cancel
                    </h6>
                  </div>
                </router-link>

              </div>
            </div>
          </div>
        </div>
      </transition>

    </modal>

    <!-- ================================ modal =================================== -->

    <!-- ================================ modal =================================== -->
    <modal v-if="showCart">

      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-containe">
              <div v-for="item in cart" :key="item" class="row">
                <div class="col s4">
                  <img :src="item.image" width="100%" height="100%">
                </div>
                <div class="col s8">
                  <div class="row">
                    <div class="col s12">
                      <h5 id="cartitem">{{item.brand}}</h5>
                    </div>
                    <div class="col s12">
                      <h5 id="cartitem">Rp.{{item.price.toLocaleString()}}</h5>
                    </div>

                  </div>

                </div>
              </div>

            </div>
            <div class="modal-containe">
              <div class="row">
                <router-link to="/">
                  <div id="loginbutton" class=" col s12 center">
                    <h6 style="color:white" @click="checkOut()">
                      Checkout
                    </h6>
                  </div>
                </router-link>
              </div>
              <div class="row">
                <router-link to="">
                  <div id="loginbutton" class=" col s12 center">
                    <h6 style="color:white" @click="closeCart()">
                      Cancel
                    </h6>
                  </div>
                </router-link>

              </div>
            </div>
          </div>
        </div>
      </transition>

    </modal>

    <!-- ================================ modal =================================== -->

  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Hellonavbar',
  data() {
    return {
      showModal: false,
      auth: false,
      addEmail: '',
      addPassword: '',
      showCart: false
    }
  },
  created() {
    this.getData()
    if (localStorage.hasOwnProperty('token')) {
      this.auth = true
    } else {
      this.auth = false
    }
  },
  computed: {
    ...mapState(['results', 'cart'])
  },
  methods: {
    ...mapActions(['getData', 'buyItem']),
    modalCart() {
      if (this.cart.length === 0) {
        alertify.notify('You have 0 item!', 'custom', 2, function() {})
      } else {
        this.showCart = true
      }
    },
    checkOut() {
      alertify.notify('Thank you shopping with us!', 'custom', 2, function() {})
      this.showCart = false
    },
    closeCart() {
      this.showCart = false
    },
    openModal() {
      this.showModal = true
    },
    close() {
      this.showModal = false
    },
    logout() {
      localStorage.removeItem('token')
      this.auth = false
      alertify.notify('Logout Success!', 'custom', 2)

      this.getData()
    },
    login() {
      axios
        .post('http://localhost:3000/customer/login', {
          email: this.addEmail,
          password: this.addPassword
        })
        .then(response => {
          alertify.notify('Login Success!', 'custom', 2)
          localStorage.setItem('token', response.data.token)
          console.log(response)
          this.showModal = false
          this.auth = true
          this.$router.push('/admin')
        })
        .catch(err => {
          alertify.notify('Wrong Email/ Password!', 'custom', 2)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#rownavbar {
  width: 100%;
  height: 70px;
  // border: 1px solid crimson;
  margin-top: -60px;
  // background-color: rgb(185, 12, 47);
}

#loginbutton {
  border: 2px solid crimson;
  border-radius: 8px;
  background-color: crimson;
}

#cartitem {
  font-family: cursive;
}

#oii {
  // border: 2px solid black;
  height: 100%;
}

#logo {
  // border: 2px solid black;
  height: 100%;
  background-color: white;
}

#linehr {
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
}
#kolnav4 {
  // border: 1px solid black;
  margin-top: 20px;
  height: 70%;
  // margin: 5px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  background-color: rgb(185, 12, 47);
}
#kolnav2 {
  // border: 1px solid black;
  margin-top: 20px;
  height: 70%;
  // margin: 5px;
  margin-left: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  background-color: rgb(185, 12, 47);
}
#kolnav3 {
  // border: 1px solid black;
  margin-top: 20px;
  height: 70%;
  // margin: 5px;
  margin-right: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -6px rgba(0, 0, 0, 0.75);
  background-color: rgb(185, 12, 47);
}

// ======================= modal ====================================
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 9px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-containe {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
