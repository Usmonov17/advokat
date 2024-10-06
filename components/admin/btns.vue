<template>
  <NuxtLink v-for="(link, index) in sidebarItems" :key="index" :to="link.url">
    <UButton class="w-full text-left h-12 flex justify-start rounded-none text-[18px]"
      :variant="route.fullPath === link.url ? 'solid' : 'ghost'">
      <Icon :name="link.icon" size="20" class="mr-2" />
      <span>{{ link.name }}</span>
    </UButton>
  </NuxtLink>
</template>

<script setup lang="ts">
import { sidebarItems } from '~/constants';
const route = useRoute()

</script>