<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Top from "@/components/Top.vue";
import Notif from "@/components/Notif.vue"
import {onMounted, ref, watch} from "vue";
import store from "@/store.js";
import router from "@/router/index.js";

const isActive = ref('inActive')
const overlayVisible = ref(true)

onMounted(() => {
  router.push({ name: 'home' })
})

function play() {
  overlayVisible.value = false
}

watch(() => store.seePhoto, async (newValue) => {
  if (newValue === true) {

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';
    store.updateArthurSlice()
  }
});

setInterval(() => {
  console.log(store.ArthurSlice + " " + store.EmmaSlice)
}, 200)

const unwatch = watch(() => store.ArthurSlice, async (newValue, oldValue) => {
  // Vérifie si la condition spécifique est remplie
  if(newValue === 4) {
    console.log(newValue);
    store.Author = "Emma";
    store.Message = "Hé, qu'est-ce que tu fais ? Je t'attends.\n";
    store.updateEmmaSlice();

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';

    await new Promise(resolve => setTimeout(resolve, 1000));

    unwatch();
  }
}, { immediate: true });


</script>

<template>

  <div class="flex w-full justify-center">
    <div class="intro absolute z-10 bg-white w-full h-screen font-Poppins" v-if="overlayVisible === true">
      <h1 class="text-center mb-3">titre du jeu</h1>
      <p class="mx-5">
        Bienvenue dans ce jeu interactif où vous allez aider Thomas à comprendre les phénomènes étranges qui se produisent autour de lui.
        Vous aurez l'opportunité d'assister Thomas en utilisant son téléphone pour
        explorer différentes applications afin de l'aider à comprendre ce qui lui arrive.
      </p>
      <div class="flex justify-center mt-5">
        <button class="w-[150px] h-[30px] rounded-md border font-Poppins text-white font-bold bg-blue-900" @click.prevent="play()">Jouer</button>
      </div>
    </div>
  <div class="ubuntu min-w-[380px] max-w-[380px] overflow-hidden relative">
    <Notif :class="isActive" :nom="store.Author" :content="store.Message" @click="router.push({name: 'imessage', params: {id: store.Author}})"></Notif>
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