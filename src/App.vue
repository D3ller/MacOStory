<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Top from "@/components/Top.vue";
import Notif from "@/components/Notif.vue"
import {onMounted, ref, watch} from "vue";
import store from "@/store.js";
import router from "@/router/index.js";

const isActive = ref('inActive')
const overlayVisible = ref(true)
const gameFinish = ref('end_inActive')

onMounted(() => {
  router.push({ name: 'home' })
})

function play() {
  overlayVisible.value = false;
  setTimeout(() => {
    overlayVisible.value = false;
  }, 500); // Attendez 500ms avant de masquer l'overlay pour permettre à la transition de se terminer
}

watch(() => store.seePhoto, async (newValue) => {
  if (newValue === true) {
    store.updateArthurSlice()
    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';
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
    store.EmmaWait = true

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';

    await new Promise(resolve => setTimeout(resolve, 1000));

    unwatch();
  }
}, { immediate: true });

const finish = watch(() => store.ArthurSlice, async (newValue, oldValue) => {
  // Vérifie si la condition spécifique est remplie
  if(newValue === 21) {
    setTimeout(() => {gameFinish.value = 'end'}, 5000)
    finish();
  }
}, { immediate: true });

const finishwatch = watch(() => store.EmmaSlice, async (newValue, oldValue) => {
  if(newValue === 7) {
    store.EmmaWait = false
    finishwatch();
  }
}, { immediate: true });

</script>

<template>

  <div class="flex w-full justify-center">
    <!--page de fin-->
    <div class="intro absolute z-10 bg-black text-white w-full h-screen font-Poppins flex flex-col items-center justify-center" :class="gameFinish">
      <h1>FIN DU JEU</h1>
      <div class="max-w-96" :class="timeEnd">
        <img src="/article.png" alt="" class="w-full">
      </div>
      <a href="/" class="text-white no-underline bg-red-500 py-2 px-3 rounded-md mt-3">REJOUER</a>
    </div>

    <!--page d accueil-->
    <div class="intro absolute z-10 bg-white w-full h-screen font-Poppins" :class="{ 'transition-up': !overlayVisible }">
     <div class="page_accueil">
      <div class="titre_accueil">
        <h1 class="text-center mb-3">Inconnu virtuel : Le mystère de Thomas</h1>
      </div>
      <div class="p_accueil">
        <p class="mx-5">
        Bienvenue dans ce jeu interactif où vous allez aider Thomas à comprendre les phénomènes étranges qui se produisent autour de lui.
        Vous aurez l'opportunité d'assister Thomas en utilisant son téléphone pour
        explorer différentes applications afin de l'aider à comprendre ce qui lui arrive.
      </p>
      </div>
      <div class="flex justify-center mt-5">
        <button class="w-[150px] h-[30px] rounded-md border font-Poppins text-white font-bold bg-blue-900" @click.prevent="play()">Jouer</button>
      </div>
      <hr class="hr_accueil">
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
.page_accueil{
  width: 380px;
  margin:  100px auto 0px auto ;
}
.titre_accueil{
  margin-bottom: 30px;
}
.p_accueil{
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.mx-5{
  font-style: normal ;
}
.hr_accueil{
  height: 2px;
  background-color: rgba(55, 55, 55, 0.722);
  border: none;
  width: 300px;
  border-radius: 10px;
  margin: 50px auto 0px auto;
}
.transition-up {
  transition: transform 0.5s ease-in-out;
  transform: translateY(-100%);
}

.end_inActive {
  display: none;
}

.timeend {
  display: none;
}
</style>