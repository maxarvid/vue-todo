import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

export const useTodoStore = defineStore('todo', () => {
  const todos: Ref<string[]> = ref([])
  const fetchTodos = () => {
    todos.value.push(JSON.parse(localStorage.getItem('toDos') || '[]'))
  }
  const saveTodo = (todo: string) => {
    debugger
    todos.value.push(todo)
    localStorage.setItem('toDos', JSON.stringify(todos.value))
  }

  return { todos, fetchTodos, saveTodo }
})