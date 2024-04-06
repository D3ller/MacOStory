<template>
  <button class="btn"
      :style="{backgroundColor: colors}"
  >
    {{ content }}
  </button>
</template>

<style scoped lang="postcss">
.btn {
  @apply w-[70px] h-[70px] rounded-full flex justify-center items-center font-Poppins text-4xl text-white border-0
}

a {
  color: white;
  text-decoration: none;
}
</style>

<script setup>
import {ref} from "vue";

const props = defineProps(['color', 'content'])
const colors = ref()

if (props.color === 'orange') {
  colors.value = "#ff9f0a"
}

if (props.color === 'grey') {
  colors.value = "#333333"
}

if (props.color === 'ligth_grey') {
  colors.value = "#a5a5a5"
}
</script>