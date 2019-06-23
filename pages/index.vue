<template lang="pug">
  .page
    v-form
      v-container
        h3 初期位置の緯度と経度を設定してください。

        v-layout
          v-flex(xs12 md5)
            v-text-field(
              label="緯度"
              :value="currentLatitude"
              required
            )

          v-flex(xs12 md5)
            v-text-field(
              label="経度"
              :value="currentLongitude"
              required
            )

          v-flex(xs12 md2)
            v-btn(
              block
              :loading="loading"
              :disabled="loading"
              @click="locateCurrent"
            )
              v-icon pin_drop
              | 現在地取得

        .text-xs-center
          v-btn(outline large to="map" nuxt) 実行
            v-icon arrow_right
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'top',
  computed: {
    ...mapGetters('location', [
      'loading',
      'currentLatitude',
      'currentLongitude'
    ])
  },
  methods: {
    ...mapActions('location', ['locateCurrent'])
  }
}
</script>

<style>
.page {
  height: 100%;
}
</style>
