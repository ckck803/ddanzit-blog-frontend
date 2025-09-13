<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 h-16 text-white shadow-md bg-slate-700 dark:bg-slate-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- 로고 -->
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold">MyBlog</router-link>
        </div>

        <!-- 데스크탑 메뉴 -->
        <div class="hidden md:flex items-center">
          <div class="flex space-x-6 items-center">
            <router-link to="/" class="hover:text-gray-200 transition"
              >Home</router-link
            >
            <router-link to="/editor" class="hover:text-gray-200 transition"
              >Editor</router-link
            >
            <a href="#" class="hover:text-gray-200 transition">About</a>
            <a href="#" class="hover:text-gray-200 transition">Contact</a>
          </div>

          <!-- 인증 관련 메뉴 -->
          <div class="flex items-center ml-6 space-x-4">
            <div v-if="!isAuthenticated" class="flex items-center space-x-3">
              <router-link to="/login" class="hover:text-gray-200 transition"
                >로그인</router-link
              >
              <router-link
                to="/signup"
                class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md transition text-sm font-medium"
                >회원가입</router-link
              >
            </div>

            <div v-else class="flex items-center space-x-3">
              <span class="text-gray-200 text-sm">{{ user?.username }}님</span>
              <button
                @click="handleLogout"
                class="hover:text-gray-200 transition text-sm"
              >
                로그아웃
              </button>
            </div>

            <div class="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <!-- 햄버거 버튼 (모바일 전용) -->
        <div class="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button @click="toggleMenu" class="focus:outline-none">
            <svg
              v-if="!isOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 모바일 메뉴 (햄버거 버튼 클릭 시 표시) -->
    <div v-if="isOpen" class="md:hidden">
      <div class="px-4 pb-4 space-y-2 bg-slate-700 dark:bg-slate-800">
        <router-link
          to="/"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          @click="closeMenu"
          >Home</router-link
        >
        <router-link
          to="/editor"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          @click="closeMenu"
          >Editor</router-link
        >
        <a
          href="#"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          >About</a
        >
        <a
          href="#"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          >Contact</a
        >

        <!-- 모바일 인증 메뉴 -->
        <div v-if="!isAuthenticated" class="pt-2 border-t border-slate-600">
          <router-link
            to="/login"
            class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
            @click="closeMenu"
            >로그인</router-link
          >
          <router-link
            to="/signup"
            class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
            @click="closeMenu"
            >회원가입</router-link
          >
        </div>

        <div v-else class="pt-2 border-t border-slate-600">
          <div class="block py-2 text-gray-200 px-3">
            {{ user?.username }}님
          </div>
          <button
            @click="handleLogout"
            class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3 w-full text-left"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import ThemeToggle from "./ThemeToggle.vue";
import { useAuth } from "@/hooks/useAuth";

const router = useRouter();
const { user, isAuthenticated, logout, initializeAuth } = useAuth();

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = false;
};

const handleLogout = () => {
  logout();
  closeMenu();
  router.push("/");
};

onMounted(() => {
  initializeAuth();
});
</script>
