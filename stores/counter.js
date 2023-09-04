import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0); // state
  function increment() {
    count.value++;
  }
  function decrease() {
    count.value--;
  }
  function restart() {
    count.value = 0;
  }
  return { count, increment, decrease, restart };
});
