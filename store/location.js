import { parseLocation } from '@hbsnow/move-on-coords'
// import { getDistance } from 'geolib'
import { getCurrentLocation } from '../common/getCurrentLocation'

export const state = () => ({
  loading: false,
  current: null,
  next: null
})

export const getters = {
  loading: state => state.loading,
  current: state => state.current,
  currentLatitude: state => (state.current ? state.current[0] : 0),
  currentLongitude: state => (state.current ? state.current[1] : 0),
  next: state => state.next
}

export const actions = {
  async locateCurrent({ commit }) {
    commit('loading', true)

    try {
      const location = await getCurrentLocation()
      commit('current', [
        parseLocation(location.coords.latitude, 7),
        parseLocation(location.coords.longitude, 7)
      ])
    } catch (error) {
      console.error('error')
    }

    commit('loading', false)
  }
}

export const mutations = {
  loading(state, loading) {
    state.loading = loading
  },
  current(state, current) {
    state.current = current
  },
  next(state, next) {
    state.next = next
  },
  distance(state, distance) {
    state.distance = distance
  }
}
