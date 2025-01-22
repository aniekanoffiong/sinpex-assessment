<script setup lang="ts">
import { CaseStatus } from '../../interfaces/CaseStatus';
import Board from './components/Board.vue'

</script>

<template>
  <main>
    <header>
      Board
    </header>

    <Board :board="[
        {
          id: 1,
          title: 'TODO',
          items: [
            {
              id: 1,
              boardId: 1,
              title: 'Case 1',
              description: 'This is the first case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 3,
              boardId: 1,
              title: 'Case 3',
              description: 'This is the third case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 4,
              boardId: 1,
              title: 'Case 4',
              description: 'This is the fourth case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 5,
              boardId: 1,
              title: 'Case 5',
              description: 'This is the fifth case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 6,
              boardId: 1,
              title: 'Case 6',
              description: 'This is the sixth case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 7,
              boardId: 1,
              title: 'Case 7',
              description: 'This is the seventh case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            }
          ]
        },
        {
          id: 2,
          title: 'ONGOING',
          items: [
            {
              id: 1,
              boardId: 2,
              title: 'Case 2',
              description: 'This is the second case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 3,
              boardId: 2,
              title: 'Case 3',
              description: 'This is the third case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 4,
              boardId: 2,
              title: 'Case 4',
              description: 'This is the fourth case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 5,
              boardId: 2,
              title: 'Case 5',
              description: 'This is the fifth case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 6,
              boardId: 2,
              title: 'Case 6',
              description: 'This is the sixth case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            },
            {
              id: 7,
              boardId: 2,
              title: 'Case 7',
              description: 'This is the seventh case',
              status: CaseStatus.ACTIVE,
              created: new Date(),
              updated: new Date(),
            }
          ]
        }
      ]"
    />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 90vh;
  padding: 0 1.5rem;
  background-color: #fcfcfc;
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
  padding: 0.7rem 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
