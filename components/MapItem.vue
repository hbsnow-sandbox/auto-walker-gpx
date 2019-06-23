<template lang="pug">
  no-ssr
    l-map(:zoom=13 :center="[47.413220, -1.219482]" @click="alert")
      l-tile-layer(url="http://{s}.tile.osm.org/{z}/{x}/{y}.png")
      l-marker(:lat-lng="[47.413220, -1.219482]")
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('map', ['getMap']),
    ...mapGetters('location', ['current', 'next'])
  },
  methods: {
    alert(e) {
      console.log(e)
    },
    ...mapMutations('map', ['initMap']),
    ...mapActions('location', ['locateNext'])
  }
}
</script>

<style>
.map-item {
  height: 100%;
}
</style>
