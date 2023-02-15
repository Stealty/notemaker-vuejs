<script setup lang="ts">
import { computed } from "vue";

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

const emit = defineEmits(["deleteNote"]);

const handleDelete = () => {
  emit("deleteNote", props.note.id);
  // console.log(props.note.id);
};
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
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDelete"
        >Delete</a
      >
    </footer>
  </div>
</template>
