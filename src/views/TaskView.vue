<script setup>
import { ref } from 'vue';
import TodoInput from '../components/TodoInput.vue';
import TodoItem from '../components/TodoItem.vue';

const tasks = ref([])

function addTask(taskText){
    const taskTitle = taskText.trim()

    if (taskTitle !=='') {
        tasks.value.push({
            id: Date.now(),
            title: taskTitle,
            completed: false
        })
    }
}

function deleteTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id)
}

</script>

<template>
    <h2>Tasks</h2>

    <TodoInput @add-task="addTask" />

    <ul class="task-list">
        <TodoItem 
        v-for="task in tasks"
        :key="task.id"
        :task ="task"
        @delete-task = "deleteTask"
        />
    </ul>
</template>

<style>
.task-list {
    list-style: none;
    padding-left: 0;
}
</style>