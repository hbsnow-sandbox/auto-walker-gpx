<template lang="pug">
  .map-item#map-item
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  mounted() {
    const map = L.map('map-item')
    map.setView([35.681236, 139.767125], 18)
    map.addLayer(
      L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png')
    )

    map.locate()

    map.on('locationfound', e => {
      console.log(e.latlng)
    })

    map.on('locationerror', e => {
      console.error(e)
    })

    L.marker([35.6825, 139.752778]).addTo(map)
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
