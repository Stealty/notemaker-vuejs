<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import NavBar from "./components/layout/NavBar.vue";
import { useStoreNotes } from "./stores/globalStore";

const storeNotes = useStoreNotes();

onMounted(() => {
  storeNotes.getNotes();
});
</script>

<template>
  <header class="is-max-desktop">
    <NavBar />
  </header>
  <div class="container is-max-desktop px-2 py-4"><RouterView /></div>
</template>

<style>
@import "bulma/css/bulma.min.css";
</style>
