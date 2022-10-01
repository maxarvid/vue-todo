<script setup lang="ts">
import { useTodoStore } from "../stores/todo";
import { TrashIcon } from "@heroicons/vue/20/solid";
const { todo } = defineProps(["todo"]);

const store = useTodoStore();
const { deleteTodo } = store;
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-3/4">{{ todo.text }}</div>
    <TrashIcon
      @click="deleteTodo(todo.id)"
      data-cy="todo-delete-btn"
      class="basis-1/4 cursor-pointer h-6 w-6 text-red-500"
    />
  </div>
</template>

<style scoped></style>
