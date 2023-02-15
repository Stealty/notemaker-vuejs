<script setup lang="ts">
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

const notes = ref([
  {
    id: "",
    content: "",
  },
]);

const noteInputValue = ref("");

const noteInputRef = ref<any>();

function randomId() {
  let currentDate = new Date().getTime();
  let id = currentDate.toString();
  return id;
}

function addNewNote(value: any) {
  const note = {
    id: randomId(),
    content: value,
  };
  notes.value.unshift(note);

  noteInputValue.value = "";
  noteInputRef.value.focus();
}

function deleteNote(id: any) {
  notes.value = notes.value.filter((note) => {
    return note.id !== id;
  });
}
</script>

<template>
  <main>
    <div class="notes">
      <div class="card has-background-success-dark p-4 mb-5">
        <div class="field">
          <div class="control">
            <textarea
              ref="noteInputRef"
              v-model="noteInputValue"
              class="textarea"
              placeholder="Add a new note"
            />
          </div>
        </div>

        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button
              :disabled="!noteInputValue.trim()"
              @click="addNewNote(noteInputValue)"
              class="button is-link has-background-success"
            >
              Add New Note
            </button>
          </div>
        </div>

        <Note
          v-for="note in notes"
          key="note.id"
          :note="note"
          @delete-note="deleteNote"
        />
      </div>
    </div>
  </main>
</template>
