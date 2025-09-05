<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto animate-pulse">
      <!-- 헤더 스켈레톤 -->
      <div class="mb-8">
        <!-- 제목 스켈레톤 -->
        <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-4"></div>

        <!-- 날짜와 태그 스켈레톤 -->
        <div class="flex items-center gap-4 mb-4">
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          <div class="flex gap-2">
            <div
              class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"
            ></div>
            <div
              class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20"
            ></div>
            <div
              class="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-14"
            ></div>
          </div>
        </div>
      </div>

      <!-- 메인 이미지 스켈레톤 -->
      <div
        class="w-full h-[400px] bg-gray-200 dark:bg-gray-700 rounded-lg mb-8"
      ></div>

      <!-- 본문 내용 스켈레톤 -->
      <div class="space-y-4 mb-12">
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>

      <!-- 댓글 섹션 스켈레톤 -->
      <div class="mt-12">
        <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-4"></div>

        <!-- 댓글 입력 스켈레톤 -->
        <div class="pb-10 space-y-4">
          <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div class="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
