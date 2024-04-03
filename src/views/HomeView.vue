<template>
  <Finder window_name="default name">
  </Finder>
  <div class="grids">
    <div
        v-for="cell in gridCells"
        :key="cell.id"
        class="grid-cell"
        @drop="handleDrop(cell)"
        @dragover="handleDragOver"
    >
      <div
          v-if="cell.app"
          draggable="true"
          @dragstart="handleDragStart(cell, $event)"
          class="app"
      >
        <img :src="cell.app.src" :alt="cell.app.name">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Finder from '@/components/Finder.vue';

const apps = [
  { id: 1, name: 'App 1', src: '/app/message.png' },
  { id: 2, name: 'App 2', src: '/app/photo.png' },
  {id: 3, name: 'Maps', src: '/app/maps.png'},
];

const appPositions = {
  1: 0,
  2: 1,
  3: 2,
};

const gridCells = ref(Array.from({ length: 128 }, (_, index) => ({
  id: index,
  app: null,
})));

apps.forEach(app => {
  const position = appPositions[app.id];
  if (position !== undefined) {
    gridCells.value[position] = { id: position, app: app };
  }
});

const draggedApp = ref(null);

const handleDragStart = (cell, event) => {
  draggedApp.value = { app: cell.app, originIndex: gridCells.value.indexOf(cell) };
  event.dataTransfer.effectAllowed = 'move';
};

const handleDrop = (targetCell) => {
  if (draggedApp.value && !targetCell.app) {
    targetCell.app = draggedApp.value.app;
    if (draggedApp.value.originIndex !== -1) {
      gridCells.value[draggedApp.value.originIndex].app = null;
    }
    draggedApp.value = null;
  }
};

const handleDragOver = (event) => {
  event.preventDefault();
};

</script>

<style lang="postcss" scoped>
.grids {
  display: grid;
  grid-template-columns: repeat(auto-fill, 70px);
  grid-template-rows: repeat(auto-fill, 70px);
  column-gap: 10px;
  padding: 2px;
}

.grid-cell {
  @apply w-[64px] h-[64px] flex justify-center items-center justify-items-center;
}

.app img:active {
  @apply cursor-move;
}
</style>
