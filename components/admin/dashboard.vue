<template>
  <div class="fixed top-0 left-0 h-screen dark:bg-gray-900 bg-gray-200 w-[20%] border-r border-r-slate-500">
    <div class=" flex flex-col space-y-6">
      <NuxtLink to="/" class="flex items-center space-x-1 w-max mx-auto mt-3 gap-x-2">
        <NuxtImg src="/logo.png" alt="logo" width="50" height="50" class="bg-white rounded-full" />
        <span class="text-2xl font-medium text-green-500">Advokatura</span>
      </NuxtLink>
      <div class="">
        <SharedDashboardItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>