<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
const todo = ref("");

const store = useTodoStore();
const { saveTodo } = store;
</script>

<template>
  <div class="flex flex-row p-6 my-2 max-w-sm mx-auto border border-green-600 rounded-xl">
    <input
      v-model="todo"
      data-cy="todo-input"
      type="text"
      placeholder="add a todo"
      class="border-2 rounded"
    />
    <div
      @click="saveTodo({ text: todo })"
      data-cy="save-todo-btn"
      class="rounded-full cursor-pointer"
    >
      Save
    </div>
  </div>
</template>

<style scoped></style>
