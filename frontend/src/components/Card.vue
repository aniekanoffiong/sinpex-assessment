<script setup lang="ts">
  import { daysBetween } from '@/utils';
  import { type CardInterface } from '../../../interfaces/CardInterface'
  import { useBoardStore } from '../stores/board'
  import { storeToRefs } from 'pinia';
  
  const store = useBoardStore()
  const { handleDragStart, handleDragOver, handleDrop } = store
  const { hoverBoard, hoverCard, currentCard } = storeToRefs(store);
  const { card } = defineProps<{ card: CardInterface }>();
  console.log(hoverBoard, card.boardId)
  console.log(card.id, currentCard, hoverCard)
</script>

<template>
  <div class="card"
    :class="{'hovered': hoverCard === card.id && currentCard !== card.id }"
    draggable="true"
    @dragstart="(e: DragEvent) => handleDragStart(e, card.id)"
    @dragover.prevent="(e: DragEvent) => handleDragOver(e, [card.boardId, card.id])"
    @drop="(e: DragEvent) => handleDrop(e, [card.boardId, card.id])"
  >
    <div class="title">{{ card.title }}</div>
    <progress id="progress" :value="38" :max="100">40%</progress>
    <div class="date-info">
      Updated {{ daysBetween(card.updated, new Date()) }} days ago
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0.7rem;
  background-color: #fff;
  width: 100%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  cursor: move;
}
progress {
  width: 100%;
  height: 1.2rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}
progress::-webkit-progress-bar {
  background-color: yellow;
  border-radius: 7px;
}
progress::-webkit-progress-value {
  background-color: #0d0d0d;
  border-radius: 7px;
  box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 );
}
.date-info {
  font-size: 0.8rem;
}
.hovered {
  background-color: #fff87c;
  border: 1px solid #333;
}
</style>