<template>
  <div
    class="w-full md:w-1/2 h-16 fixed bottom-0 left-0 right-0 px-3 sm:px-5 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-700"
  >
    <div class="h-full">
      <div class="max-w-7xl mx-auto flex justify-between items-center h-full">
        <button
          @click="$emit('goBack')"
          class="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          나가기
          <!-- <span class="hidden sm:inline">나가기</span> -->
        </button>

        <div class="flex items-center gap-2 sm:gap-3">
          <span class="sm:inline text-sm text-gray-500 dark:text-gray-400">
            임시저장
          </span>
          <button
            @click="$emit('savePost')"
            class="px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm sm:text-base"
          >
            출간하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  goBack: [];
  savePost: [];
}>();
</script>
