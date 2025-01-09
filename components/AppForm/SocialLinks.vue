<template>
  <div class="social-links">
    <div v-for="(link, platform) in platforms" :key="platform.key" class="mb-4">
      <label :for="platform.key" class="block text-sm font-medium text-gray-700">{{ platform.label }}</label>
      <div class="mt-1">
        <input
          :id="platform.key"
          :value="modelValue[platform.key]"
          @input="$emit(`update:${platform.key}`, $event.target.value)"
          type="text"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          :placeholder="`请输入您的${platform.label}链接`"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const platforms = [
  { key: 'wx', label: '微信' },
  { key: 'dy', label: '抖音' },
  { key: 'xhs', label: '小红书' },
  { key: 'wb', label: '微博' },
  { key: 'bl', label: 'Bilibili' },
  { key: 'zh', label: '知乎' },
  { key: 'f', label: 'Facebook' },
  { key: 't', label: 'Twitter' },
  { key: 'ig', label: 'Instagram' },
  { key: 'gh', label: 'GitHub' },
  { key: 'tg', label: 'Telegram' },
  { key: 'l', label: 'LinkedIn' },
  { key: 'e', label: 'Email' },
  { key: 'w', label: 'WhatsApp' },
  { key: 'y', label: 'YouTube' }
]

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

defineEmits([
  'update:wx',
  'update:dy',
  'update:xhs',
  'update:wb',
  'update:bl',
  'update:zh',
  'update:f',
  'update:t',
  'update:ig',
  'update:gh',
  'update:tg',
  'update:l',
  'update:e',
  'update:w',
  'update:y'
])
</script>

<style scoped>
.social-links {
  @apply space-y-4;
}
</style>