<template lang="pug">
  .map-item#map-item
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { CURRENT, NEXT, NEXT_LOCATE, INIT_MAP } from '../store/types'

export default {
  computed: {
    ...mapGetters('location', [CURRENT, NEXT])
  },
  mounted() {
    this.INIT_MAP({
      id: 'map-item',
      options: {
        center: [this.CURRENT.latitude, this.CURRENT.longitude],
        zoom: 18,
        // layerは別に状態をもたせる
        // https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
        ]
      }
    })

    // marker
    // L.marker(coords).addTo(map)
    // let marker
    // map.on('click', e => {
    //   const latitude = e.latlng.lat
    //   const longitude = e.latlng.lng

    //   this.NEXT_LOCATE({ latitude, longitude })
    //   if (marker) map.removeLayer(marker)

    //   marker = L.marker([latitude, longitude], {
    //     draggable: true
    //   }).addTo(map)

    //   marker.on('moveend', e => {
    //     this.NEXT_LOCATE({
    //       latitude: e.target.getLatLng().lat,
    //       longitude: e.target.getLatLng().lng
    //     })
    //   })
    // })
  },
  methods: {
    ...mapActions('map', [INIT_MAP]),
    ...mapActions('location', [NEXT_LOCATE])
  }
}
</script>

<style>
.map-item {
  height: 100%;
}
</style>
