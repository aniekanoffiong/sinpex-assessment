import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { BoardInterface } from '../../../interfaces/BoardInterface'

export const useBoardStore = defineStore('board', () => {
  const boardItems = ref([] as BoardInterface[])
  const hoverBoard = ref()
  const hoverCard = ref()
  const currentCard = ref()
  // const doubleCount = computed(() => count.value * 2)

  function handleDragStart(e: DragEvent, cardId: number) {
    e.stopPropagation();
    currentCard.value = cardId;
    e.dataTransfer!.effectAllowed = "move";
    e.dataTransfer!.setData("cardId", cardId.toString());
  }

  function handleDragOver(e: DragEvent, [boardId, cardId]: [boardId: number, cardId: number | null]) {
    e.preventDefault()
    // console.log(boardId, cardId)
    hoverBoard.value = boardId
    hoverCard.value = cardId
  }

  function handleDrop(e: DragEvent, [boardId, cardId]: [boardId: number, cardId: number | null]) {
    hoverBoard.value = null
    hoverCard.value = null
    e.stopPropagation();
    const dragCardId = e.dataTransfer!.getData("cardId");
    // console.log(dragCardId, boardId, cardId)
    e.dataTransfer!.dropEffect = "move";
  }

  function setBoards(boardList: BoardInterface[]) {
    boardItems.value = boardList
  }

  function moveCardToBoard() {

  }

  return {
    hoverBoard,
    hoverCard,
    currentCard,
    boardItems,
    setBoards,
    moveCardToBoard,
    handleDragStart,
    handleDragOver,
    handleDrop
  }
})
