<script setup lang="ts">
import { computed, reactive } from "vue";
import { RouterLink } from "vue-router";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";
import { useDateFormat } from "@vueuse/shared";
import { useNow } from "@vueuse/core";

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

const formatedDate = useDateFormat(
  props.note.date.value,
  "DD MMMM YYYY / HH:mm"
);
</script>

<template>
  <div class="card mb-5">
    <div class="card-content p-4">
      <p style="word-wrap: break-word">{{ note.content }}</p>
    </div>
    <div
      class="has-text-right has-text-grey-light p-4 is-justify-content-space-between is-flex"
    >
      <small>{{ formatedDate }}</small>
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
