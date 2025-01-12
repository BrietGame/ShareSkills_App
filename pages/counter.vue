<!-- pages/index.vue -->
<template>
  <div>
    <h1>Counter: {{ counterStore.count }}</h1>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter';

// Initialise le store Pinia
const counterStore = useCounterStore();
</script>
