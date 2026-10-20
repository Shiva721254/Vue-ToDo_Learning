
<script setup>
import { ref } from 'vue';

const newTask = ref('')
const emit = defineEmits(['add-task'])

function submitTask() {
    emit('add-task', newTask.value)
    newTask.value = ''
}
</script>




<template>
    <div>
        <input
        v-model="newTask"
        placeholder="Add a new task"
        @keyup.enter="submitTask"
        >
        <button @click="submitTask">
            Add task
        </button>
    </div>
</template>