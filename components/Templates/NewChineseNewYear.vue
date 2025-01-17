<template>
  <div class="min-h-full flex flex-col">
    <!-- 上半部分背景 -->
    <div class="relative">
      <div class="aspect-[2/1]">
        <!-- 基础背景 -->
        <div class="absolute inset-0 bg-gradient-to-b from-red-800 via-red-700 to-[#8B0000]">
          <!-- 花纹图案 -->
          <div class="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-20"></div>
          <!-- 渐变过渡 -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#8B0000] via-transparent to-transparent opacity-50"></div>
        </div>
        
        <!-- 装饰元素 -->
        <div class="absolute inset-0 overflow-hidden">
          <!-- 左上角灯笼 -->
          <div class="absolute left-4 top-4 text-2xl animate-bounce-slow">🏮</div>
          <!-- 右上角灯笼 -->
          <div class="absolute right-4 top-4 text-2xl animate-bounce-slow" style="animation-delay: 1.5s">🏮</div>
          <!-- 飘动的星星 -->
          <div class="absolute inset-0">
            <div class="absolute left-1/4 top-1/3 text-xl animate-twinkle" style="animation-delay: 0s">✨</div>
            <div class="absolute left-2/3 top-1/4 text-xl animate-twinkle" style="animation-delay: 1s">✨</div>
            <div class="absolute left-1/2 top-1/2 text-xl animate-twinkle" style="animation-delay: 2s">✨</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 内容区域 -->
    <div class="flex-1 relative flex flex-col bg-[#8B0000] text-[#FFD700] pb-16">
      <!-- 头像区域 -->
      <div class="relative -mt-12">
        <div class="w-24 h-24 mx-auto rounded-full overflow-hidden relative">
          <img 
            v-if="acc.i" 
            :src="acc.i" 
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full bg-yellow-400 flex items-center justify-center">
            <icon name="ph:user-bold" class="w-12 h-12 text-red-800" />
          </div>
        </div>
      </div>

      <!-- 名片信息 -->
      <div class="text-center px-6 mt-6">
        <h2 class="text-2xl font-bold text-yellow-300">
          {{ acc.n || '未设置名称' }}
        </h2>
        <p class="mt-2 text-yellow-200/80">
          {{ acc.d || '未设置简介' }}
        </p>
      </div>

      <!-- 社交媒体链接 -->
      <div
        v-if="!allSocialLinksAreEmpty"
        class="flex flex-wrap justify-center gap-2 px-4 mt-6"
      >
        <template v-for="(link, platform) in socialLinks" :key="platform">
          <a
            v-if="acc[platform]"
            :href="link.url(acc[platform])"
            target="_blank"
            rel="noopener noreferrer"
            class="text-yellow-300 hover:opacity-80 transition-opacity"
          >
            <icon :name="link.icon" class="w-5 h-5" />
          </a>
        </template>
      </div>

      <!-- 自定义链接 -->
      <div v-if="acc.ls?.length" class="px-6 space-y-4 mt-6">
        <template v-for="(link, index) in acc.ls" :key="index">
          <div v-if="link.u">
            <a
              :href="link.u"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full p-4 rounded-lg bg-yellow-300/10 hover:bg-yellow-300/20 transition-colors"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 shrink-0">
                  <img
                    v-if="link.i"
                    :src="link.i"
                    class="h-full w-full rounded object-cover"
                    @error="() => handleImageError(link)"
                  />
                  <img
                    v-else
                    :src="`https://www.google.com/s2/favicons?domain=${getDomain(link.u)}&sz=128`"
                    class="h-full w-full rounded object-cover"
                    @error="() => handleImageError(link)"
                  />
                </div>
                <span class="flex-1 text-[#FFD700]">{{ link.l }}</span>
                <icon name="heroicons:arrow-up-right-20-solid" class="w-5 h-5 text-[#FFD700]" />
              </div>
            </a>
          </div>
        </template>
      </div>

      <!-- Made with Antenna -->
      <div class="absolute bottom-6 left-0 right-0 text-center">
        <a
          href="https://antenna.incidental.site/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-yellow-200/70 hover:opacity-80 inline-block"
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
    required: true
  },
  theme: {
    type: String,
    default: 'light'
  }
});

const socialLinks = {
  wx: { icon: 'simple-icons:wechat', url: (url) => url },
  dy: { icon: 'simple-icons:tiktok', url: (url) => url },
  xhs: { icon: 'ri:book-2-fill', url: (url) => url },
  wb: { icon: 'simple-icons:sinaweibo', url: (url) => url },
  bl: { icon: 'simple-icons:bilibili', url: (url) => url },
  zh: { icon: 'ri:zhihu-fill', url: (url) => url },
  f: { icon: 'simple-icons:facebook', url: (url) => url },
  t: { icon: 'simple-icons:x', url: (url) => url },
  ig: { icon: 'simple-icons:instagram', url: (url) => url },
  gh: { icon: 'simple-icons:github', url: (url) => url },
  tg: { icon: 'simple-icons:telegram', url: (url) => url },
  l: { icon: 'simple-icons:linkedin', url: (url) => url },
  e: { icon: 'simple-icons:gmail', url: (url) => `mailto:${url}` },
  w: { icon: 'simple-icons:whatsapp', url: (url) => `https://wa.me/${url}` },
  y: { icon: 'simple-icons:youtube', url: (url) => url },
};

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

function getDomain(url) {
  if (!url) return '';
  try {
    return new URL(url).hostname;
  } catch (e) {
    return url;
  }
}

function handleImageError(link) {
  if (link) {
    link.i = '';
  }
}
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 2s ease-in-out infinite;
}
</style>
