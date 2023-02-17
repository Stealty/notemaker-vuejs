<script setup lang="ts">
import Note from "@/components/Notes/Note.vue";
import { onMounted } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import AddNote from "@/components/Notes/AddNote.vue";

const storeNotes = useStoreNotes();

onMounted(() => {
  storeNotes.getNotes();
});
</script>

<template>
  <main>
    <div class="notes">
      <AddNote />
      <progress
        v-if="!storeNotes.notesLoaded"
        class="progress is-small is-success"
        max="100"
      />
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
      <div
        v-if="storeNotes.notesLoaded && !storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes here yet...
      </div>
    </div>
  </main>
</template>
