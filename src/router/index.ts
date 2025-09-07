import { createRouter, createWebHistory } from "vue-router";
import Blog from "../pages/Blog.vue";
import BlogPost from "../pages/BlogPost.vue";
import Editor from "../pages/Editor.vue";
import LoginForm from "../components/auth/LoginForm.vue";
import SignupForm from "../components/auth/SignupForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginForm,
    },
    {
      path: "/signup",
      name: "Signup",
      component: SignupForm,
    },
    {
      path: "/editor",
      name: "Editor",
      component: Editor,
    },
    {
      path: "/:id",
      name: "BlogPost",
      component: BlogPost,
    },
  ],
});

export default router;
