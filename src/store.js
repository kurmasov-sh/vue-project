import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      cartItems: []
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addItem(state, payload){
        state.cartItems.push(payload)
    }
  },
  actions: {
    // async getPosts({ commit }) {
    //     const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //     // commit('addItem', res);
    //     console.log(res);
    // }
  },
  getters: {
    getAll(state) {
        return state.cartItems;
    }
  }
})

export default store;
// Install the store instance as a plugin
