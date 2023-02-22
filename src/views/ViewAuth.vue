<script setup lang="ts">
import { useStoreAuth } from "@/stores/storeAuth";
import { computed, reactive, ref } from "vue";

const storeAuth = useStoreAuth();

const register = ref(false);

const formTitle = computed(() => {
  return register.value ? "Register" : "Login";
});

const credentials = reactive({
  email: "",
  password: "",
});

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert("Please insert an email and password gosh darnit!");
  } else {
    if (register.value) {
      storeAuth.registerUser(credentials);
    } else {
      storeAuth.loginUser(credentials);
    }
  }
};
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li :class="{ 'is-active': !register }">
        <a @click.prevent="register = false">Login</a>
      </li>
      <li :class="{ 'is-active': register }">
        <a @click.prevent="register = true">Register</a>
      </li>
    </ul>
  </div>
  <div class="card auth-card">
    <div class="card-content">
      <div class="title has-text-centered">{{ formTitle }}</div>
      <div class="content">
        <form @submit.prevent="onSubmit" action="">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="text"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                type="password"
                placeholder="Enter a password"
              />
            </div>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">{{ formTitle }}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scopet>
.auth-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
