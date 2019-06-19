import L from 'leaflet'
import * as types from './types'

export const state = () => ({
  maps: {}
})

export const getters = {
  [types.MAP](state) {
    return state.map
  }
}

export const actions = {
  [types.INIT_MAP]({ commit, state }, { id, options }) {
    const map = L.map(id, options)

    commit(types.MAP, map)
  }
}

export const mutations = {
  [types.MAP](state, map) {
    state.map = map
  }
}
