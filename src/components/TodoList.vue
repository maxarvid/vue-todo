<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

const store = useTodoStore();
const { fetchTodos } = store;
const { todos } = storeToRefs(store);
fetchTodos();
</script>

<template>
  <ul v-if="todos.length !== 0" data-cy="todo-list">
    <li v-for="(todo, index) in todos" :key="index">
      {{ todo }}
    </li>
  </ul>
</template>

<style scoped></style>
