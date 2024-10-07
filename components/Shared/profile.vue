<template>
  <UPopover :popper="{ placement: 'left' }">
    <UAvatar alt="Admin" size="lg" class="uppercase border-2 border-blue-500" />
    <template #panel>
      <div class="p-2 w-72 bg-white dark:bg-black">
        <p class="text-neutral-600 text-sm">usmonov@gmail.com</p>
        <div class="flex items-center  mt-3 space-x-2">
          <UAvatar class="uppercase rounded-full" src="/user.png" alt="Adminning rasmi" />
          <p class="capitalize text-[16px]">Admin's documents</p>
        </div>
        <UDivider class="my-3" />
        <NuxtLink>
          <UButton color="blue" variant="ghost" class="w-full">Profile</UButton>
        </NuxtLink>
        <UButton color="red" variant="ghost" @click="logOut" class="w-full">Log out</UButton>
      </div>
    </template>
  </UPopover>
</template>
<script setup lang="ts">
import { useCookie } from '#app'
import { useRouter } from 'vue-router'

const router = useRouter()

const logOut = () => {
  const authToken = useCookie('token')
  authToken.value = null
  router.push('/auth')
}
</script>