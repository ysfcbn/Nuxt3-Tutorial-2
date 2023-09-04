<template>
  <div
    class="bg-red-500 text-white p-6 flex items-center justify-center text-xl mx-4 rounded-lg"
  >
    <IconsAlarm :color="'#93C4F9'" class="mx-2"/>
    {{ `${title} ==> ${id}` }}
  </div>
  <p>Count ==> {{ store.count }}</p>

</template>

<script setup>
import { useCounterStore } from "~/stores/counter";

const store = useCounterStore();
const props = defineProps({
  title: String,
  id: Number,
  color:String
});
</script>

<style lang="scss" scoped></style>
