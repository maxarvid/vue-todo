<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/vue/20/solid";
import TodoUpdate from "./TodoUpdate.vue";
const { todo } = defineProps(["todo"]);
const editTodo = ref(false);

const store = useTodoStore();
const { completeTodo, deleteTodo } = store;

const handleUpdate = () => {
  editTodo.value = !editTodo.value;
};
</script>

<template>
  <div v-if="!editTodo" class="flex flex-row">
    <div
      data-cy="todo-text"
      class="basis-3/4"
      :class="{ 'line-through': todo.completed }"
    >
      {{ todo.text }}
    </div>
    <div data-cy="todo-icons" class="flex flex-row basis-1/4">
      <CheckIcon
        v-if="!todo.completed"
        @click="completeTodo(todo.id)"
        class="cursor-pointer h-6 w-6 text-green-500"
      />
      <PencilIcon
        @click="handleUpdate"
        class="cursor-pointer h-6 w-6 text-blue-500"
      />
      <TrashIcon
        @click="deleteTodo(todo.id)"
        class="cursor-pointer h-6 w-6 text-red-500"
      />
    </div>
  </div>
  <div v-else>
    <TodoUpdate :todo="todo" @submit="handleUpdate" />
  </div>
</template>

<style scoped></style>
