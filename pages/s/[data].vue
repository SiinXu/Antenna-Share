<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-[340px] relative">
      <SimpleTemplate v-if="data" :acc="data" :theme="theme" />
      <div v-else class="flex items-center justify-center h-screen">
        <p class="text-gray-500">加载中...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Base64 } from 'js-base64';
import SimpleTemplate from '~/components/Templates/Simple.vue';

const route = useRoute();
const theme = ref('light');

const data = computed(() => {
  try {
    return JSON.parse(Base64.decode(route.params.data));
  } catch (e) {
    return null;
  }
});
</script>

<style>
html.dark {
  color-scheme: dark;
}
</style>
