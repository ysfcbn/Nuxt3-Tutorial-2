<template>
  <div>
    <Alert :title="'events id'" :id="+route.params.id"/>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
console.log(route);
</script>

<style lang="scss" scoped></style>
