<template>
  <div
    v-if="totalPages > 1"
    class="mt-12 flex items-center justify-center space-x-4"
  >
    <!-- Previous Button -->
    <button
      @click="goToPrevious"
      :disabled="currentPage === 1"
      :class="[
        'px-4 py-2 rounded-lg text-gray-500 hover:text-gray-700 transition-colors duration-200',
        currentPage === 1
          ? 'opacity-50 cursor-not-allowed text-gray-500 dark:text-gray-600'
          : 'hover:text-blue-600 dark:text-gray-700 dark:hover:text-blue-400',
      ]"
    >
      이전
    </button>

    <!-- Page Numbers -->
    <div class="flex items-center space-x-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="[
          'px-4 py-2 rounded-lg transition-colors duration-200 min-w-[40px]',
          currentPage === page
            ? 'bg-blue-500 text-white shadow-lg'
            : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400',
        ]"
      >
        {{ page }}
      </button>
    </div>

    <!-- Next Button -->
    <button
      @click="goToNext"
      :disabled="currentPage === totalPages"
      :class="[
        'px-4 py-2 rounded-lg text-gray-500 hover:text-gray-700 transition-colors duration-200',
        currentPage === totalPages
          ? 'opacity-50 cursor-not-allowed text-gray-500 dark:text-gray-600'
          : 'hover:text-blue-600 dark:text-gray-700 dark:hover:text-blue-400',
      ]"
    >
      다음
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentPage: number;
  totalPages: number;
}

interface Emits {
  (e: 'update:currentPage', page: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const goToPage = (page: number) => {
  emit('update:currentPage', page);
};

const goToPrevious = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1);
  }
};

const goToNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1);
  }
};
</script>