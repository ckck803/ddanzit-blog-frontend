import { createRouter, createWebHistory } from "vue-router";
import Blog from "../pages/Blog.vue";
import BlogPost from "../pages/BlogPost.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/:id",
      name: "BlogPost",
      component: BlogPost,
    },
  ],
});

export default router;
