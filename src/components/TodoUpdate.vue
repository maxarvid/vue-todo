<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../stores/todo";
import { InboxArrowDownIcon } from "@heroicons/vue/20/solid";
const { todo } = defineProps(["todo"]);
const todoInput = ref("");
const emit = defineEmits(["submit"]);

const store = useTodoStore();
const { updateTodo } = store;

todo && (todoInput.value = todo.text);

const handleEditTodo = () => {
  updateTodo({ text: todoInput.value, completed: false, id: todo.id });
  emit("submit");
};
</script>

<template>
  <div
    class="flex flex-row p-6 my-2 max-w-sm mx-auto border-2 border-green-600 rounded-xl"
  >
    <input
      v-model="todoInput"
      data-cy="todo-input"
      type="text"
      placeholder="add a todo"
      class="basis-3/4 border-2 rounded border-none"
    />
    <InboxArrowDownIcon
      data-cy="save-todo-btn"
      @click="handleEditTodo"
      class="basis-1/4 rounded-full cursor-pointer h-6 w-6 text-green-600"
    />
  </div>
</template>

<style scoped></style>
