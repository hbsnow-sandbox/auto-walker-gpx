import { parseLocation } from '@hbsnow/move-on-coords'
import { getCurrentLocation } from '../common/getCurrentLocation'
import { LOADING, CURRENT, NEXT, LOCATE } from './types'

export const state = () => ({
  loading: false,
  current: {
    latitude: 0,
    longitude: 0
  },
  next: {
    latitude: 0,
    longitude: 0
  }
})

export const getters = {
  [LOADING](state) {
    return state.loading
  },
  [CURRENT](state) {
    return state.current
  },
  [NEXT](state) {
    return state.next
  }
}

export const actions = {
  async [LOCATE]({ commit }) {
    commit(LOADING, true)

    try {
      const location = await getCurrentLocation()
      commit(CURRENT, {
        latitude: parseLocation(location.coords.latitude, 7),
        longitude: parseLocation(location.coords.longitude, 7)
      })
    } catch (error) {
      //
    }

    commit(LOADING, false)
  }
}

export const mutations = {
  [LOADING](state, loading) {
    state.loading = loading
  },
  [CURRENT](state, current) {
    state.current = current
  },
  [NEXT](state, next) {
    state.next = next
  }
}
