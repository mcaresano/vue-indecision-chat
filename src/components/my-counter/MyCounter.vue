<template>
  <section>
    <hr>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ counter + squareCounter }}</h3>
    <button class="btn" @click="counter++">+1</button>
    <button class="btn" @click="counter--">-1</button>
  </section> 
</template>


<script lang="ts" setup>
  import { useCounter } from '../../composable/useCounter';
  const {counter, squareCounter} = useCounter()

</script>

<style scoped>
 .btn {
  @apply p-5 bg-blue-500 rounded hover:bg-slate-200 m-5
  }
</style>
