<script setup lang="ts">
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <header>
    <p data-cy="app-title">Todo Vue App</p>
  </header>

  <main class="container mx-auto sm">
    <TodoList />
    <TodoInput />
  </main>
</template>

<style scoped>
</style>
