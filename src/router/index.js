import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Keypad from "../components/Keypad.vue";
import CallLog from "../components/CallLog.vue";
import ContactList from "../components/ContactList.vue";
import AddContactForm from "../components/AddContactForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/keypad/:number?",
      name: "keypad",
      component: Keypad,
      props: true,
    },
    {
      path: "/call-log",
      name: "call-log",
      component: CallLog,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactList,
    },
    {
      path: "/add-contact",
      name: "add-contact",
      component: AddContactForm,
    },
  ],
});

export default router;
