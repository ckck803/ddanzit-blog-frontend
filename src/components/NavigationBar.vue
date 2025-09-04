<template>
  <nav class="text-white shadow-md bg-slate-700 dark:bg-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- 로고 -->
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold">MyLogo</router-link>
        </div>

        <!-- 데스크탑 메뉴 -->
        <div class="hidden md:flex space-x-6 items-center">
          <a href="#" class="hover:text-gray-200 transition">Home</a>
          <a href="#" class="hover:text-gray-200 transition">About</a>
          <a href="#" class="hover:text-gray-200 transition">Services</a>
          <a href="#" class="hover:text-gray-200 transition">Contact</a>
          <ThemeToggle />
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
        <a
          href="#"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          >Home</a
        >
        <a
          href="#"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          >About</a
        >
        <a
          href="#"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          >Services</a
        >
        <a
          href="#"
          class="block py-2 text-white hover:bg-slate-500 dark:hover:bg-slate-600 rounded-md px-3"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
