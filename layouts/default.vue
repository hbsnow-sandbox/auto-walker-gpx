<template lang="pug">
  v-app(dark)
    v-toolbar(app)
      v-toolbar-title {{ title }}
      v-spacer
      v-toolbar-items
        v-layout(align-center)
          v-flex
            v-chip(disabled)
              v-avatar.blue
                b 緯度
              | {{ CURRENT.latitude }}
              span(v-if="NEXT_SELECTED")
                v-icon keyboard_arrow_right
              span(v-if="NEXT_SELECTED")
                | {{ NEXT.latitude }}
            v-chip(disabled)
              v-avatar.blue
                b 経度
              | {{ CURRENT.longitude }}
              span(v-if="NEXT_SELECTED")
                v-icon keyboard_arrow_right
              span(v-if="NEXT_SELECTED")
                |  {{ NEXT.longitude }}
            v-chip(disabled v-if="NEXT_SELECTED")
              v-avatar.blue
                b 距離
              | {{ DISTANCE }}
    v-content
      nuxt
    v-footer(app)
      v-layout(align-center, justify-center)
        v-btn
          v-icon place
        v-btn
          v-icon directions_walk
        v-btn
          v-icon directions_run
        v-btn
          v-icon local_taxi
</template>

<script>
import { mapGetters } from 'vuex'
import { NEXT_SELECTED, CURRENT, NEXT, DISTANCE } from '../store/types'
import configs from '../configs'

export default {
  data() {
    return {
      title: configs.title
    }
  },
  computed: {
    ...mapGetters('map', [NEXT_SELECTED, CURRENT, NEXT, DISTANCE])
  }
}
</script>
