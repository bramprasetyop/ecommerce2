import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: [],
    cart: [],
    auth: false,
    visibleCart: true
  },
  mutations: {
    set_getAll(state, payload) {
      state.results = payload
    },
    set_cart(state, payload) {
      state.cart.push(payload)
    },
    setAuth(state, payload) {
      state.auth = payload
    },
    setVisible(state, payload) {
      state.visibleCart = payload
    },
    setDelete(state, payload) {
      state.results.splice(payload, 1)
    }
  },
  actions: {
    buyItem({
      commit
    }, payload) {
      alertify.notify('Add to your cart!', 'custom', 2, function () {})
      commit('set_cart', payload)
      Router.push('/')
      // console.log(payload);
    },
    deleteItem({commit}, index) {
      let id = this.state.results[index]._id
      axios.delete(`https://api-ecommerce.bramaprasetyo.co/home/items/${id}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          // console.log(response);
          commit('setDelete', index)
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