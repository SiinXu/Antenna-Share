<template>
  <div class="min-h-full flex flex-col" :class="[
    theme === 'light' ? 'bg-gradient' : theme === 'spring-festival' ? 'bg-gradient-spring-festival' : 'bg-gray-900'
  ]">
    <div class="flex-1 relative flex flex-col">
      <!-- 头像区域 -->
      <div class="relative">
        <div class="aspect-[2/1] glow-bg">
          <div class="glow-container">
            <div class="glow glow-1"></div>
            <div class="glow glow-2"></div>
            <div class="glow glow-3"></div>
            <div class="glow glow-4"></div>
            <div class="glow glow-5"></div>
            <div class="glow glow-6"></div>
          </div>
        </div>
        <div class="absolute inset-x-0 bottom-0 translate-y-1/2 flex justify-center">
          <div :class="[
            'h-24 w-24 rounded-full ring-4',
            theme === 'light' ? 'ring-white' : theme === 'spring-festival' ? 'ring-amber-300' : 'ring-gray-900'
          ]">
            <img
              v-if="acc.i"
              :src="acc.i"
              class="h-full w-full rounded-full object-cover"
              @error="handleImageError"
            />
            <div v-else class="h-full w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>

      <!-- 名字和简介 -->
      <div class="mt-16 px-6 text-center">
        <h1 class="text-2xl font-bold" :class="[
          theme === 'light' ? 'text-gray-900' : theme === 'spring-festival' ? 'text-amber-100' : 'text-white'
        ]">{{ acc.n || '未设置名称' }}</h1>
        <p class="mt-2 text-sm" :class="[
          theme === 'light' ? 'text-gray-500' : theme === 'spring-festival' ? 'text-amber-200/80' : 'text-gray-400'
        ]">{{ acc.d || '未设置简介' }}</p>
      </div>

      <!-- 社交媒体链接 -->
      <div
        v-if="!allSocialLinksAreEmpty"
        class="mt-6 px-6"
      >
        <div class="flex flex-wrap justify-center gap-1.5 py-2">
          <span v-if="acc.wx">
            <a :href="acc.wx" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:wechat" class="h-4 w-4 text-[#07C160]" />
            </a>
          </span>
          <span v-if="acc.dy">
            <a :href="acc.dy" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:tiktok" class="h-4 w-4" :class="[
                theme === 'light' ? 'text-gray-900' : theme === 'spring-festival' ? 'text-amber-200' : 'text-white'
              ]" />
            </a>
          </span>
          <span v-if="acc.xhs">
            <a :href="acc.xhs" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="ri:book-2-fill" class="h-4 w-4 text-[#FE2C55]" />
            </a>
          </span>
          <span v-if="acc.wb">
            <a :href="acc.wb" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:sinaweibo" class="h-4 w-4 text-[#E6162D]" />
            </a>
          </span>
          <span v-if="acc.bl">
            <a :href="acc.bl" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:bilibili" class="h-4 w-4 text-[#00A1D6]" />
            </a>
          </span>
          <span v-if="acc.zh">
            <a :href="acc.zh" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="ri:zhihu-fill" class="h-4 w-4 text-[#0084FF]" />
            </a>
          </span>
          <span v-if="acc.f">
            <a :href="acc.f" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:facebook" class="h-4 w-4 text-[#1877F2]" />
            </a>
          </span>
          <span v-if="acc.t">
            <a :href="acc.t" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:x" class="h-4 w-4" :class="[
                theme === 'light' ? 'text-gray-900' : theme === 'spring-festival' ? 'text-amber-200' : 'text-white'
              ]" />
            </a>
          </span>
          <span v-if="acc.ig">
            <a :href="acc.ig" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:instagram" class="h-4 w-4 text-[#E4405F]" />
            </a>
          </span>
          <span v-if="acc.gh">
            <a :href="acc.gh" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:github" class="h-4 w-4" :class="[
                theme === 'light' ? 'text-gray-900' : theme === 'spring-festival' ? 'text-amber-200' : 'text-white'
              ]" />
            </a>
          </span>
          <span v-if="acc.tg">
            <a :href="acc.tg" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:telegram" class="h-4 w-4 text-[#26A5E4]" />
            </a>
          </span>
          <span v-if="acc.l">
            <a :href="acc.l" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:linkedin" class="h-4 w-4 text-[#0A66C2]" />
            </a>
          </span>
          <span v-if="acc.e">
            <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:gmail" class="h-4 w-4 text-[#EA4335]" />
            </a>
          </span>
          <span v-if="acc.w">
            <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:whatsapp" class="h-4 w-4 text-[#25D366]" />
            </a>
          </span>
          <span v-if="acc.y">
            <a :href="acc.y" target="_blank" rel="noopener noreferrer" class="p-0.5 hover:opacity-80">
              <icon name="simple-icons:youtube" class="h-4 w-4 text-[#FF0000]" />
            </a>
          </span>
        </div>
      </div>

      <!-- 自定义链接 -->
      <div v-if="acc.ls?.length" class="mt-8 px-6">
        <div :class="[
          'rounded-2xl p-4 space-y-2',
          theme === 'light' ? 'bg-gray-50' : theme === 'spring-festival' ? 'bg-red-900/20' : 'bg-gray-800'
        ]">
          <a
            v-for="link in acc.ls"
            :key="link.u"
            :href="link.u"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'flex items-center gap-3 rounded-xl p-3 transition-colors',
              theme === 'light' 
                ? 'hover:bg-gray-100 text-gray-900' 
                : theme === 'spring-festival'
                  ? 'hover:bg-red-900/30 text-amber-100'
                  : 'hover:bg-gray-700 text-white'
            ]"
          >
            <div class="h-6 w-6 shrink-0">
              <template v-if="link.i">
                <img
                  v-if="isImageUrl(link.i)"
                  :src="link.i"
                  class="h-full w-full rounded object-cover"
                  @error="handleImageError(link)"
                />
                <icon
                  v-else-if="link.i.startsWith('simple-icons:') || link.i.startsWith('ph:')"
                  :name="link.i"
                  :class="[
                    'h-full w-full',
                    theme === 'light' ? 'text-gray-600' : theme === 'spring-festival' ? 'text-amber-200' : 'text-gray-300'
                  ]"
                />
                <div v-else :class="[
                  'grid h-full w-full place-items-center rounded',
                  theme === 'light' ? 'bg-gray-100' : theme === 'spring-festival' ? 'bg-red-900/30' : 'bg-gray-700'
                ]">
                  <icon name="ph:link-bold" :class="[
                    'h-4 w-4',
                    theme === 'light' ? 'text-gray-400' : theme === 'spring-festival' ? 'text-amber-200/70' : 'text-gray-300'
                  ]" />
                </div>
              </template>
              <template v-else>
                <img
                  :src="`https://www.google.com/s2/favicons?domain=${getDomain(link.u)}&sz=128`"
                  class="h-full w-full rounded object-cover"
                  @error="() => handleImageError(link)"
                />
              </template>
            </div>
            <div class="flex-1 truncate">
              <div class="truncate font-medium">{{ link.l }}</div>
            </div>
            <icon name="ph:arrow-up-right-bold" :class="[
              'h-4 w-4 shrink-0',
              theme === 'light' ? 'text-gray-400' : theme === 'spring-festival' ? 'text-amber-200/70' : 'text-gray-300'
            ]" />
          </a>
        </div>
      </div>

      <!-- Antenna 标记 -->
      <div class="mt-auto pt-16 px-6 pb-8 text-center">
        <a
          href="https://antenna.incidental.site/"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'text-sm hover:opacity-80',
            theme === 'light' ? 'text-gray-400' : theme === 'spring-festival' ? 'text-amber-200/70' : 'text-gray-500'
          ]"
        >
          Made with Antenna
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  acc: {
    type: Object,
    required: true,
    validator(value) {
      return value !== null && typeof value === 'object';
    }
  },
  theme: {
    type: String,
    default: 'light'
  }
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.wx &&
    !props.acc.dy &&
    !props.acc.xhs &&
    !props.acc.wb &&
    !props.acc.bl &&
    !props.acc.zh &&
    !props.acc.f &&
    !props.acc.t &&
    !props.acc.ig &&
    !props.acc.gh &&
    !props.acc.tg &&
    !props.acc.l &&
    !props.acc.e &&
    !props.acc.w &&
    !props.acc.y
  );
});

const theme = computed(() => props.theme);

function isImageUrl(url) {
  if (!url) return false;
  return url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;
}

function getDomain(url) {
  if (!url) return '';
  try {
    const domain = new URL(url).hostname;
    return domain.replace(/^www\./, '');
  } catch (e) {
    return '';
  }
}

function handleImageError(link) {
  if (link) {
    link.i = '';
  }
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #dbeafe 0%, white 40%, #e0e7ff 100%);
}

.bg-gradient-spring-festival {
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
}

.glow-bg {
  position: relative;
  background: #4338ca;
  overflow: hidden;
}

.glow-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.glow {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  filter: blur(45px);
  opacity: 0.5;
  mix-blend-mode: screen;
}

.glow-1 {
  background: #818cf8;
  animation: float1 12s infinite;
}

.glow-2 {
  background: #6366f1;
  animation: float2 10s infinite;
}

.glow-3 {
  background: #4f46e5;
  animation: float3 14s infinite;
}

.glow-4 {
  background: #7c3aed;
  animation: float4 11s infinite;
}

.glow-5 {
  background: #8b5cf6;
  animation: float5 13s infinite;
}

.glow-6 {
  background: #6d28d9;
  animation: float6 15s infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(10%, 20%) scale(1); }
  50% { transform: translate(60%, 40%) scale(1.1); }
}

@keyframes float2 {
  0%, 100% { transform: translate(40%, 30%) scale(1.1); }
  50% { transform: translate(20%, 50%) scale(1); }
}

@keyframes float3 {
  0%, 100% { transform: translate(70%, 40%) scale(1); }
  50% { transform: translate(30%, 20%) scale(1.2); }
}

@keyframes float4 {
  0%, 100% { transform: translate(20%, 60%) scale(1.1); }
  50% { transform: translate(50%, 30%) scale(1); }
}

@keyframes float5 {
  0%, 100% { transform: translate(50%, 10%) scale(1); }
  50% { transform: translate(10%, 40%) scale(1.2); }
}

@keyframes float6 {
  0%, 100% { transform: translate(30%, 50%) scale(1.2); }
  50% { transform: translate(70%, 10%) scale(1); }
}

/* 新春主题的图标渐变效果 */
:deep(.spring-festival-icon) {
  background: linear-gradient(135deg, #fcd34d 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>