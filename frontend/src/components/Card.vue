<script setup lang="ts">
  import { daysBetween } from '@/utils';
  import { type CaseInterface } from '../../../interfaces/CaseInterface'
  import { useBoardStore } from '../stores/board'
  import { storeToRefs } from 'pinia';
  
  const store = useBoardStore()
  const { handleDragStart, handleDragOver, handleDrop } = store
  const { hoverBoard, hoverCase, currentCase } = storeToRefs(store);
  const { case } = defineProps<{ case: CaseInterface }>();
  console.log(hoverBoard, case.boardId)
  console.log(case.id, currentCase, hoverCase)
</script>

<template>
  <div class="case"
    :class="{'hovered': hoverCase === case.id && currentCase !== case.id }"
    draggable="true"
    @dragstart="(e: DragEvent) => handleDragStart(e, case.id)"
    @dragover.prevent="(e: DragEvent) => handleDragOver(e, [case.boardId, case.id])"
    @drop="(e: DragEvent) => handleDrop(e, [case.boardId, case.id])"
  >
    <div class="title">{{ case.title }}</div>
    <progress id="progress" :value="38" :max="100">40%</progress>
    <div class="date-info">
      Updated {{ daysBetween(case.updated, new Date()) }} days ago
    </div>
  </div>
</template>

<style scoped>
.case {
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