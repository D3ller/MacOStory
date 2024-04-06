<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['nom', 'photo'])
import store from "@/store.js";
import Other from "@/assets/json/Other.js"
import Emma from "@/assets/json/Emma2.json"
import Arthur from "@/assets/json/Arthur2.json"
let lastmessage = ref()
let length = ref()

onMounted(async () => {
  if(props.nom === 'Arthur' || props.nom === 'Emma') {
    console.log('ss')
  } else {
    length.value = Other[props.nom].length;
    lastmessage.value = Other[props.nom][length.value - 1].text
  }
})


</script>

<template>
  <router-link :to="'/imessage/'+nom" >
    <div class="flex my-4 px-2 relative cursor-pointer">
      <div class="flex justify-center items-center w-1/6">
        <div v-if="store.ArthurNewMsg && nom === 'Arthur' || store.EmmaNewMsg && nom === 'Emma'" class="w-3 h-3 mr-2 bg-[#3478f6] rounded-full"></div>
        <img :src="photo === null ? 'test' : '/default.png'"
             class="w-10 h-10 rounded-full bg-sky-200" />
      </div>
      <div class="flex-col ml-2">
        <div class="flex justify-between mr-2">
          <p class="font-SFDisplay font-medium text-white">{{nom}}</p>
          <div class="flex items-center gap-2 absolute right-[20px]"><p class="font-SFDisplay font-normal text-[14px] text-[#757575]">11:44</p>
            <svg width="8" height="10" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.74512 12.3252C2.01172 12.3252 2.22363 12.2295 2.4082 12.0518L7.65137 6.93164C7.88379 6.69922 7.99316 6.45996 8 6.16602C8 5.87207 7.89062 5.62598 7.65137 5.40039L2.4082 0.273438C2.22363 0.0957031 2.00488 0 1.74512 0C1.21191 0 0.788086 0.423828 0.788086 0.950195C0.788086 1.20996 0.897461 1.45605 1.08887 1.64746L5.7373 6.16602L1.08887 10.6777C0.897461 10.8691 0.788086 11.1152 0.788086 11.375C0.788086 11.9014 1.21191 12.3252 1.74512 12.3252Z" fill="#757575" fill-opacity="1"/>
          </svg></div>

        </div>
        <div class="">
        <div class="font-SFDisplay text-[14px] text-white">
          <div v-if="nom === 'Arthur' || nom === 'Emma'">
            <p v-if="nom === 'Arthur'">
              {{Arthur.slice(store.ArthurSlice-1, store.ArthurSlice)[0].text}}
              <div v-if="Arthur.slice(store.ArthurSlice-1, store.ArthurSlice)[0].image">
                Image
              </div>
            </p>
            <p v-else>
              {{Emma.slice(store.EmmaSlice-1, store.EmmaSlice)[0].text}}
            </p>
          </div>
<div class="block w-[250px] text-ellipsis overflow-hidden" v-else>
          {{lastmessage}}
  </div></div>
        </div>
      </div>

    </div>

    <hr class="w-[80%] ml-auto border-[#1c1c1e] mr-2 opacity-30">
  </router-link>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>