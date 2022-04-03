<template>
  <div id="footer">
    <p>© {{ year }} Niklas Lausch</p>
    <p class="small">für Justine 🤍</p>
  </div>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
#footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  width: 100%;
  text-align: center;
  margin: .25rem;
}

.small {
  font-size: .75rem ;
  margin-bottom: 1rem;
}
</style>
