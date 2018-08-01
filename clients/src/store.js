import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: [],
    cart: []
  },
  mutations: {
    set_getAll(state, payload) {
      state.results = payload
    },
    set_cart(state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
    buyItem({
      commit
    }, payload) {
      alertify.notify('Add to your cart!', 'custom', 2, function () {})
      commit('set_cart', payload)
      // console.log(payload);
    },
    deleteItem({
      commit
    }, payload) {
      axios.delete(`https://api-ecommerce.bramaprasetyo.co/home/items/${payload}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          // console.log(response);
          console.log('delete success', response);
          alertify.notify('Delete success!', 'custom', 2, function () {})


        })
    },
    getData({
      commit
    }, payload) {
      //=================== axios ===============================
      axios.get('https://api-ecommerce.bramaprasetyo.co/home/items')
        .then(({
          data
        }) => {
          // console.log(data);

          payload = data.items
          commit('set_getAll', payload)
        }).catch(error => {
          console.log(error)
        })
      // ====================== axios ==========================
    }
  }

})