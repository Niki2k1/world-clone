<template>
  <app-bar />
  <router-view />
  <key-board />
  <footer-bar />
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import KeyBoard from '@/components/KeyBoard.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  components: {
    AppBar,
    KeyBoard,
    FooterBar
  },
  mounted () {
    this.$store.dispatch('init')
  }
}
</script>

<style>
:root {
  --light: #f7f5e7ff;
  --light-border: #A3A299;
  --dark: #1c1c1a;
  --dark-border: #32322F;
  --green: #6efa5fff;
  --yellow: #fae55fff;
  --light-shadow: rgba(0, 0, 0, 0.2);
  --dark-shadow: rgba(255, 255, 255, 0.2);
}

.dark {
  background-color: var(--dark);
  color: var(--light);
  --border: var(--dark-border);
  --shadow: var(--dark-shadow);
  --shadow: var(--dark-shadow);
  --yellow: #cfbe4e;
  --green: #5ed451;
}

.light {
  background-color: var(--light);
  --border: var(--light-border);
  --shadow: var(--light-shadow);
  color: var(--dark);
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
