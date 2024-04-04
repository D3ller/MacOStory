<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Top from "@/components/Top.vue";
</script>

<template>

  <div class="flex w-full justify-center">
  <div class="ubuntu min-w-[380px]">
    <Top></Top>
  <RouterView />
  </div>
  </div>

</template>

<style lang="postcss" scoped>


</style>
