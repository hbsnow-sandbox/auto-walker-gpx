<template lang="pug">
  .map-item#map-item
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  mounted() {
    const map = L.map('map-item')
    map.setView([35.6825, 139.752778], 18)
    map.addLayer(L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'))

    L.marker([35.6825, 139.752778]).addTo(map)
    let lat
    let lng
    map.on('click', e => {
      lat = e.latlng.lat
      lng = e.latlng.lng

      // console.log('lat: ' + lat + ', lng: ' + lng)
    })
  }
}
</script>

<style>
.map-item {
  height: 100%;
}
</style>
