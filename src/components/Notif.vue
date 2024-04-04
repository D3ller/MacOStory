<template>
  <div class="flex justify-center w-full mt-3 absolute z-10 font-Poppins notif">
    <div class="flex w-4/5 h-20 bg-blur rounded-2xl shadow-2xl">
      <div class="m-2 flex items-center">
        <img src="/app/message.png" class="w-16">
        <div class="h-full m-1">
          <h5>{{nom}}</h5>
          <div class="overflow-hidden h-10">
            <p class="text-sm">{{content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-blur {
  -webkit-backdrop-filter: blur(15px); /* assure la compatibilité avec safari */
  backdrop-filter: blur(15px);
  background-color: rgba(190, 190, 190, 0.2);
}

.notif {
  overflow-y: hidden;
  transform: translateY(-200px);
  transition: 1s;
}

.active {
  transform: translateY(0);
}

</style>

<script setup>
const props = defineProps(["nom", 'content'])

</script>