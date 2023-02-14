<script setup lang="ts"></script>

<template>
  <main>
    <div class="notes">
      <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
          <div class="control">
            <textarea class="textarea" placeholder="Add a new note" />
          </div>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button class="button is-link has-background-success">
              Add New Note
            </button>
          </div>
        </div>
      </div>
      <div v-for="i in 3" class="card">
        <header class="card-header">
          <button class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </header>
        <div class="card-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          perspiciatis, magni doloribus a, repellendus neque illum reiciendis
          quia atque quidem, placeat eveniet esse repudiandae eaque fugit cumque
          quae hic dolores!
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>
  </main>
</template>
