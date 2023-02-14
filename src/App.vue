<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/layout/NavBar.vue";
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
