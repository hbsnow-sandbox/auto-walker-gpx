export const state = () => ({
  lat: 0,
  lng: 0
})

export const getters = {
  lat: state => state.lat,
  lng: state => state.lng
}

export const mutations = {
  setLat(state, lat) {
    state.lat = lat
  },
  setLng(state, lng) {
    state.lng = lng
  }
}

export const actions = {
  locate({ commit }, { lat, lng }) {
    commit('setLat', { lat })
    commit('setLng', { lng })
  }
}
