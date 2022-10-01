import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import { uid } from "uid";

type Todo = {
  text: string
  id?: string
}

export const useTodoStore = defineStore('todo', () => {
  const todos: Ref<Todo[]> = ref([])
  const fetchTodos = () => {
    todos.value = (JSON.parse(localStorage.getItem('toDos') || '[]'))
  }
  const saveTodo = (todo: Todo) => {
    todo.id = uid()
    todos.value.push(todo)
    localStorage.setItem('toDos', JSON.stringify(todos.value))
  }
  const deleteTodo = (todo: string) => {
    debugger
  }

  return { todos, fetchTodos, saveTodo, deleteTodo }
})