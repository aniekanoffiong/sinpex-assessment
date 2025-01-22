import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { BoardInterface } from '../../../interfaces/BoardInterface'

export const useBoardStore = defineStore('board', () => {
  const boardItems = ref([] as BoardInterface[]);
  const hoverBoard = ref();
  const hoverCase = ref();
  const currentCase = ref();
  // const doubleCount = computed(() => count.value * 2)

  function handleDragStart(e: DragEvent, caseId: number) {
    e.stopPropagation();
    currentCase.value = caseId;
    e.dataTransfer!.effectAllowed = "move";
    e.dataTransfer!.setData("caseId", caseId.toString());
  }

  function handleDragOver(e: DragEvent, [boardId, caseId]: [boardId: number, caseId: number | null]) {
    e.preventDefault()
    // console.log(boardId, caseId)
    hoverBoard.value = boardId
    hoverCase.value = caseId
  }

  function handleDrop(e: DragEvent, [boardId, caseId]: [boardId: number, caseId: number | null]) {
    hoverBoard.value = null;
    hoverCase.value = null;
    e.stopPropagation();
    const dragCaseId = e.dataTransfer!.getData("caseId");
    e.dataTransfer!.dropEffect = "move";
  }

  function setBoards(boardList: BoardInterface[]) {
    boardItems.value = boardList
  }

  function moveCaseToBoard() {

  }

  return {
    hoverBoard,
    hoverCase,
    currentCase,
    boardItems,
    setBoards,
    moveCaseToBoard,
    handleDragStart,
    handleDragOver,
    handleDrop
  }
})
