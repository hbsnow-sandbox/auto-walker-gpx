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
              | {{ lat }}
            v-chip(disabled)
              v-avatar.blue
                b 経度
              | {{ lng }}
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
import configs from '../configs'

export default {
  data() {
    return {
      title: configs.title
    }
  },
  computed: {
    lat() {
      return this.$store.state.map.lat
    },
    lng() {
      return this.$store.state.map.lng
    }
  }
}
</script>
