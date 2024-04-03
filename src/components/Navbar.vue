<script setup>
import {ref} from "vue";

var icons = ref([
  {id: 1, name: 'App 1', src: '/app/message.png'},
  {id: 2, name: 'App 2', src: '/app/photo.png'},
  {id: 3, name: 'Maps', src: '/app/geolocalisation.png'},
  {id: 4, name: 'App 4', src: '/app/music-2021-05-25.png'},
])

</script>

<template>
  <div class="absolute bottom-5 left-0 right-0 m-auto flex justify-center items-center w-full">
<nav class="relative dock h-[70px] w-[250px] bg-white">
  <div v-for="icon in icons" :key="icon.id" class="app">
    <img class="w-[57px] h-[57px]" :src="icon.src" :alt="icon.name">
  </div>
</nav>
  </div>
</template>

<style scoped lang="postcss">
.dock {
  background-color: #ffffff66;
  padding: .3rem;
  border-radius: 1.2rem;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  transition: transform .3s ease;
}

.app {
  margin: 0 .3rem;
  cursor: pointer;
  transition: transform .3s ease;
}

.dock .app:hover {
  transform: scale(2);
}
</style>