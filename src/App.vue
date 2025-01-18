<script setup lang="ts">

</script>

<template>
  <main>
    <header>
      Board
    </header>

    <Board />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  padding: 0 1.5rem;
  background-color: #ededed;
}

/* #app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
} */

header {
  line-height: 1.5;
  font-size: 1.7rem;
  font-weight: 600;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
