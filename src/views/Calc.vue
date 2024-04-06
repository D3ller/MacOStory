<template>
    <div class="bg-black font-SFDisplay">
      <div class="flex justify-center items-end h-[90vh]">
        <div class="grid grid-cols-4 gap-3 mb-5">
          <h1 class="text-white col-span-4 text-9xl font-light justify-self-end">{{ display }}</h1>
          <Buttons v-for="button in buttons" :key="button.content" :color="button.color" :content="button.content" @click="handleButtonClick(button.content)" />
        </div>
      </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import Buttons from "@/components/Calc/Buttons.vue";

const display = ref('0'); // Affichage actuel
const currentOperation = ref(null); // Opération en cours
const previousValue = ref(''); // Valeur précédente pour les calculs

const buttons = [
  { color: 'grey', content: 'AC' },
  { color: 'grey', content: '+/-' },
  { color: 'grey', content: '%' },
  { color: 'orange', content: '/' },
  { color: 'grey', content: '7' },
  { color: 'grey', content: '8' },
  { color: 'grey', content: '9' },
  { color: 'orange', content: 'x' },
  { color: 'grey', content: '4' },
  { color: 'grey', content: '5' },
  { color: 'grey', content: '6' },
  { color: 'orange', content: '-' },
  { color: 'grey', content: '1' },
  { color: 'grey', content: '2' },
  { color: 'grey', content: '3' },
  { color: 'orange', content: '+' },
  { color: 'grey', content: '0', span: 'col-span-2' }, // Cette propriété `span` est pour l'exemple; sa gestion dépend de l'implémentation dans votre composant.
  { color: 'grey', content: ',' },
  { color: 'orange', content: '=' }
];


function handleButtonClick(content) {
  switch (content) {
    case 'AC':
      display.value = '0';
      currentOperation.value = null;
      previousValue.value = '';
      break;
    case '+/-':
      if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
      } else if (display.value !== '0') {
        display.value = '-' + display.value;
      }
      break;
    case '%':
      display.value = String(parseFloat(display.value) / 100);
      currentOperation.value = null;
      previousValue.value = '';
      break;
    case '+':
    case '-':
    case 'x':
    case '/':
      currentOperation.value = content;
      previousValue.value = display.value;
      display.value = '';
      break;
    case '=':
      calculate();
      break;
    case ',':
      if (!display.value.includes('.')) {
        display.value += '.';
      }
      break;
    default:
      if (display.value === '0') {
        display.value = content;
      } else {
        display.value += content;
      }
      break;
  }
}

function calculate() {
  let result = 0;
  const previousNum = parseFloat(previousValue.value);
  const currentNum = parseFloat(display.value);

  switch (currentOperation.value) {
    case '+':
      result = previousNum + currentNum;
      break;
    case '-':
      result = previousNum - currentNum;
      break;
    case 'x':
      result = previousNum * currentNum;
      break;
    case '/':
      if (currentNum === 0) {
        display.value = 'Erreur';
        return;
      }
      result = previousNum / currentNum;
      break;
    default:
      return;
  }

  display.value = result.toString();
  currentOperation.value = null;
  previousValue.value = '';
}
</script>
