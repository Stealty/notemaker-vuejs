<script setup lang="ts">
import { computed, reactive } from "vue";
import { RouterLink } from "vue-router";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLenght = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? "Characters" : "Character";

  return `${length} ${description}`;
});

const modals = reactive({
  deleteNote: false,
});
</script>

<template>
  <div class="card mb-5">
    <div class="card-content">
      <p style="word-wrap: break-word">{{ note.content }}</p>
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
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote
      :note="note.id"
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
    />
  </div>
</template>
