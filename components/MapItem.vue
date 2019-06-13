<template lang="pug">
  .map-item#map-item
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { CURRENT, NEXT, NEXT_LOCATE } from '../store/types'

export default {
  computed: {
    ...mapGetters('map', [CURRENT, NEXT])
  },
  mounted() {
    const map = L.map('map-item')
    const coords = [this.CURRENT.latitude, this.CURRENT.longitude]
    const zoom = 18
    // https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png
    const tile = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

    map.addLayer(L.tileLayer(tile))
    map.setView(coords, zoom)

    // marker
    L.marker(coords).addTo(map)
    let marker
    map.on('click', e => {
      const latitude = e.latlng.lat
      const longitude = e.latlng.lng

      this.NEXT_LOCATE({ latitude, longitude })
      if (marker) map.removeLayer(marker)

      marker = L.marker([latitude, longitude], {
        draggable: true
      }).addTo(map)
    })
  },
  methods: {
    ...mapActions('map', [NEXT_LOCATE])
  }
}
</script>

<style>
.map-item {
  height: 100%;
}
</style>
