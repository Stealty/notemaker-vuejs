import { useStoreAuth } from "./../stores/storeAuth";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import ViewNotes from "../views/ViewNotes.vue";
import ViewStats from "../views/ViewStats.vue";
import ViewEditNote from "../views/ViewEditNote.vue";
import ViewAuth from "../views/ViewAuth.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: ViewEditNote,
  },
  {
    path: "/auth",
    name: "auth",
    component: ViewAuth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth();
  if (!storeAuth.user.id && to.name !== "auth") {
    window.alert("You must be logged in");
    return { name: "auth" };
  }
  if (storeAuth.user.id && to.name === "auth") {
    return false;
  }
});

export default router;
