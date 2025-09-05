<template>
  <div class="animate-pulse">
    <!-- 단일 댓글 스켈레톤 -->
    <div 
      v-for="n in count" 
      :key="n"
      class="py-5 pl-4 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="flex items-start space-x-4">
        <!-- 아바타 스켈레톤 -->
        <div class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0"></div>
        
        <!-- 댓글 내용 스켈레톤 -->
        <div class="flex-1 space-y-2">
          <!-- 작성자명 스켈레톤 -->
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
          
          <!-- 댓글 내용 스켈레톤 -->
          <div class="space-y-2">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
          </div>
          
          <!-- 액션 버튼들 스켈레톤 -->
          <div class="flex items-center space-x-4 pt-2">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          </div>
        </div>
      </div>
      
      <!-- 대댓글 스켈레톤 (선택적) -->
      <div v-if="showReplies && n === 1" class="ml-14 mt-4 space-y-4">
        <div class="flex items-start space-x-4">
          <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0"></div>
          <div class="flex-1 space-y-2">
            <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
            <div class="space-y-1">
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </div>
            <div class="flex items-center space-x-3 pt-1">
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-10"></div>
              <div class="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  count?: number
  showReplies?: boolean
}

withDefaults(defineProps<Props>(), {
  count: 3,
  showReplies: false
})
</script>