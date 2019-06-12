<template lang="pug">
  .map-item#map-item
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  mounted() {
    const map = L.map('map-item')
    map.addLayer(
      // L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png')
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    )

    map.setView(
      [
        this.$store.state.map.current.latitude,
        this.$store.state.map.current.longitude
      ],
      18
    )

    // marker
    L.marker([
      this.$store.state.map.current.latitude,
      this.$store.state.map.current.longitude
    ]).addTo(map)

    let lat
    let lng
    let marker
    map.on('click', e => {
      lat = e.latlng.lat
      lng = e.latlng.lng

      console.log('lat: ' + lat + ', lng: ' + lng)
      if (marker) map.removeLayer(marker)
      marker = L.marker([lat, lng], {
        draggable: true
      }).addTo(map)
    })
  }
}
</script>

<style>
.map-item {
  height: 100%;
}
</style>
