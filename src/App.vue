<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="ubuntu">
  <RouterView />
  </div>

  <Navbar></Navbar>
</template>

<style lang="postcss" scoped>

.ubuntu {
  @apply min-h-screen px-2 py-4;
  background: url("../public/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-3840x2160-1455.jpg");
  background-size: cover;
}
</style>
