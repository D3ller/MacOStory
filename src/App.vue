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

</template>

<style lang="postcss" scoped>

.ubuntu {
  @apply min-h-screen px-2 py-4 overflow-x-hidden;
}
</style>
