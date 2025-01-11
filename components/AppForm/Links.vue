<template>
  <base-form-section title="链接" description="在这里添加一些链接">
    <template #helpertext>
      <p class="mt-1 text-xs text-gray-600">
        添加您想要分享的链接，可以拖动排序
      </p>
    </template>
    <draggable
      :list="modelValue"
      item-key="link"
      class="list-group"
      ghost-class="ghost"
      handle=".drag-handle"
    >
      <template #item="{ element: link }">
        <div class="relative mb-6 group">
          <button class="absolute top-2 -left-8">
            <icon
              name="radix-icons:drag-handle-dots-2"
              class="h-6 w-6 text-slate-500 drag-handle"
            />
          </button>
          <button
            @click="removeLink(link)"
            class="hidden group-hover:flex items-center justify-center h-6 w-6 rounded-full bg-slate-300 text-slate-600 absolute -right-3 -top-3"
          >
            <icon name="fluent:dismiss-24-regular" class="h-4 w-4" />
          </button>
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-1 gap-4">
                <div>
                  <label
                    for="label"
                    class="block text-sm font-medium text-gray-700"
                    >标题</label
                  >
                  <input
                    type="text"
                    name="label"
                    id="label"
                    v-model="link.l"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    for="url"
                    class="block text-sm font-medium text-gray-700"
                    >链接地址</label
                  >
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="url"
                      name="url"
                      id="url"
                      v-model="link.u"
                      @input="updateFavicon(link)"
                      class="block w-full flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <span class="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3">
                      <img 
                        v-if="link.u"
                        :src="`https://www.google.com/s2/favicons?domain=${getDomain(link.u)}&sz=32`"
                        :alt="link.l"
                        class="h-5 w-5 object-contain"
                        @error="handleImageError"
                      />
                      <icon 
                        v-else
                        name="ph:link-simple-bold" 
                        class="h-5 w-5 text-gray-400"
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    for="image"
                    class="block text-sm font-medium text-gray-700"
                    >图标图片链接</label
                  >
                  <input
                    type="url"
                    name="image"
                    id="image"
                    v-model="link.i"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="例如：https://example.com/icon.png"
                  />
                </div>
              </div>
              <p
                class="mt-2 text-xs text-center text-slate-400"
                v-if="!link.l || !link.u"
              >
                添加标题和链接地址后将在预览中显示
              </p>
            </div>
          </div>
        </div>
      </template>
    </draggable>
    <button
      type="button"
      @click="appendLink"
      class="mt-4 w-full flex justify-center items-center gap-2 rounded-md bg-white py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      <icon name="ph:plus-bold" class="h-5 w-5" />
      <span>添加链接</span>
    </button>
  </base-form-section>
</template>
<script setup>
import { ref, watch } from 'vue';
import draggable from 'vuedraggable';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']);

const getDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
};

const handleImageError = (e) => {
  e.target.src = '';
};

const updateFavicon = (link) => {
  if (!link.u) {
    link.i = '';
    return;
  }
  try {
    new URL(link.u);
  } catch {
    return;
  }
};

const appendLink = () => {
  const newLinks = [...props.modelValue, { l: '', u: '', i: '' }];
  emit('update:modelValue', newLinks);
};

const removeLink = (link) => {
  const index = props.modelValue.indexOf(link);
  if (index > -1) {
    const newLinks = [...props.modelValue];
    newLinks.splice(index, 1);
    emit('update:modelValue', newLinks);
  }
};
</script>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
