<script setup lang="ts">
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoHeader from "./components/TodoHeader.vue";
</script>

<template>
  <header>
    <TodoHeader />
  </header>

  <main>
    <TodoList />
    <TodoInput />
  </main>
</template>

<style scoped></style>
