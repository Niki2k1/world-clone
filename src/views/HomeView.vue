<template>
  <div id="home">
    <word-grid />
  </div>
</template>

<script>
import WordGrid from '@/components/WordGrid.vue'

export default {
  name: 'HomeView',
  components: { WordGrid }
}
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
}
</style>
