<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-[340px] relative">
      <SimpleTemplate v-if="data" :acc="data" :theme="theme" />
      <div v-else class="flex items-center justify-center h-screen">
        <p class="text-gray-500">{{ error || '加载中...' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SimpleTemplate from '../../components/Templates/Simple.vue';
import { decodeData } from '../../utils/encode';

const route = useRoute();
const theme = ref('light');
const error = ref('');

const data = computed(() => {
  try {
    const params = route.params;
    console.log('Route params:', params);
    
    if (!params.data) {
      error.value = '未找到分享数据';
      return null;
    }

    const decodedData = decodeData(params.data);
    console.log('Decoded data:', decodedData);
    
    if (decodedData.theme) {
      theme.value = decodedData.theme;
    }
    
    return decodedData;
  } catch (e) {
    console.error('Error parsing data:', e);
    error.value = '数据格式错误';
    return null;
  }
});

// Debug output
console.log('Component mounted');
</script>

<style>
html.dark {
  color-scheme: dark;
}
</style>
