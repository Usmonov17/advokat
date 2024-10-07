<template>
  <nav
    class="fixed top-0 left-0 w-full dark:bg-gray-900 bg-gray-200 pl-[21%] p-2 border-b border-b-slate-500 flex items-center justify-between">
    <h2 class="capitalize text-[24px] font-mono tracking-wider w-[150px]">{{ title }}</h2>
    <div class="flex items-center border border-gray-300 p-1 gap-x-2 w-[300px]">
      <Icon name="mingcute:search-line" class="w-8 h-8" />
      <input type="text" placeholder="Search" required class="border-none outline-none bg-transparent rounded-sm" />
    </div>
    <div class="flex items-center gap-x-2">
      <SharedDarkMode />
      <SharedProfile />
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const title = computed(() => route.path.split('/').reverse()[0])
</script>