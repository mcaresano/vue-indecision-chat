

<template>
  <section>
    <h1 class="text-exl font-bold underline">chatt</h1>  
    <MyCounter :value ="5"/>
    <MyCounter :value ="6"/>
    <MyCounter :value ="7"/>
  </section>
</template>

<script setup lang="ts">
  import MyCounter from "./components/my-counter/MyCounter.vue";
</script>

<style scoped>
  header {
    line-height: 1.5;
  }
</style>
