<template>
  <li>
    <a
      :href="url"
      target="_blank"
      rel="noopener | noreferrer"
      class="flex items-center space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100"
    >
      <img 
        :src="`https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=128`"
        class="w-6 h-6 object-contain"
        :alt="label"
      />
      <span class="flex-1 font-medium text-sm text-slate-700">{{ label }}</span>
      <icon name="ph:arrow-up-right" class="h-4 w-4 text-slate-400" />
    </a>
  </li>
</template>

<script setup>
const props = defineProps({
  label: String,
  url: String,
});

const getDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
};
</script>
