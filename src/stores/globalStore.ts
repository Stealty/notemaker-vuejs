import { randomId } from "@/utils/randomId";
import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  orderBy,
  query,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/database/firebase";
import { currentDate } from "@/utils/currentDate";

type NoteType = {
  id: string;
  content: string;
  date: string;
};

const notesColectionRef = collection(db, "notes");
export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [] as NoteType[],
      notesLoaded: false,
    };
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false;
      onSnapshot(
        query(notesColectionRef, orderBy("date", "desc")),
        (querySnapshot) => {
          let notes: NoteType[] = [];
          querySnapshot.forEach((doc): void | NoteType => {
            let note: NoteType = {
              id: doc.id,
              content: doc.data().content,
              date: doc.data().date,
            };
            notes.push(note);
          });

          this.notes = notes;
          this.notesLoaded = true;
        }
      );
    },

    async addNewNote(value: string) {
      let date = currentDate();
      await setDoc(doc(db, "notes", randomId()), {
        date: date,
        content: value,
      });
    },
    async deleteNote(id: string) {
      await deleteDoc(doc(notesColectionRef, id));
    },

    async editNote(id: string, content: string) {
      let date = currentDate();
      await updateDoc(doc(notesColectionRef, id), {
        date: date,
        content: content,
      });
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
