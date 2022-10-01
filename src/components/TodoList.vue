<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import TodoItem from "./TodoItem.vue";

const store = useTodoStore();
const { fetchTodos } = store;
const { todos } = storeToRefs(store);
fetchTodos();
</script>

<template>
  <ul v-if="todos.length !== 0" data-cy="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<style scoped></style>
