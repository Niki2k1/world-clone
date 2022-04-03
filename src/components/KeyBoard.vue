<template>
  <div id="keyBoard">
    <button v-for="button in buttons" :key="`btn-${button}`" @click="setChar(button)">{{ button }}</button>
  </div>
</template>

<script>
export default {
  setup () {
    const buttons = [
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Z',
      'U',
      'I',
      'O',
      'P',
      'Ü',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'Ö',
      'Ä',
      'Y',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      '<-'
    ]

    return { buttons }
  },
  methods: {
    setChar (char) {
      this.$store.dispatch('setChar', char)
    }
  }
}
</script>

<style scoped>
#keyBoard {
  margin: auto 0 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: .25rem;
}

button {
  padding: .5rem;
  font-size: .75rem;
  background-color: transparent;
  border: 1px solid var(--border);
  border-radius: 3px;
  color: inherit;
}
</style>
