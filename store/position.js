export const state = () => ({
  lats: [],
  lngs: []
})

export const getters = {
  lats: state => state.lats,
  lngs: state => state.lngs
}

export const mutations = {
  setLat(state, lats) {
    state.lats = lats
  },
  setLng(state, lngs) {
    state.lngs = lngs
  }
}

export const actions = {
  locate({ commit }, { lats, lngs }) {
    commit('setLat', lats)
    commit('setLng', lngs)
  }
}
