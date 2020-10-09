import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        count: {},
    },
    mutations: {
        updateCount(state, payload) {
            state.count = payload.count
        },
    }
})

export default store;