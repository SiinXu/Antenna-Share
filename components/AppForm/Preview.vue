<template>
  <div class="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-gray-900 overflow-hidden relative">
    <component 
      :is="currentTemplate" 
      :acc="data" 
      :theme="theme" 
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import SimpleTemplate from '~/components/Templates/Simple.vue';
import SpringFestival from '~/components/Templates/SpringFestival.vue';

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

const currentTemplate = computed(() => {
  return props.theme === 'spring-festival' ? SpringFestival : SimpleTemplate;
});
</script>
