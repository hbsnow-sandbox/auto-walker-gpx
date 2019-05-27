<template lang="pug">
  .hoge
    v-form
      v-container
        h3 初期位置の緯度と経度を設定してください。

        v-layout
          v-flex(xs12 md5)
            v-text-field(
              label="緯度"
              :value="lat"
              required
            )

          v-flex(xs12 md5)
            v-text-field(
              label="経度"
              :value="lng"
              required
            )

          v-flex(xs12 md2)
            v-btn(
              block
              :loading="loading"
              :disabled="loading"
              @click="locate"
            )
              v-icon pin_drop
              | 現在地取得

        .text-xs-center
          v-btn(outline large to="map" nuxt) 実行
            v-icon arrow_right
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'top',
  computed: {
    loading() {
      return this.$store.state.map.loading
    },
    lat() {
      return this.$store.state.map.lat
    },
    lng() {
      return this.$store.state.map.lng
    }
  },
  methods: {
    ...mapActions({
      locate: 'map/locate'
    })
  }
}
</script>

<style>
.hoge {
  height: 100%;
}
</style>
