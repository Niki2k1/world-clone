<template>
  <div id="app-bar">
    <button @click="toggle">{{ darkMode ? '☀️' : '🌑' }}</button>
    <h1>Wortel</h1>
    <h1>{{ wonWords }} / {{ wordListLength }}</h1>
  </div>
</template>

<script>
import Dictionary from '@/Dictionary'
import { mapGetters } from 'vuex'
export default {
  methods: {
    toggle () {
      this.$store.dispatch('toggleDarkMode')
    }
  },
  computed: {
    wordListLength () {
      return Dictionary.getWordListLength()
    },
    ...mapGetters({
      darkMode: 'darkMode',
      wonWords: 'wonWords'
    })
  }
}
</script>

<style scoped>
#app-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  background: transparent;
  border: 0;
  font-size: 2rem;
}
</style>
