<template>
  <div class="h-screen flex bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col w-full px-4 py-6 bg-gray-200 dark:bg-zinc-900">
      <!-- Editor 영역 -->
      <div class="flex w-full h-[calc(100vh-6.2rem)]">
        <div class="flex w-full flex-col overflow-y-auto max-h-full p-1">
          <div class="">
            <!-- <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              블로그 에디터
            </h1> -->

            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 pb-2 px-2"
            >
              제목
            </label>
            <div class="flex gap-4">
              <input
                v-model="title"
                type="text"
                placeholder="제목을 입력하세요"
                class="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- Additional Options -->
          <!-- <div class="my-4 bg-white dark:bg-zinc-800 rounded-lg px-6 py-4"> -->
          <div class="rounded-lg pb-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="relative">
                <label
                  class="block text-sm font-medium text-gray-700 dark:text-gray-300 p-2"
                >
                  카테고리
                </label>
                <input
                  v-model="category"
                  type="text"
                  placeholder="카테고리를 입력하거나 선택하세요"
                  class="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500"
                  @input="showSuggestions = true"
                  @focus="showSuggestions = true"
                  @blur="hideSuggestions"
                />

                <!-- 검색 제안 드롭다운 -->
                <div
                  v-if="showSuggestions && filteredCategories.length > 0"
                  class="absolute z-10 w-full mt-1 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 rounded-lg max-h-48 overflow-y-auto"
                >
                  <div
                    v-for="suggestedCategory in filteredCategories"
                    :key="suggestedCategory.value"
                    @mousedown="selectCategory(suggestedCategory)"
                    class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-between"
                  >
                    <span class="text-gray-900 dark:text-white">{{
                      suggestedCategory.label
                    }}</span>
                    <span class="text-xs text-gray-500 dark:text-gray-400">{{
                      suggestedCategory.value
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="relative">
                <!-- 라벨과 선택된 태그들을 한 줄에 표시 -->
                <div class="flex items-center flex-wrap gap-2 p-2">
                  <div class="flex items-center">
                    <label
                      class="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      태그
                    </label>
                  </div>
                  <!-- 선택된 태그들 표시 -->
                  <div
                    v-if="selectedTags.length > 0"
                    class="flex flex-wrap gap-2"
                  >
                    <span
                      v-for="tag in selectedTags"
                      :key="tag"
                      class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {{ tag }}
                      <button
                        @click="removeTag(tag)"
                        class="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                      >
                        ×
                      </button>
                    </span>
                  </div>
                </div>

                <input
                  v-model="tagInput"
                  type="text"
                  placeholder="태그를 입력하거나 선택하세요"
                  class="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500"
                  @input="showTagSuggestions = true"
                  @focus="showTagSuggestions = true"
                  @blur="hideTagSuggestions"
                  @keydown.enter.prevent="addCustomTag"
                  @keydown.comma.prevent="addCustomTag"
                />

                <!-- 태그 제안 드롭다운 -->
                <div
                  v-if="showTagSuggestions && filteredTags.length > 0"
                  class="absolute z-10 w-full mt-1 bg-white dark:bg-zinc-800 border border-gray-300 dark:border-gray-600 rounded-lg max-h-48 overflow-y-auto"
                >
                  <div
                    v-for="suggestedTag in filteredTags"
                    :key="suggestedTag"
                    @mousedown="selectTag(suggestedTag)"
                    class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    <span class="text-gray-900 dark:text-white">{{
                      suggestedTag
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Editor -->
          <!-- <div
            class="bg-white dark:bg-zinc-800 rounded-lg p-6 flex-1 flex flex-col"
          > -->
          <div class="rounded-lg flex-1 flex flex-col">
            <textarea
              v-model="content"
              v-on:paste="onPaste"
              placeholder="마크다운 내용을 입력하세요..."
              class="w-full flex-1 p-4 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white font-mono text-sm resize-none focus:outline-none focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <EditorPreview
      :tags="selectedTags"
      :date="new Date()"
      :title="title"
      :content="content"
    />
    <EditorBottomBar @go-back="goBack" @save-post="savePost" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import EditorBottomBar from "@/components/EditorBottomBar.vue";
import EditorPreview from "@/components/editor/EditorPreview.vue";

const router = useRouter();

const title = ref("");
const content = ref(`# 샘플 블로그 포스트

안녕하세요! 이것은 **마크다운 에디터**의 샘플 내용입니다.

## 기능

- [x] 마크다운 편집
- [x] 실시간 미리보기
- [ ] 이미지 업로드
- [ ] 코드 하이라이팅

### 코드 예시

\`\`\`typescript
interface BlogPost {
  title: string
  content: string
  category: string
  tags: string[]
}
\`\`\`

> 이것은 인용구입니다.

더 많은 내용을 작성해보세요!`);

const category = ref("");
const tags = ref("");

// 태그 관련 상태
const tagInput = ref("");
const selectedTags = ref<string[]>([]);
const showTagSuggestions = ref(false);
const availableTags = ref([
  "Vue",
  "React",
  "Angular",
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Tailwind",
  "Bootstrap",
  "SCSS",
  "Node.js",
  "Express",
  "Next.js",
  "Nuxt.js",
  "Vite",
  "Python",
  "Java",
  "C++",
  "Go",
  "Rust",
  "데이터베이스",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "블로그",
  "튜토리얼",
  "리뷰",
  "개발",
  "프론트엔드",
  "백엔드",
  "API",
  "REST",
  "GraphQL",
  "웹개발",
  "모바일",
  "AI",
  "머신러닝",
  "데이터분석",
  "클라우드",
  "AWS",
]);

// 카테고리 검색 관련 상태
const showSuggestions = ref(false);
const categories = ref([
  { label: "기술", value: "tech" },
  { label: "일상", value: "life" },
  { label: "리뷰", value: "review" },
  { label: "튜토리얼", value: "tutorial" },
  { label: "개발", value: "development" },
  { label: "프론트엔드", value: "frontend" },
  { label: "백엔드", value: "backend" },
  { label: "데이터베이스", value: "database" },
  { label: "DevOps", value: "devops" },
  { label: "AI/ML", value: "ai-ml" },
]);

// 카테고리 필터링
const filteredCategories = computed(() => {
  if (!category.value) return categories.value;

  const searchTerm = category.value.toLowerCase();
  return categories.value.filter(
    (cat) =>
      cat.label.toLowerCase().includes(searchTerm) ||
      cat.value.toLowerCase().includes(searchTerm)
  );
});

// 카테고리 선택
const selectCategory = (selectedCategory: { label: string; value: string }) => {
  category.value = selectedCategory.label;
  showSuggestions.value = false;
};

// 제안 숨기기 (약간의 딜레이를 주어 클릭 이벤트가 발생할 시간을 확보)
const hideSuggestions = () => {
  setTimeout(() => {
    showSuggestions.value = false;
  }, 150);
};

// 태그 필터링
const filteredTags = computed(() => {
  if (!tagInput.value) return availableTags.value;

  const searchTerm = tagInput.value.toLowerCase();
  return availableTags.value.filter(
    (tag) =>
      tag.toLowerCase().includes(searchTerm) &&
      !selectedTags.value.includes(tag)
  );
});

// 태그 선택
const selectTag = (tag: string) => {
  if (!selectedTags.value.includes(tag)) {
    selectedTags.value.push(tag);
    tagInput.value = "";
    showTagSuggestions.value = false;
  }
};

// 커스텀 태그 추가 (Enter나 쉼표로)
const addCustomTag = () => {
  const trimmedTag = tagInput.value.trim();
  if (trimmedTag && !selectedTags.value.includes(trimmedTag)) {
    selectedTags.value.push(trimmedTag);
    tagInput.value = "";
    showTagSuggestions.value = false;
  }
};

// 태그 제거
const removeTag = (tagToRemove: string) => {
  selectedTags.value = selectedTags.value.filter((tag) => tag !== tagToRemove);
};

// 태그 제안 숨기기
const hideTagSuggestions = () => {
  setTimeout(() => {
    showTagSuggestions.value = false;
  }, 150);
};

// const renderedContent = computed(() => {
//   try {
//     const processor = unified()
//       .use(remarkParse)
//       .use(remarkGfm)
//       .use(remarkHtml, { sanitize: false });

//     return processor.processSync(content.value).toString();
//   } catch (error) {
//     console.error("Markdown processing error:", error);
//     return "<p>마크다운 처리 중 오류가 발생했습니다.</p>";
//   }
// });

const goBack = () => {
  router.push("/");
};

const savePost = () => {
  if (!title.value.trim()) {
    alert("제목을 입력해주세요.");
    return;
  }

  if (!content.value.trim()) {
    alert("내용을 입력해주세요.");
    return;
  }

  const post = {
    title: title.value,
    content: content.value,
    category: category.value,
    tags: selectedTags.value,
    createdAt: new Date().toISOString(),
  };

  console.log("Saving post:", post);

  // 실제 저장 로직은 여기에 구현
  // API 호출이나 localStorage 저장 등

  alert("포스트가 저장되었습니다!");
  router.push("/");
};

// 붙여넣기 기능
const onPaste = (event: ClipboardEvent) => {
  const clipboardItems = event.clipboardData?.items;
  if (!clipboardItems) {
    return;
  }

  const items = Array.from(event.clipboardData.items) || [];
  const imageItems = items.filter((item) => /^image\//.test(item.type));

  if (imageItems.length === 0) {
    return;
  }

  event.preventDefault();

  const item = imageItems[0];
  const blob = item.getAsFile();
  if (!blob) {
    return;
  }

  const file = new File([blob], "file name", {
    type: "image/jpeg",
    lastModified: new Date().getTime(),
  });
  const url = URL.createObjectURL(file);
  // console.log(url)

  const formData = new FormData();

  // senImage(formData);
  content.value += `![업로드중!](${url})\n`;
  formData.append("image", blob);
};
</script>

<style scoped>
.prose {
  @apply text-gray-900;
}

.dark .prose {
  @apply text-gray-100;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply text-gray-900 dark:text-white;
}

.prose blockquote {
  @apply border-l-blue-500 bg-blue-50 dark:bg-blue-900/20;
}

.prose code {
  @apply bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100;
}

.prose pre {
  @apply bg-gray-900 dark:bg-zinc-800;
}

.prose pre code {
  @apply bg-transparent text-gray-100;
}
</style>
