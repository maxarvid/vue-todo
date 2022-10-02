import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";
import { uid } from "uid";

type Todo = {
  text: string
  id?: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos: Ref<Todo[]> = ref([])
  const fetchTodos = () => {
    todos.value = (JSON.parse(localStorage.getItem('toDos') || '[]'))
  }
  const addTodo = (todo: Todo) => {
    if (todo.text === '') return
    todo.id = uid()
    todos.value.push(todo)
    saveTodos()
  }
  const completeTodo = (id: string) => {
    todos.value = todos.value.map(todo => {
      return todo.id === id ? { ...todo, completed: true } : todo
    })
    saveTodos()
  }
  const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((todo: Todo) => todo.id !== id)
    saveTodos()
  }
  const saveTodos = () => {
    localStorage.setItem('toDos', JSON.stringify(todos.value))
  }

  return { todos, fetchTodos, addTodo, deleteTodo, completeTodo }
})