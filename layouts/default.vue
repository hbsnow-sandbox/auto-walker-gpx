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
              | {{ getCurrent.latitude }}
              v-icon keyboard_arrow_right
              | {{ getNext.latitude }}
            v-chip(disabled)
              v-avatar.blue
                b 経度
              | {{ getCurrent.longitude }}
              v-icon keyboard_arrow_right
              | {{ getNext.longitude }}
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
import { mapGetters, mapMutations } from 'vuex'
import { CURRENT, NEXT } from '../store/types'
import configs from '../configs'

export default {
  data() {
    return {
      title: configs.title
    }
  },
  computed: {
    ...mapGetters('map', {
      getCurrent: CURRENT,
      getNext: NEXT
    })
  },
  methods: {
    ...mapMutations('map', [CURRENT, NEXT])
  }
}
</script>
