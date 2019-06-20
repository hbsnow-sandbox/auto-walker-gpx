import L from 'leaflet'

export const state = () => ({
  maps: {}
})

export const getters = {
  map(state) {
    return state.map
  }
}

export const actions = {
  initMap({ commit, state }, { id, options }) {
    const map = L.map(id, options)
    if (options.center) L.marker(options.center).addTo(map)

    commit('map', map)
  }
}

export const mutations = {
  map(state, map) {
    state.map = map
  }
}
