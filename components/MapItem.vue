<template lang="pug">
  .map-item#map-item
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import L from 'leaflet'

export default {
  computed: {
    ...mapGetters('location', ['current', 'next'])
  },
  mounted() {
    this.initMap({
      id: 'map-item',
      options: {
        center: L.latLng(this.current.latitude, this.current.longitude),
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
    ...mapActions('map', ['initMap']),
    ...mapActions('location', ['locateNext'])
  }
}
</script>

<style>
.map-item {
  height: 100%;
}
</style>
