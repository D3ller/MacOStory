<script setup>
import store from "@/store.js";
import {onMounted} from "vue";

onMounted(() => {
  store.seePhoto = true
  // store.onPhoto();
})

</script>
<template>
  <div id="galerie_body" class="w-full h-full bg-[#f3f3f3] relative flex justify-center items-center flex-col">
    <div id="galerie">
      <div v-if="!store.Image">
      <img class="img_galerie" src="@/assets/Image/image00001.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00002.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00003.jpeg" alt="">
      </div>
      <img class="img_galerie" src="@/assets/Image/image00004.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00005.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00006.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00007.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00008.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00009.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image000010.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image000011.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image000012.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image000013.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image000014.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image000015.jpeg" alt="">
      <div v-if="store.ArthurSlice === 9">
        <img class="img_galerie" src="https://maxsteel.karibsen.fr/image/c51c6c33b32dc71c167233a922e3b498.jpg" alt="">
        <img class="img_galerie" src="/Thomasetsespotes.jpg" alt="">
        <img class="img_galerie" src="/thomaszizi.jpg" alt="">
      </div>
    </div>
    <div id="galerie_info">
      <p>521 photos, 120 videos</p>
    </div>
  </div>
</template>
<style>
#galerie_body{
  width: 380px;
}
.img_galerie{
  width: 120px;
  height: 120px;
  margin: 2px;
}
#galerie{
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}
#galerie_info{
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-family: Poppins, sans-serif;

  justify-content: center;
}
</style>