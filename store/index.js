import Vuex from 'vuex'

export default () =>
  new Vuex.Store({
    state: {
      latlng: []
    },
    getters: {
      latlng: state => state.latlng
    },
    mutations: {
      setLatlng(state, { latlng }) {
        state.latlng = latlng
      }
    },
    actions: {
      locate (map) {
        map.locate()
        commit('setLatlng', { latlng })
      }
    }
  })
