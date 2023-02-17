<script setup lang="ts">
import Note from "@/components/Notes/Note.vue";

import { useStoreNotes } from "@/stores/globalStore";

import AddNote from "@/components/Notes/AddNote.vue";

const storeNotes = useStoreNotes();
</script>

<template>
  <main>
    <div class="notes">
      <AddNote />
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </div>
  </main>
</template>
