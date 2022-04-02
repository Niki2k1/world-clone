<template>
  <div class="grid">
    <div class="row" v-for="(tileRow, index) in tiles" :key="`row-${index}`">
      <div class="item" @click="setFocus(tile)" v-for="tile in tileRow" :key="tile" :class="`${tile.color} ${tile.focus ? 'focus' : ''}`">
        <h1>{{ tile.value }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    setFocus (tile) {
      this.$store.dispatch('setFocus', tile)
    }
  },
  computed: {
    ...mapGetters({
      tiles: 'tiles'
    })
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.item {
  border: 1px solid var(--border);
  height: 5rem;
  width: 5rem;
  cursor: pointer;
}

.focus {
  box-shadow: 0px 0px 10px 1px var(--shadow);
}

.yellow {
  background-color: var(--yellow);
}

.green {
  background-color: var(--green);
}
</style>
