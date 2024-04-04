<template>
  <div class="bg-black ">
    <div class="flex justify-center items-end h-[90vh]">
      <div class="grid grid-cols-4 gap-3 mb-5">
        <h1 class="text-white col-span-4 font-Poppins text-9xl font-light justify-self-end">0</h1>
        <Buttons color="ligth_grey" content="AC" />
        <Buttons color="ligth_grey" content="+/-" />
        <Buttons color="ligth_grey" content="%" />
        <Buttons color="orange" content="/" />
        <Buttons color="grey" content="7" />
        <Buttons color="grey" content="8" />
        <Buttons color="grey" content="9" />
        <Buttons color="orange" content="x" />
        <Buttons color="grey" content="4" />
        <Buttons color="grey" content="5" />
        <Buttons color="grey" content="6" />
        <Buttons color="orange" content="-" />
        <Buttons color="grey" content="1" />
        <Buttons color="grey" content="2" />
        <Buttons color="grey" content="3" />
        <Buttons color="orange" content="+" />
        <Buttons color="grey" content="0" class="col-span-2" />
        <Buttons color="grey" content="," />
        <Buttons color="orange" content="=" />
      </div>
    </div>
  </div>
</template>
<script setup>
import Buttons from "@/components/Calc/Buttons.vue";
</script>