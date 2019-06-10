import { parseLocation } from '@hbsnow/move-on-coords'
import { getCurrentLocation } from '../common/getCurrentLocation'

export const state = () => ({
  loading: false,
  lat: 0,
  lng: 0
})

export const getters = {
  loading: state => state.loading,
  lat: state => state.lat,
  lng: state => state.lng
}

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setLat(state, lat) {
    state.lat = lat
  },
  setLng(state, lng) {
    state.lng = lng
  }
}

export const actions = {
  async locate({ commit }, { lat, lng }) {
    commit('setLoading', true)

    try {
      const latLng = await getCurrentLocation()
      commit('setLat', parseLocation(latLng.coords.latitude, 7))
      commit('setLng', parseLocation(latLng.coords.longitude, 7))
    } catch (error) {
      //
    }

    commit('setLoading', false)
  }
}
