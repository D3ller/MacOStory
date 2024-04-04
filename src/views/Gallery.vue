<script setup></script>
<template>
  <div id="galerie_body" class="w-full h-full bg-[#f3f3f3] relative flex justify-center items-center flex-col">
    <div id="galerie">
      <img class="img_galerie" src="@/assets/Image/image00001.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00002.jpeg" alt="">
      <img class="img_galerie" src="@/assets/Image/image00003.jpeg" alt="">
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
      <img class="img_galerie" src="@/assets/Image/image000015.jpeg" alt="">.
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