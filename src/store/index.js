import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: ''
  },
 
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, userName) {
      console.log('userName', userName)
      state.Authorization = userName;
      localStorage.setItem('Authorization', userName);
    }
  },

  actions: {
  },
  modules: {
  }
})
