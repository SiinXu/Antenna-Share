<template>
  <div class="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-gray-900 overflow-hidden relative">
    <simple-template :acc="data" :theme="theme" />
  </div>
</template>

<script setup>
import SimpleTemplate from '~/components/Templates/Simple.vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  theme: {
    type: String,
    default: 'light'
  }
});
</script>
