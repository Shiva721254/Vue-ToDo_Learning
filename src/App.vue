<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

function addTask() {
  const taskTitle = newTask.value.trim()

  if (taskTitle !== '') {
    tasks.value.push({
      id: Date.now(),
      title: taskTitle,
      completed: false
    })

    newTask.value = ''
  }
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}
</script>

<template>
  <h1>Todo app</h1>

  <input
    v-model="newTask"
    placeholder="Add a new task"
    @keyup.enter="addTask"
  >

  <button @click="addTask">
    Add task
  </button>

  <ul class="task-list">
    <li
      v-for="task in tasks"
      :key="task.id"
    >
      <input
        type="checkbox"
        v-model="task.completed"
      >

      <span :class="{ completed: task.completed }">
        {{ task.title }}
      </span>

      <button @click="deleteTask(task.id)">
        Delete
      </button>
    </li>
  </ul>

  <p>
    You typed: {{ newTask }}
  </p>
</template>

<style>
.task-list {
  list-style: none;
  padding-left: 0;
}

.completed {
  text-decoration: line-through;
}
</style>