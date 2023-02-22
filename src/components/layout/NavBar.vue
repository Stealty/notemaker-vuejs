<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreAuth } from "@/stores/storeAuth";
const isActiveMenu = ref(false);
const navBarRef = ref(null);

const storeAuth = useStoreAuth();

onClickOutside(navBarRef, () => (isActiveMenu.value = false));

const logout = () => {
  isActiveMenu.value = false;
  storeAuth.logoutUser();
};
</script>

<template>
  <nav
    ref="navBarRef"
    class="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Notemaker</div>
        <button
          class="navbar-burger"
          :class="{ 'is-active': isActiveMenu }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="isActiveMenu = !isActiveMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActiveMenu }"
    >
      <div class="navbar-end">
        <button
          v-if="storeAuth.user.id"
          @click="logout"
          class="button is-small is-info m-3"
        >
          Log out {{ storeAuth.user.email }}
        </button>
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
