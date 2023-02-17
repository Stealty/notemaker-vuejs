import { defineStore } from "pinia";
import { auth } from "@/database/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";

type CredentialsType = {
  email: string;
  password: string;
};

type UserType = {
  id?: string;
  email?: null | string;
};

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      router: {} as any,
      user: {} as UserType,
    };
  },

  actions: {
    init() {
      onAuthStateChanged(auth, (user: null | User) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push("/");
        } else {
          this.user = {};
          this.router.replace("/auth");
        }
      });
    },
    registerUser(credentials: CredentialsType) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Code:" + errorCode);
          console.log("Message:" + errorMessage);
        });
    },
    loginUser(credentials: CredentialsType) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Code:" + errorCode);
          console.log("Message:" + errorMessage);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          console.log("User signed out");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },

  getters: {},
});
