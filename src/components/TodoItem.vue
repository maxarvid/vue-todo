<script setup lang="ts">
import { useTodoStore } from "../stores/todo";
const { todo } = defineProps(["todo"]);

const store = useTodoStore();
const { deleteTodo } = store;
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-3/4">{{ todo.text }}</div>
    <div @click="deleteTodo(todo.id)" data-cy="todo-delete-btn" class="basis-1/4 cursor-pointer">Delete</div>
  </div>
</template>

<style scoped></style>
