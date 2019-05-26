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
      L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png')
    )

    map.locate()

    map.on('locationfound', e => {
      map.setView([e.latlng.lat, e.latlng.lng], 18)
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
      console.log(e.latlng)
    })

    map.on('locationerror', e => {
      console.error(e)
    })

    let lat
    let lng
    map.on('click', e => {
      lat = e.latlng.lat
      lng = e.latlng.lng

      console.log('lat: ' + lat + ', lng: ' + lng)
    })
  }
}
</script>

<style>
.map-item {
  height: 100%;
}
</style>
