import { parseLocation } from '@hbsnow/move-on-coords'
import { getDistance } from 'geolib'
import { getCurrentLocation } from '../common/getCurrentLocation'

export const state = () => ({
  loading: false,
  nextSelected: false,
  current: {
    latitude: 0,
    longitude: 0
  },
  next: {
    latitude: 0,
    longitude: 0
  },
  distance: 0
})

export const getters = {
  loading(state) {
    return state.loading
  },
  nextSelected(state) {
    return state.nextSelected
  },
  current(state) {
    return state.current
  },
  next(state) {
    return state.next
  },
  distance(state) {
    return state.distance
  }
}

export const actions = {
  async locateCurrent({ commit }) {
    commit('loading', true)

    try {
      const location = await getCurrentLocation()
      commit('current', {
        latitude: parseLocation(location.coords.latitude, 7),
        longitude: parseLocation(location.coords.longitude, 7)
      })
    } catch (error) {
      console.error('error')
    }

    commit('loading', false)
  },
  locateNext({ commit, state }, { latitude, longitude }) {
    if (!state.nextSelected) commit('nextSelected', true)
    const coords = {
      latitude: parseLocation(latitude, 7),
      longitude: parseLocation(longitude, 7)
    }

    commit('next', coords)
    commit('distance', getDistance(state.current, coords))
  }
}

export const mutations = {
  loading(state, loading) {
    state.loading = loading
  },
  nextSelected(state, nextSelected) {
    state.nextSelected = nextSelected
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
