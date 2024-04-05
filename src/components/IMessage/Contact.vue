<script setup>
const props = defineProps(['nom'])
</script>

<template>
  <router-link :to="'/imessage/'+nom" class="font-Poppins">
    <div class="flex m-2 border-b border-solid border-0 border-slate-300">
      <div class="flex justify-center items-center w-1/6">
        <div class="w-12 h-12 rounded-full bg-sky-200"></div>
      </div>
      <div class="flex-col ml-2">
        <div class="flex justify-between mr-2">
          <p class=""><b>{{nom}}</b></p>
          <p>11:44 AM</p>
        </div>
        <p class="">Lorem ipsum dolor sit amet, consectetur </p>
      </div>
      <div class="">
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.74512 12.3252C2.01172 12.3252 2.22363 12.2295 2.4082 12.0518L7.65137 6.93164C7.88379 6.69922 7.99316 6.45996 8 6.16602C8 5.87207 7.89062 5.62598 7.65137 5.40039L2.4082 0.273438C2.22363 0.0957031 2.00488 0 1.74512 0C1.21191 0 0.788086 0.423828 0.788086 0.950195C0.788086 1.20996 0.897461 1.45605 1.08887 1.64746L5.7373 6.16602L1.08887 10.6777C0.897461 10.8691 0.788086 11.1152 0.788086 11.375C0.788086 11.9014 1.21191 12.3252 1.74512 12.3252Z" fill="#3C3C43" fill-opacity="0.3"/>
        </svg>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>