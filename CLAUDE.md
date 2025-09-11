# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (runs Vite dev server)
- **Build for production**: `npm run build` (TypeScript check + Vite build)
- **Preview production build**: `npm run preview`
- **Run Storybook**: `npm run storybook` (dev server on port 6006)
- **Build Storybook**: `npm run build-storybook`

## Architecture Overview

This is a Vue 3 + TypeScript blog comment system using:

- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** for type safety
- **Pinia** for centralized state management
- **Vue Router** for routing between blog list and individual posts
- **Tailwind CSS** for styling with dark mode support
- **Vite** as the build tool
- **Storybook** for component documentation
- **Vitest** for testing (with browser testing via Playwright)

### Project Structure

```
src/
├── components/
│   ├── blog/           # Blog-specific components
│   │   ├── BlogCard.vue
│   │   ├── BlogComment.vue
│   │   ├── BlogCommentItem.vue
│   │   └── BlogFooter.vue
│   ├── comment/        # Comment system components
│   │   └── AddComment.vue
│   ├── NavigationBar.vue
│   └── ThemeToggle.vue
├── composables/        # Vue composables
│   └── useTheme.ts     # Theme management logic
├── stores/             # Pinia stores
│   └── app.ts          # App-level state (loading, etc.)
├── pages/              # Route pages
│   ├── Blog.vue        # Main blog listing
│   └── BlogPost.vue    # Individual blog post
├── router/
│   └── index.ts        # Vue Router configuration
├── stories/            # Storybook stories
├── types/              # TypeScript type definitions
│   ├── IComment.ts     # Comment interface
│   └── post.ts         # Post type definitions
├── App.vue
├── main.ts
└── style.css
```

### Key Architecture Patterns

1. **Component Organization**: Components are organized by feature (`blog/`, `comment/`) rather than by type
2. **State Management**: Uses Pinia for centralized app state management (loading states, etc.) while keeping auth state in a separate composable
3. **Theme System**: Uses a composable (`useTheme`) that manages dark/light mode with localStorage persistence and system preference detection
4. **Comment System**: Hierarchical comment structure with nested replies supported through recursive `IComment` interface
5. **Routing**: Simple two-page structure - blog listing (/) and individual posts (/:id)
6. **Styling**: Tailwind CSS with dark mode using class strategy (`darkMode: 'class'`)

### TypeScript Types

- **IComment**: Defines comment structure with nested replies capability
- Components use `defineProps` with TypeScript for prop validation
- Uses Vue 3's Composition API with TypeScript support

### Development Notes

- Components use `<script setup>` syntax consistently
- Tailwind classes follow dark/light mode pattern: `class="bg-white dark:bg-gray-900"`
- Comment system includes reply functionality and like/unlike features
- Theme state persists across sessions and respects system preferences