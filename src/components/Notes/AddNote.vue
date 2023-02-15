<script setup lang="ts">
import { useStoreNotes } from "@/stores/globalStore";
import { ref } from "vue";

const noteInputRef = ref<any>();
const noteInputValue = ref("");
const storeNotes = useStoreNotes();
function addNote() {
  storeNotes.addNewNote(noteInputValue.value);
  noteInputValue.value = "";
  noteInputRef.value.focus();
}
</script>

<template>
  <div class="card p-4 mb-5 has-background-success-dark">
    <div class="field">
      <div class="control">
        <textarea
          ref="noteInputRef"
          v-model="noteInputValue"
          class="textarea"
          placeholder="Add new note"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          :disabled="!noteInputValue.trim()"
          @click="addNote"
          class="button is-link has-background-success"
        >
          Add new note
        </button>
      </div>
    </div>
  </div>
</template>
