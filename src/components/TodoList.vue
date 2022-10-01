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
  <div
    v-if="todos.length !== 0"
    data-cy="todo-list"
    class="p-6 max-w-sm mx-auto border border-green-600 rounded-xl"
  >
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<style scoped></style>
