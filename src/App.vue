<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>

  <div class="flex w-full justify-center">
  <div class="ubuntu min-w-[380px]">
  <RouterView />
  </div>
  </div>

  <Navbar></Navbar>
</template>

<style lang="postcss" scoped>

.ubuntu {
  @apply min-h-screen px-2 py-4 overflow-x-hidden;
  background: url("../public/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x2160-1455.jpg");
  background-size: cover;
}
</style>
