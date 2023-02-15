<script setup lang="ts">
import { ref } from "vue";

const isActiveMenu = ref(false);

function toggleActiveMenu() {
  console.log(isActiveMenu.value);
  isActiveMenu.value = !isActiveMenu.value;
}
</script>

<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Notemaker</div>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="isActiveMenu = !isActiveMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActiveMenu }"
    >
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <RouterLink
          @click="isActiveMenu = false"
          class="navbar-item"
          active-class="is-active"
          to="/"
          >Notes</RouterLink
        >
        <RouterLink
          @click="isActiveMenu = false"
          class="navbar-item"
          active-class="is-active"
          to="/stats"
          >Stats</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media screen and (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
