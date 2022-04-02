<template>
  <div id="app-bar">
    <button @click="toggle">{{ darkMode ? '☀️' : '🌑' }}</button>
    <h1>Worldl</h1>
    <button></button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    toggle () {
      this.$store.dispatch('toggleDarkMode')
    }
  },
  computed: {
    ...mapGetters({
      darkMode: 'darkMode'
    })
  }
}
</script>

<style scoped>
#app-bar {
  width: 30rem;
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
