
<script setup>
defineProps({ 
    task: {
        type: Object,
    required: true }
})

const emit = defineEmits(['delete-task'])
</script>

<template>
    <li>
        <input type="checkbox" v-model="task.completed" />
            <span :class="{completed: task.completed}">
            {{ task.title }}
            </span>

        <button @click="emit('delete-task', task.id)">
            Delete
        </button>
    </li>
</template>

<style>
.completed {
    text-decoration: line-through;
}
</style>