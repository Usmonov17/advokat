<template>
  <UILoader v-if="loading" />
  <div v-else class="flex items-center justify-center h-screen w-full relative">
    <NuxtImg src="/auth-bg.png" class="absolute inset-0 w-full h-full object-cover z-10" />
    <div
      class="z-50 w-[300px] relative dark:backdrop-blur-xl dark:bg-black/50 flex flex-col p-4 rounded-md shadow-[0_0_10px_black]">
      <NuxtImg src="/basket.svg" class="w-[120px] mb-14 mx-auto" />
      <h2 class="text-xl text-left mb-4"><span class="font-bold text-[24px]">Login</span> for Admin</h2>
      <form @submit.prevent="submitForm">
        <div class="flex items-center border border-gray-300 rounded-md p-1 gap-x-2">
          <Icon name="ion:ios-telephone-outline" class="w-8 h-8" />
          <input type="text" v-model="formData.phone" placeholder="991234567" required :disabled="simpleLoad"
            class="flex-1 border-none outline-none bg-transparent rounded-sm" />
        </div>
        <div class="flex items-center border border-gray-300 rounded-md p-1 gap-x-2 mt-2">
          <Icon name="iconamoon:lock-off-thin" class="w-8 h-8" />
          <input type="password" v-model="formData.password" placeholder="advokat_admin" required :disabled="simpleLoad"
            class="flex-1 border-none outline-none bg-transparent rounded-sm" />
        </div>
        <UButton class="dark:text-white mt-4 mx-auto w-full block tracking-widest rounded-sm" type="submit"
          :disabled="simpleLoad">
          {{ simpleLoad ? 'SENDING' : 'LOGIN' }}
        </UButton>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { AxiosError } from 'axios';
import { useCookie } from '#app';
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';

const url = "https://api.dezinfeksiyatashkent.uz/api/"
const router = useRouter();
const toast = useToast();
const simpleLoad = ref(false);
const formData = reactive({
  phone: '',
  password: ''
});

// function submitForm() {
//   fetch(`${url}auth/signin`, {
//     method: "POST",
//     body: JSON.stringify({
//       phone_number: formData.phone,
//       password: formData.password,
//     }),
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
// }

const submitForm = async () => {
  simpleLoad.value = true;
  try {
    const response = await axios.post(`${url}auth/signin`, {
      phone_number: formData.phone,
      password: formData.password,
    }, {
      headers: {
        "Content-type": "application/json",
      },
    });
    const responseData = response.data as { message: string; data: { tokens: { accessToken: { token: string } } } };
    formData.password = '';
    formData.phone = '';
    toast.add({
      title: `${responseData.message}`
    });
    const token = responseData.data.tokens.accessToken.token;
    const authToken = useCookie('token');
    authToken.value = token;
    router.push('/admin');
  } catch (error) {
    const axiosError = error as AxiosError;
    toast.add({
      title: (axiosError.response?.data as { message?: string }).message,
      color: 'red'
    });
  } finally {
    simpleLoad.value = false;
  }
}

const loading = ref(true);
onMounted(() => {
  loading.value = false;
})

definePageMeta({
  layout: 'auth',
  middleware: 'auth'
});
</script>
