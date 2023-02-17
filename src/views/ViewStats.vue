<script setup lang="ts">
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
</script>

<template>
  <div class="stats">
    <table class="table">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Character (all notes)</td>
        </tr>
        <td>{{ storeNotes.totalCharactersCount }}</td>
      </tbody>
    </table>
  </div>
</template>
