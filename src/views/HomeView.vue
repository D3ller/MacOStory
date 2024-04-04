<template>
  <div class="bg-ios">
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
          @click="router.push({ name: cell.app.name})"
      >
        <img :src="cell.app.src" :alt="cell.app.name">
      </div>
    </div>
  </div>

  <Navbar></Navbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Finder from '@/components/Finder.vue';
import Navbar from "@/components/Navbar.vue";
import router from "@/router/index.js";

const apps = [
  { id: 1, name: 'Safari', src: '/app/safari-2021-06-02.png' },
  { id: 2, name: 'Calculator', src: '/app/calculator-2021-04-29.png' },
  {id: 3, name: 'Maps', src: '/app/maps.png'},
  {id: 4, name: 'Notes', src: '/app/notes-2021-05-25.png'},
  {id: 5, name: 'Systeme', src: '/app/system-preferences-2021-06-03.png'}
];

const appPositions = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4
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
  grid-template-columns: repeat(auto-fill, 94px);
  grid-template-rows: repeat(auto-fill, 70px);
  padding: 2px;
  justify-items: center;
  @apply pt-6;
}

.grid-cell {
  @apply w-[64px] h-[64px] flex justify-center items-center justify-items-center relative;
}

.app {
  @apply w-full h-full rounded-[5px] flex justify-center items-center relative;
}

.app img {
  @apply w-full h-full;
}

.app img:active {
  @apply cursor-move;
}

.bg-ios {
  background-image: url("/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x2160-1455.jpg");
}
</style>
