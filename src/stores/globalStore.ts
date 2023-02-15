import { randomId } from "@/components/utils/randomId";
import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "123123",
          content: "asd",
        },
      ],
    };
  },
  actions: {
    addNewNote(value: string) {
      const note = {
        id: randomId(),
        content: value,
      };
      this.notes.unshift(note);
    },
    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      });
    },
    editNote(id: string, content: string) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id: string) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
