<template>
  <div
    class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse transition-all duration-300"
  >
    <!-- 이미지 스켈레톤 -->
    <div class="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>

    <!-- 콘텐츠 스켈레톤 -->
    <div class="p-6 w-full">
      <!-- 제목 스켈레톤 (text-xl font-semibold 높이에 맞춤) -->
      <div class="h-7 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>

      <!-- 날짜 스켈레톤 (text-sm 높이에 맞춤) -->
      <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-4"></div>

      <!-- 내용 스켈레톤 (line-clamp-3에 맞춤) -->
      <div class="space-y-1 mb-4">
        <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div class="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      </div>

      <!-- 태그 스켈레톤 -->
      <div class="flex flex-wrap gap-2">
        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-12"></div>
        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
        <div class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-14"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
' '
