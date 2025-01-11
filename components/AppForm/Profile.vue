<template>
  <base-form-section
    title="个人资料"
    description="一些关于您的公开信息"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >姓名</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="about" class="block text-sm font-medium text-gray-700"
            >关于自己</label
          >
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400"
              placeholder="我是一名宇航员"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            ></textarea>
          </div>
        </div>

        <div class="flex-grow col-span-6 sm:col-span-3">
          <label for="photo-url" class="block text-sm font-medium text-gray-700"
            >头像链接或上传图片</label
          >
          <div 
            class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 relative"
            @dragover.prevent
            @drop.prevent="handleDrop"
            @paste="handlePaste"
          >
            <div class="space-y-1 text-center">
              <div v-if="previewUrl" class="mb-4">
                <img :src="previewUrl" alt="Preview" class="mx-auto h-32 w-32 rounded-full object-cover" />
                <button 
                  @click="clearImage" 
                  class="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  删除图片
                </button>
              </div>
              <div v-else class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>上传图片</span>
                  <input 
                    id="file-upload" 
                    name="file-upload" 
                    type="file" 
                    class="sr-only" 
                    accept="image/*"
                    @change="handleFileSelect"
                  />
                </label>
                <p class="pl-1">或将图片拖拽到这里</p>
              </div>
              <p class="text-xs text-gray-500">支持 PNG, JPG, GIF 格式</p>
            </div>
          </div>
          <input
            type="text"
            name="photo-url"
            id="photo-url"
            class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
            placeholder="或者直接输入图片链接"
          />
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps(["name", "desc", "image"]);
const emit = defineEmits(["update:name", "update:desc", "update:image"]);

import { ref, watch } from 'vue';
const previewUrl = ref('');

// 当组件加载时，如果已有图片链接则显示预览
if (props.image) {
  previewUrl.value = props.image;
}

// 监听 image prop 的变化
watch(() => props.image, (newValue) => {
  previewUrl.value = newValue;
});

const handleFileSelect = (event) => {
  const file = event.target.files[0];
  if (file) {
    handleImageFile(file);
  }
};

const handleDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    handleImageFile(file);
  }
};

const handlePaste = (event) => {
  const items = (event.clipboardData || event.originalEvent.clipboardData).items;
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      const file = item.getAsFile();
      handleImageFile(file);
      break;
    }
  }
};

const handleImageFile = (file) => {
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      previewUrl.value = dataUrl;
      emit('update:image', dataUrl);
    };
    reader.readAsDataURL(file);
  }
};

const clearImage = () => {
  previewUrl.value = '';
  emit('update:image', '');
};
</script>
