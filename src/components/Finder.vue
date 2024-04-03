<script setup>
const props = defineProps(["window_name"])

const element = ref(null)

dragElement(element);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

</script>

<template>
    <div class="absolute flex w-[568px] h-[285px] bg-[#F6F6F6] rounded-[11px] flex-col" ref="element">
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