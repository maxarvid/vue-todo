<script setup lang="ts">
import { useTodoStore } from "../stores/todo";
const { todo } = defineProps(["todo"]);

const store = useTodoStore();
const { deleteTodo } = store;
</script>

<template>
  <li>
    <p>{{ todo.text }}</p>
    <button @click="deleteTodo(todo.id)" data-cy="todo-delete-btn">Delete Todo</button>
  </li>
</template>

<style scoped></style>
