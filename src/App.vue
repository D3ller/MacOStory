<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Top from "@/components/Top.vue";
import Notif from "@/components/Notif.vue"
</script>

<template>

  <div class="flex w-full justify-center">
  <div class="ubuntu min-w-[380px]">
    <Notif nom="test" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci assumenda commodi consectetur dignissimos enim eos impedit minima necessitatibus nemo nihil officia optio placeat, porro quaerat saepe sapiente, suscipit tempora?"></Notif>
    <Top></Top>
  <RouterView />
  </div>
  </div>

</template>

<style lang="postcss" scoped>
.ubuntu {
  height: 100vh;
}
</style>
