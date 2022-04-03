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
  grid-template-rows: repeat(6, 4rem);
  gap: .5rem;
  margin-bottom: 2rem;
  height: 100%;
  width: 100%;
  justify-items: center;
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 4rem);
  gap: .5rem;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border);
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.item h1 {
  margin: 0;
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
