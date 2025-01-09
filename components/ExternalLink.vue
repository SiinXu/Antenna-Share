<template>
  <li>
    <a
      :href="url"
      target="_blank"
      rel="noopener | noreferrer"
      class="glass-card w-full"
    >
      <span class="flex-1 flex items-center">
        <span class="mr-2">
          <img 
            :src="`https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=128`"
            class="h-6 w-6 rounded-full"
            :alt="label"
          />
        </span>
        <span>{{ label }}</span>
      </span>
      <icon name="ph:arrow-up-right-bold" class="h-4 w-4" />
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
