<template lang="pug">
  v-app(dark)
    v-toolbar(app)
      v-toolbar-title {{ title }}
    v-content
      nuxt
</template>

<script>
import configs from '../configs'

export default {
  data() {
    return {
      title: configs.title
    }
  }
}
</script>
