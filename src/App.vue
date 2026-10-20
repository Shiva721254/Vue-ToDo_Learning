<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
  <h1>Todo app</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/tasks">Tasks</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

<RouterView />
</template>

