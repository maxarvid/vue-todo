<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
import { InboxArrowDownIcon } from "@heroicons/vue/20/solid";
const todo = ref("");

const store = useTodoStore();
const { addTodo } = store;

const handleSaveTodo = () => {
  addTodo({ text: todo.value, completed: false });
  todo.value = "";
};
</script>

<template>
  <div
    class="flex flex-row p-6 my-2 max-w-sm mx-auto border-2 border-green-600 rounded-xl"
  >
    <input
      v-model="todo"
      data-cy="todo-input"
      type="text"
      placeholder="add a todo"
      class="basis-3/4 border-2 rounded border-none"
    />
    <InboxArrowDownIcon
      data-cy="save-todo-btn"
      @click="handleSaveTodo"
      class="basis-1/4 rounded-full cursor-pointer h-6 w-6 text-green-600"
    />
  </div>
</template>

<style scoped></style>
