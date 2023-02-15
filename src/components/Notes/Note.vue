<script setup lang="ts">
import { useStoreNotes } from "@/stores/globalStore";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const storeNotes = useStoreNotes();

const characterLenght = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? "Characters" : "Character";

  return `${length} ${description}`;
});
</script>

<template>
  <div class="card mb-5">
    <div class="card-content">
      {{ note.content }}
    </div>
    <div class="has-text-right has-text-grey-light mt-2 mr-4">
      <small>{{ characterLenght }}</small>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`edit/${note.id}`" href="#" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="storeNotes.deleteNote(note.id)"
        >Delete</a
      >
    </footer>
  </div>
</template>
