<script setup lang="ts">
import router from "@/router";
import { useStoreNotes } from "@/stores/globalStore";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { vAutoFocus } from "@/directives/vAutoFocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const route = useRoute();
const storeNotes = useStoreNotes();
const noteInputRef = ref<any>();
const noteInputValue = ref(storeNotes.getNoteContent(route.params.id as any));

function editNote() {
  storeNotes.editNote(route.params.id as any, noteInputValue.value as any);
  noteInputRef.value.focus();
  router.back();
}

useWatchCharacters(noteInputValue, 100);
</script>

<template>
  <div class="card p-4 mb-5 has-background-link-dark">
    <label class="label has-text-white">Edit note</label>
    <div class="field">
      <div class="control">
        <textarea
          ref="noteInputRef"
          v-model="noteInputValue"
          class="textarea"
          placeholder="Add note update"
          v-autoFocus
          maxlength="100"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button @click="$router.back()" class="button is-link is-light mr-4">
          Cancel
        </button>
        <button
          :disabled="!noteInputValue.trim()"
          @click="editNote"
          class="button is-link has-background-link"
        >
          Save note
        </button>
      </div>
    </div>
  </div>
</template>
