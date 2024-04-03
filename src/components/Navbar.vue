<script setup>
import {ref} from "vue";
import { Icon } from '@iconify/vue'
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from 'radix-vue'

const currentMenu = ref('')
const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const person = ref('pedro')
function handleClick() {
  alert('hello!')
}

var icons = ref([
  {id: 1, name: 'App 1', src: '/app/message.png'},
  {id: 2, name: 'App 2', src: '/app/photo.png'},
  {id: 3, name: 'Maps', src: '/app/geolocalisation.png'},
  {id: 4, name: 'App 4', src: '/app/music-2021-05-25.png'},
])

</script>

<template>
  <div class="absolute w-full top-0">
    <MenubarRoot v-model="currentMenu" class="flex justify-between p-[3px] backdrop-blur-[150px] items-center py-1">
      <div class="flex">
      <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:hard-light" opacity="0.76" filter="url(#filter0_d_36_1246)">
          <path d="M22.861 6.55483C23.3623 5.95654 23.71 5.13997 23.71 4.31531C23.71 4.20212 23.7019 4.08893 23.6776 4C22.8772 4.03234 21.907 4.5336 21.3249 5.21273C20.8722 5.73017 20.4517 6.55483 20.4517 7.37948C20.4517 7.50884 20.4679 7.63012 20.4841 7.67054C20.5326 7.67863 20.6134 7.6948 20.6943 7.6948C21.4219 7.6948 22.3274 7.2097 22.861 6.55483ZM23.4351 7.86458C22.2223 7.86458 21.2441 8.6003 20.6134 8.6003C19.9424 8.6003 19.0692 7.91309 18.0182 7.91309C16.0212 7.91309 14 9.56241 14 12.667C14 14.6074 14.7438 16.6529 15.6736 17.9707C16.4659 19.0864 17.1612 20 18.1556 20C19.1501 20 19.5867 19.3451 20.8075 19.3451C22.0606 19.3451 22.3355 19.9838 23.4351 19.9838C24.5184 19.9838 25.238 18.9894 25.9171 18.0111C26.6852 16.8873 27.0005 15.7959 27.0167 15.7393C26.952 15.7231 24.8742 14.8742 24.8742 12.5053C24.8742 10.4517 26.5073 9.53007 26.5963 9.4573C25.5291 7.91309 23.8878 7.86458 23.4351 7.86458Z" fill="black"/>
        </g>
        <defs>
          <filter id="filter0_d_36_1246" x="10" y="2" width="21.0167" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_36_1246"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_36_1246" result="shape"/>
          </filter>
        </defs>
      </svg>
      <MenubarMenu value="file">
        <MenubarTrigger
            class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
        >
          File
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
              class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              :side-offset="5"
              :align-offset="-3"
          >
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              New Tab
              <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘ T
              </div>
            </MenubarItem>
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              New Window
              <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘ N
              </div>
            </MenubarItem>
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                disabled
            >
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarSub>
              <MenubarSubTrigger
                  class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
              >
                Share
                <div
                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                >
                  <Icon icon="radix-icons:chevron-right" />
                </div>
              </MenubarSubTrigger>
              <MenubarPortal>
                <MenubarSubContent
                    class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                    :align-offset="-5"
                >
                  <MenubarItem
                      class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  >
                    Email Link
                  </MenubarItem>
                  <MenubarItem
                      class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  >
                    Messages
                  </MenubarItem>
                  <MenubarItem
                      class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  >
                    Notes
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarPortal>
            </MenubarSub>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Print…
              <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘ P
              </div>
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu value="Edit">
        <MenubarTrigger
            class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
        >
          Edit
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
              class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              :side-offset="5"
              :align-offset="-3"
          >
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Undo
              <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘ Z
              </div>
            </MenubarItem>
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Redo
              <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⇧ ⌘ Z
              </div>
            </MenubarItem>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarSub>
              <MenubarSubTrigger
                  class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
              >
                Find
                <div
                    class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
                >
                  <Icon icon="radix-icons:chevron-right" />
                </div>
              </MenubarSubTrigger>

              <MenubarPortal>
                <MenubarSubContent
                    class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                    :align-offset="-5"
                >
                  <MenubarItem
                      class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  >
                    Search the web…
                  </MenubarItem>
                  <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
                  <MenubarItem
                      class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  >
                    Find…
                  </MenubarItem>
                  <MenubarItem
                      class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  >
                    Find Next
                  </MenubarItem>
                  <MenubarItem
                      class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                  >
                    Find Previous
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarPortal>
            </MenubarSub>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Cut
            </MenubarItem>
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Copy
            </MenubarItem>
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Paste
            </MenubarItem>
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Select All
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu value="View">
        <MenubarTrigger
            class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
        >
          View
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
              class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              :side-offset="5"
              :align-offset="-14"
          >
            <MenubarCheckboxItem
                v-model="checkboxOne"
                class="group text-[13px] leading-none text-black rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
            >
              <MenubarItemIndicator class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Show Bookmarks
              <div
                  class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"
              >
                ⌘+B
              </div>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
                v-model="checkboxTwo"
                class="text-[13px] leading-none text-black rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
            >
              <MenubarItemIndicator class="absolute left-0 w-[20px] inline-flex items-center justify-center">
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Reload
              <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘ R
              </div>
            </MenubarItem>
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                disabled
            >
              Force Reload
              <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⇧ ⌘ R
              </div>
            </MenubarItem>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Toggle Fullscreen
            </MenubarItem>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Hide Sidebar
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu value="Windows">
        <MenubarTrigger
            class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
        >
          Windows
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
              class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              :side-offset="5"
              :align-offset="-14"
          >
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
                @click="handleClick"
            >
              Edit…
            </MenubarItem>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Add Profile…
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu value="Go">
        <MenubarTrigger
            class="py-2 px-3 outline-none select-none font-semibold leading-none rounded text-black text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4"
        >
          Go
        </MenubarTrigger>
        <MenubarPortal>
          <MenubarContent
              class="min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
              align="start"
              :side-offset="5"
              :align-offset="-14"
          >
            <MenubarItem
                class="group text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Send Finder Feedback
            </MenubarItem>
            <MenubarSeparator class="h-[1px] bg-green6 m-[5px]" />
            <MenubarItem
                class="text-[13px] leading-none text-black rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-black data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
            >
              Mac OS Help
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
      </div>
      <div>
        {{Date.now().toString()}}</div>

    </MenubarRoot>
  </div>



  <div class="absolute bottom-5 left-0 right-0 m-auto flex justify-center items-center w-full">
<nav class="relative dock h-[70px] w-[250px] bg-white">
  <div v-for="icon in icons" :key="icon.id" class="app">
    <img class="w-[57px] h-[57px]" :src="icon.src" :alt="icon.name">
  </div>
</nav>
  </div>
</template>

<style scoped lang="postcss">
.dock {
  background-color: #ffffff66;
  padding: .3rem;
  border-radius: 1.2rem;
  width: fit-content;
  display: flex;
  align-items: flex-end;
  transition: transform .3s ease;
}

.app {
  margin: 0 .3rem;
  cursor: pointer;
  transition: transform .3s ease;
}

.dock .app:hover {
  transform: scale(2);
}
</style>