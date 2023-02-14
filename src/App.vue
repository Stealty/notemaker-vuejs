<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Notes</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
