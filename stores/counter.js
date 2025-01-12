// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      console.log('increment');
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
