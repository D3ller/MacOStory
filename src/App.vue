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
    store.ArthurNewMsg = true
    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';

    const audio = new Audio('/song/ding.mp3');
    await audio.play();

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';
  }
});

setInterval(() => {
  console.log(store.ArthurSlice + " " + store.EmmaSlice)
}, 200)

const unwatch = watch(() => store.ArthurSlice, async (newValue, oldValue) => {
  if(newValue === 9) {
    console.log(newValue);
    store.Author = "Emma";
    store.Message = "Hé, qu'est-ce que tu fais ? Je t'attends.\n";
    store.updateEmmaSlice();
    store.EmmaWait = true
    store.Image = true
    store.EmmaNewMsg = true


    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';
    const audio = new Audio('/song/ding.mp3');
    await audio.play();

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';

    await new Promise(resolve => setTimeout(resolve, 1000));

    unwatch();
  }
}, { immediate: true });

const unwatch2 = watch(() => store.ArthurSlice, async (newValue, oldValue) => {
  if(newValue === 14) {
    console.log(newValue);
    store.Author = "Airtag";
    store.Message = "Un propriétaire de cette objet est à votre proximité!!\n";
    store.App = true;
    store.Localize = true;



    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'active';
    const audio = new Audio('/song/ding.mp3');
    await audio.play();

    await new Promise(resolve => setTimeout(resolve, 3000));

    isActive.value = 'inActive';

    await new Promise(resolve => setTimeout(resolve, 1000));

    store.App = false;

    unwatch2();
  }
}, { immediate: true });


const finish = watch(() => store.ArthurSlice, async (newValue, oldValue) => {
  if(newValue === 30) {
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

function onClicks() {
  if (store.Author === 'Airtag') {
    router.push({ name: 'localization' });
  } else {
    router.push({ name: 'imessage_contact' });
  }
}

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
    <div class="intro absolute z-10 bg-wallpaper h-full font-SFDisplay" :class="{ 'transition-up': !overlayVisible }">
     <div class="page_accueil relative">
      <div class="titre_accueil flex flex-col">
          <p class="first-letter:uppercase font-SFDisplay text-center">{{ new Date().toLocaleString('fr-FR', { weekday: 'short', day: 'numeric' }) }} | Balayez pour commencer</p>
        <h1 class="text-center text-6xl">
          {{ new Date().getHours() }}:{{ new Date().getMinutes() }}
        </h1>
        <div>
        <h2 class="text-center mb-3">Inconnu virtuel : Le mystère de Thomas</h2>
      </div>
      <div class="p_accueil">
        <p class="mx-5">
        Bienvenue dans ce jeu interactif où vous allez aider Thomas à comprendre les phénomènes étranges qui se produisent autour de lui.
        Vous aurez l'opportunité d'assister Thomas en utilisant son téléphone pour
        explorer différentes applications afin de l'aider à comprendre ce qui lui arrive.
      </p>
      </div>
      </div>
      <div class="flex justify-center mt-5">
        <button class="w-[150px] h-[30px] rounded-md border font-Poppins text-white font-bold bg-blue-900" @click.prevent="play()">Jouer</button>
      </div>
      <hr class="hr_accueil">

       <div class="absolute w-8 h-8 flex items-center justify-center bottom-[40px]">
         <svg width="10" height="21" viewBox="0 0 10 21" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0.376953 2.94629H9.62305V2.43652C9.62305 1.23242 8.99902 0.617188 7.83887 0.617188H2.16113C1.00098 0.617188 0.376953 1.23242 0.376953 2.43652V2.94629ZM3.9541 20.6387H6.0459C7.20605 20.6387 7.82129 20.0322 7.82129 18.8193V9.72266C7.82129 8.83496 8.02344 8.19336 8.35742 7.69238L8.91113 6.85742C9.35059 6.18066 9.62305 5.56543 9.62305 4.80078V4.09766H0.376953V4.80078C0.376953 5.56543 0.640625 6.18066 1.08008 6.85742L1.64258 7.69238C1.96777 8.19336 2.16992 8.83496 2.16992 9.72266V18.8193C2.16992 20.0322 2.79395 20.6387 3.9541 20.6387ZM5 13.9766C4.24414 13.9766 3.75195 13.4316 3.75195 12.6494V10.2236C3.75195 9.44141 4.24414 8.91406 5 8.92285C5.75586 8.93164 6.24805 9.45898 6.24805 10.2236V12.6494C6.24805 13.4316 5.75586 13.9766 5 13.9766ZM5 13.3174C5.41309 13.3174 5.76465 12.9746 5.76465 12.5615C5.76465 12.1484 5.41309 11.7969 5 11.7969C4.58691 11.7969 4.23535 12.1484 4.23535 12.5615C4.23535 12.9746 4.58691 13.3174 5 13.3174Z" fill="#1C1C1E"/>
         </svg>

       </div>

       <div class="absolute w-8 h-8 bg-sky-800 flex items-center justify-center">
         <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.01953 17.8809H18.9629C20.8613 17.8809 21.8633 16.8965 21.8633 15.0156V5.78711C21.8633 3.90625 20.8613 2.92188 18.9629 2.92188H16.625C15.9395 2.92188 15.7197 2.80762 15.2891 2.35938L14.5947 1.6123C14.1377 1.12891 13.6719 0.891602 12.7754 0.891602H9.16309C8.2666 0.891602 7.80078 1.12891 7.34375 1.6123L6.64941 2.35938C6.22754 2.79883 5.99902 2.92188 5.31348 2.92188H3.01953C1.12109 2.92188 0.12793 3.90625 0.12793 5.78711V15.0156C0.12793 16.8965 1.12109 17.8809 3.01953 17.8809ZM10.9912 15.1211C8.36328 15.1211 6.25391 13.0117 6.25391 10.375C6.25391 7.72949 8.36328 5.62012 10.9912 5.62012C13.6279 5.62012 15.7373 7.72949 15.7373 10.375C15.7373 13.0117 13.6279 15.1211 10.9912 15.1211ZM16.2998 7.14062C16.2998 6.5166 16.8359 5.97168 17.4775 5.97168C18.1104 5.97168 18.6465 6.5166 18.6465 7.14062C18.6465 7.79102 18.1104 8.30078 17.4775 8.30957C16.8359 8.30957 16.2998 7.7998 16.2998 7.14062ZM10.9912 13.5303C12.7402 13.5303 14.1465 12.124 14.1465 10.375C14.1465 8.61719 12.7402 7.21094 10.9912 7.21094C9.25098 7.21094 7.84473 8.61719 7.84473 10.375C7.84473 12.124 9.25977 13.5303 10.9912 13.5303Z" fill="#1C1C1E"/>
         </svg>

       </div>

     </div>
    </div>
  <div class="ubuntu min-w-[380px] min-h-[685px] max-h-[685px] max-w-[380px] overflow-hidden relative">
    <Notif :class="isActive" :nom="store.Author" :content="store.Message" @click="onClicks" :app="store.App"></Notif>
    <Top></Top>
  <RouterView class="py-5"/>
    <div @click="router.push({name: 'home'})" class="homebar"></div>

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

.homebar {
  @apply w-[60%] h-1 bg-white absolute bottom-[12px] left-0 right-0 m-auto rounded-full cursor-pointer
}

.bg-wallpaper {
  background: url("/IphoneWallpaper.jpg");
  background-size: cover;
}
</style>