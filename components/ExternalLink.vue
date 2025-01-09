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
            :src="favicon"
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
import { ref, onMounted } from 'vue'

const props = defineProps({
  label: String,
  url: String,
});

const favicon = ref('')

onMounted(async () => {
  try {
    const url = new URL(props.url)
    favicon.value = `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`
  } catch (error) {
    console.error('Invalid URL:', error)
  }
})
</script>
