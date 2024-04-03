<script setup>
const props = defineProps(["window_name"])

</script>

<template>
    <div class="absolute flex w-[568px] h-[285px] bg-[#F6F6F6] rounded-[11px] flex-col">
        <div class="flex w-[568px] h-[28px] bg-white rounded-t-[11px]">
            <div class="flex items-center">
                <div class="bg-red-600 top_button"></div>
                <div class="bg-orange-400 top_button"></div>
                <div class="bg-green-600 top_button"></div>
            </div>
            <div class="flex w-screen justify-center">
              <p>{{props.window_name}}</p>
            </div>
        </div>
      <slot></slot>
    </div>
</template>

<style scoped lang="postcss">
    .top_button {
       @apply w-[10px] h-[10px] rounded-[11px] ml-2
    }
</style>