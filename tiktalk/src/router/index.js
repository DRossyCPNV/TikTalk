import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Conversation from "../views/Conversation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/conversation/:id",
    name: "Conversation",
    component: Conversation,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
