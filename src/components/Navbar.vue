<script setup>
import {onMounted, ref} from "vue";
import { Icon } from '@iconify/vue'
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'radix-vue'
import router from "@/router/index.js";

const currentMenu = ref('')
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')
function handleClick() {
  alert('hello!')
}

var icons = ref([
  {id: 1, name: 'imessage_contact', src: '/app/message.png'},
  {id: 2, name: 'albums', src: '/app/photo.png'},
  {id: 3, name: 'localization', src: '/app/geolocalisation.png'},
  {id: 4, name: 'music', src: '/app/music-2021-05-25.png'},
])
</script>

<template>
  <div class="absolute bottom-5 left-0 right-0 m-auto flex justify-center items-center w-full">
<nav class="relative dock h-[70px] w-[250px] bg-white">
  <div v-for="icon in icons" :key="icon.id" class="app" @click="router.push({ name: icon.name })">
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
</style>