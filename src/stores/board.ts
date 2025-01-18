import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('board', () => {
  const boardItems = ref([])
  // const doubleCount = computed(() => count.value * 2)
  function addItemToBoard(item) {
    boardItems.value.push(item)
  }

  return { boardItems, addItemToBoard }
})
