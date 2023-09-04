<template>
  <div>
    <ProfileHeaderAvatar />
    <hr />
    <div class="flex items-center justify-center gap-6 py-2">
      <NuxtLink class="cursor-pointer" :to="`${route.path + '/' + store.count}`">Count ==> {{ store.count }}</NuxtLink>
      <button
        @click="store.increment"
        class="rounded-lg bg-green-500 hover:scale-[1.04] transition duration-300 p-2"
      >
        Increment
      </button>
      <button
        @click="store.decrease"
        class="rounded-lg bg-blue-500 hover:scale-[1.04] transition duration-300 p-2"
      >
        decrease
      </button>
      <button
        @click="store.restart"
        class="rounded-lg bg-blue-500 hover:scale-[1.04] transition duration-300 p-2"
      >
        restart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter';
const route = useRoute();

const store = useCounterStore();
console.log(store);
</script>

<style lang="scss" scoped></style>
