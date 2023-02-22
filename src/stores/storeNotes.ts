import { useStoreAuth } from "./storeAuth";
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
  Firestore,
  DocumentReference,
  Query,
  type DocumentData,
  type Unsubscribe,
} from "firebase/firestore";
import { db } from "@/database/firebase";
import { currentDate } from "@/utils/currentDate";

type NoteType = {
  id: string;
  content: string;
  date: string;
};

let notesColectionRef: Firestore | Query<DocumentData>;
let notesColetionQuery: Query<DocumentData> | DocumentReference<unknown> | any;
let getNotesSnapshot: Unsubscribe | null;

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [] as NoteType[],
      notesLoaded: false,
    };
  },
  actions: {
    async init() {
      const storeAuth = useStoreAuth();
      notesColectionRef = collection(
        db,
        "users",
        storeAuth.user.id as string,
        "notes"
      );
      notesColetionQuery = query(notesColectionRef, orderBy("date", "desc"));
      await this.getNotes();
    },
    async getNotes() {
      this.notesLoaded = false;
      if (getNotesSnapshot) getNotesSnapshot();

      getNotesSnapshot = onSnapshot(
        notesColetionQuery,
        (querySnapshot: any) => {
          let notes: NoteType[] = [];
          querySnapshot.forEach(
            (doc: {
              id: any;
              data: () => { (): any; new (): any; content: any; date: any };
            }): void | NoteType => {
              let note: NoteType = {
                id: doc.id,
                content: doc.data().content,
                date: doc.data().date,
              };
              notes.push(note);
            }
          );

          this.notes = notes;
          this.notesLoaded = true;
        }
      );
    },

    clearNotes() {
      this.notes = [];
    },

    async addNewNote(value: string) {
      let date = currentDate();
      await setDoc(doc(notesColectionRef as any), {
        date: date,
        content: value,
      });
    },

    async deleteNote(id: string) {
      await deleteDoc(doc(notesColectionRef as any, id));
    },

    async editNote(id: string, content: string) {
      let date = currentDate();
      await updateDoc(doc(notesColectionRef as any, id), {
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
