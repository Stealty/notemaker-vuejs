<script setup lang="ts">
import EditNote from "@/components/Notes/EditNote.vue";
</script>

<template>
  <div class="edit-note"></div>
  <h1>Edit note with an id of : {{ $route.params.id }}</h1>
  <EditNote />
</template>
