<script setup lang="ts">
import { useTodoStore } from "../stores/todo";
import { CheckIcon, TrashIcon } from "@heroicons/vue/20/solid";
const { todo } = defineProps(["todo"]);

const store = useTodoStore();
const { completeTodo, deleteTodo } = store;
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-3/4">{{ todo.text }}</div>
    <div data-cy="todo-icons" class="flex flex-row basis-1/4">
      <CheckIcon
        @click="completeTodo(todo.id)"
        class="h-6 w-6 text-green-500"
      />
      <TrashIcon
        @click="deleteTodo(todo.id)"
        class="cursor-pointer h-6 w-6 text-red-500"
      />
    </div>
  </div>
</template>

<style scoped></style>
