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
import ChineseNewYear from '~/components/Templates/NewChineseNewYear.vue';

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
  switch (props.theme) {
    case 'spring-festival':
      return SpringFestival;
    case 'chinese-new-year':
      return ChineseNewYear;
    default:
      return SimpleTemplate;
  }
});
</script>
