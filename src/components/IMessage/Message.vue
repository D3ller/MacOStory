<script setup>
const props = defineProps(['direction', 'content', 'img'])
</script>

<template>
  <div class="w-full flex justify-start mt-3" v-if="direction === 'left'">
    <div class="message ml-1">
      <div class="bg-[#E9E9EB] ml-1 rounded-xl p-2">
        <p v-if="content">{{content}}</p>
        <img v-if="img" :src="img" alt="img" class="w-40 h-40 object-cover rounded-xl" />
      </div>
      <div class="absolute bottom-0 -z-10">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 10.5C4.49857 13.5086 1.66667 16.3333 0 17C6.4 17 10.5 14.8333 11.5 13.5L16.5 15L16 0H5.5V2V4V4.5C5.5 5.5 5.5 7.5 5 10.5Z" fill="#E9E9EB"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="w-full flex justify-end mt-3" v-if="direction === 'right'">
    <div class="message mr-1">
      <div class="bg-[#0078FF] mr-1 rounded-xl p-2">
        <p>{{content}}</p>
        <img v-if="img" :src="img" alt="img" class="w-40 h-40 object-cover rounded-xl" />
      </div>
      <div class="absolute bottom-0 right-0 -z-10">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 10.5C12.0014 13.5086 14.8333 16.3333 16.5 17C10.1 17 6 14.8333 5 13.5L0 15L0.5 0H11V2V4V4.5C11 5.5 11 7.5 11.5 10.5Z" fill="#0078FF"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.message {
  @apply relative w-1/2 max-w-max;
  word-wrap: break-word;
}
</style>