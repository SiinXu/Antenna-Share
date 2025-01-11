<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-[340px] relative">
      <simple-template v-if="data" :acc="data" :theme="theme" />
      <div v-else class="flex items-center justify-center h-screen">
        <p class="text-gray-500">加载中...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, navigateTo } from '#app';
import { decodeData } from '~/utils/encode';
import SimpleTemplate from '~/components/templates/Simple.vue';

const route = useRoute();
const data = ref(null);
const theme = ref('light');

onMounted(() => {
  try {
    const decodedData = decodeData(route.params.data);
    // 提取主题设置
    const { theme: sharedTheme, ...rest } = decodedData;
    theme.value = sharedTheme || 'light';
    data.value = rest;
  } catch (error) {
    console.error('Error decoding data:', error);
    navigateTo('/');
  }
});
</script>

<style>
html.dark {
  color-scheme: dark;
}
</style>
