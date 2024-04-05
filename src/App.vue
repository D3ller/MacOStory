<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Top from "@/components/Top.vue";
import Notif from "@/components/Notif.vue"
import {ref, watch} from "vue";
import store from "@/store.js";

const isActive = ref('inActive')

watch(() => store.seePhoto, async (newValue) => {
  if (newValue === true) {

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';
  }
});

watch(() => store.ArthurSlice === 3, async (newValue) => {
console.log(newValue)
})


</script>

<template>

  <div class="flex w-full justify-center">
  <div class="ubuntu min-w-[380px] max-w-[380px] overflow-hidden">
    <Notif :class="isActive" :nom="store.Author" :content="store.Message"></Notif>
    <Top></Top>
  <RouterView />
  </div>
  </div>

</template>

<style lang="postcss" scoped>
.ubuntu {
  height: 100vh;
}
</style>