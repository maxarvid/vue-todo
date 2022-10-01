<script setup lang="ts">
const { text } = defineProps(["text"]);
</script>

<template>
  <li>
    <p>{{ text }}</p>
    <button data-cy="todo-delete-btn">Click me</button>
  </li>
</template>

<style scoped></style>
