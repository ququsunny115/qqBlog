import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  checkedCount: 0,
  allCount: 0
}
const mutations = {
  addCount(state){
    state.allCount++;
  },
  reduceCount(state){
    if(state.allCount > 0){
      state.allCount--;
    }
  },
  checkedCount(state){
    state.checkedCount++
  },
  checkedReduceCount(state){
    if(state.allCount > 0){
      state.checkedCount--;
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})