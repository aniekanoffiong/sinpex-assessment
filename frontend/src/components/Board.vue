<script setup lang="ts">
  import { onMounted } from 'vue';
  import Card from './Card.vue'
  import { type BoardInterface } from '../../../interfaces/BoardInterface'
  import Pencil from './icons/Pencil.vue';
  import { useBoardStore } from '../stores/board'
  import { storeToRefs } from 'pinia';
  
  const store = useBoardStore()
  const { hoverBoard } = storeToRefs(store)
  const { board } = defineProps<{ board: BoardInterface[] }>();

  // onMounted(async () => {
  //   try {
  //     const response = await fetch('/api/data');
  //     const data = await response.json()
  //     store.setBoards(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // });
</script>

<template>
  <div class="board-container">
    <div class="board" v-for="(boardItem, index) in board"
      :key="boardItem.id"
      :class="{'hovered': hoverBoard === boardItem.id}">
      <header>
        <span>{{ boardItem.title }}</span>
        <Pencil class="pencil-icon" />
      </header>
      <div class="card-container">
        <Card :card="cardItem" v-for="cardItem in boardItem.items" :key="cardItem.id" />
      </div>
      <button class="add-case-btn" v-if="index === 0">
        + Create Case
      </button>
    </div>
  </div>
</template>

<style scoped>
.board-container {
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  column-gap: 0.7rem;
}
.board {
  height: 100%;
  width: 20%;
  padding: 0.6rem;
  background-color: #ededed;
  border-radius: 0.6rem;
  position: relative;
}
.board:first-child {
  padding-bottom: 3.5rem;
}
header {
  display: flex;
  flex-direction: row;
  place-items: center;
  padding: 0 0.4rem 0.8rem;
}
header span {
  font-weight: 600;
  display: inline-block;
  margin-right: 0.6rem;
}
.pencil-icon {
  font-size: 1rem;
}
.card-container {
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
  overflow-y: scroll;
  max-height: 89%;
}
.board:not(:first-child) > .card-container {
  max-height: 91%;
}
.add-case-btn {
  padding: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  width: 93%;
  position: absolute;
  bottom: 0.6rem;
  background: #cacaca;
  border: transparent;
  border-radius: 0.4rem;
  text-align: left;
  cursor: pointer;
}
.hovered {
  background-color: #fff87c;
}
</style>