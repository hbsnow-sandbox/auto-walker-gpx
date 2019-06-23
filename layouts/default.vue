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
              | {{ currentLatitude }}
              span(v-if="hasNext")
                v-icon keyboard_arrow_right
              span(v-if="hasNext")
                | {{ nextLatitude }}
            v-chip(disabled)
              v-avatar.blue
                b 経度
              | {{ currentLongitude }}
              span(v-if="hasNext")
                v-icon keyboard_arrow_right
              span(v-if="hasNext")
                |  {{ nextLongitude }}
            v-chip(disabled v-if="hasNext")
              v-avatar.blue
                b 距離
              | {{ distance }}
    v-content
      nuxt
    v-footer(app)
      v-layout(align-center justify-center)
        v-btn
          v-icon my_location
        v-btn
          v-icon pause
        v-btn
          v-icon directions_walk
        v-btn
          v-icon directions_run
        v-btn
          v-icon directions_car
</template>

<script>
import { mapGetters } from 'vuex'
import configs from '../configs'

export default {
  data() {
    return {
      title: configs.title
    }
  },
  computed: {
    ...mapGetters('location', [
      'hasNext',
      'currentLatitude',
      'currentLongitude',
      'next',
      'nextLatitude',
      'nextLongitude'
    ])
  }
}
</script>
