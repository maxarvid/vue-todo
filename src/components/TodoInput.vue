<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
const todo = ref("");

const store = useTodoStore();
const { saveTodo } = store;
</script>

<template>
  <input
    v-model="todo"
    data-cy="todo-input"
    type="text"
    placeholder="add a todo"
    class="border-2 rounded"
  />
  <div
    @click="saveTodo(todo)"
    data-cy="save-todo-btn"
    class="rounded-full cursor-pointer"
  >
    Save
  </div>
</template>

<style scoped></style>
