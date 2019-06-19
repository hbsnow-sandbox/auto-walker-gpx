<template lang="pug">
  .page
    v-form
      v-container
        h3 初期位置の緯度と経度を設定してください。

        v-layout
          v-flex(xs12 md5)
            v-text-field(
              label="緯度"
              :value="CURRENT.latitude"
              required
            )

          v-flex(xs12 md5)
            v-text-field(
              label="経度"
              :value="CURRENT.longitude"
              required
            )

          v-flex(xs12 md2)
            v-btn(
              block
              :loading="LOADING"
              :disabled="LOADING"
              @click="CURRENT_LOCATE"
            )
              v-icon pin_drop
              | 現在地取得

        .text-xs-center
          v-btn(outline large to="map" nuxt) 実行
            v-icon arrow_right
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { LOADING, CURRENT, CURRENT_LOCATE } from '../store/types'

export default {
  layout: 'top',
  computed: {
    ...mapGetters('location', [LOADING, CURRENT])
  },
  methods: {
    ...mapActions('location', [CURRENT_LOCATE])
  }
}
</script>

<style>
.page {
  height: 100%;
}
</style>
