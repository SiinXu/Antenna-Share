
<template>
  <div class="min-h-full flex flex-col">
    <!-- 上半部分背景 -->
    <div class="relative">
      <div class="aspect-[2/1]">
        <div class="pattern-overlay absolute inset-0"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#D23F3F]" style="bottom: -2px;"></div>
      </div>
    </div>
    
    <!-- 内容区域 -->
    <div class="flex-1 relative flex flex-col bg-[#D23F3F] text-[#FFE4B5] space-y-6">
      <!-- 头像区域 -->
      <div class="relative -mt-12 mb-16">
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 translate-y-1/2 z-8">
            <div class="relative h-24 w-24 mx-auto">
              <!-- 鞭炮装饰 -->
              <div class="absolute -right-8 -top-4 text-2xl firecracker">
                🧨
              </div>
              <div class="absolute -left-8 top-0 text-2xl firecracker">
                🧨
              </div>

              <div class="avatar-diffuse absolute -inset-4"></div>
              <div class="avatar-ring-outer absolute -inset-2"></div>
              <div class="avatar-ring absolute inset-0"></div>
              <div class="avatar-glow absolute inset-0"></div>
              
              <!-- 闪光装饰 -->
              <div class="fireworks">
                <div class="firework" style="left: -20px; top: -20px; --delay: 0s">✨</div>
                <div class="firework" style="right: -20px; top: -20px; --delay: 1.5s">✨</div>
                <div class="firework" style="left: -20px; bottom: -20px; --delay: 3s">✨</div>
                <div class="firework" style="right: -20px; bottom: -20px; --delay: 4.5s">✨</div>
                <div class="firework" style="left: 50%; top: -20px; transform: translateX(-50%); --delay: 6s">✨</div>
                <div class="firework" style="left: -20px; top: 50%; transform: translateY(-50%); --delay: 7.5s">✨</div>
                <div class="firework" style="right: -20px; top: 50%; transform: translateY(-50%); --delay: 9s">✨</div>
                <div class="firework" style="left: 50%; bottom: -20px; transform: translateX(-50%); --delay: 10.5s">✨</div>
              </div>

              <div class="absolute inset-1">
                <img
                  v-if="acc.i"
                  :src="acc.i"
                  class="h-full w-full rounded-full object-cover"
                  @error="handleImageError(acc)"
                />
                <div v-else class="grid h-full w-full place-items-center rounded-full bg-amber-300">
                  <icon name="ph:user-bold" class="h-12 w-12 text-amber-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 名字和简介 -->
      <div class="text-center px-4 space-y-2">
        <h1 class="text-2xl font-bold">{{ acc.n || '未设置名称' }}</h1>
        <p class="text-sm opacity-90">{{ acc.d || '未设置简介' }}</p>
      </div>

      <!-- 社交媒体链接 -->
      <div
        v-if="!allSocialLinksAreEmpty"
        class="flex flex-wrap justify-center gap-2 px-4"
      >
        <template v-for="(link, platform) in socialLinks" :key="platform">
          <a
            v-if="acc[platform]"
            :href="link.url(acc[platform])"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#FFE4B5] hover:opacity-80 transition-opacity"
          >
            <icon :name="link.icon" class="w-4 h-4" />
          </a>
        </template>
      </div>

      <!-- 自定义链接 -->
      <div v-if="acc.ls?.length" class="px-4 space-y-4">
        <template v-for="(link, index) in acc.ls" :key="index">
          <div class="rounded-lg bg-white/15 backdrop-blur-md hover:opacity-80 transition-opacity">
            <a
              :href="link.u"
              target="_blank"
              rel="noopener noreferrer"
              class="block p-4"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 shrink-0">
                  <img
                    :src="`https://www.google.com/s2/favicons?domain=${getDomain(link.u)}&sz=128`"
                    class="h-full w-full rounded object-cover"
                    @error="() => handleImageError(link)"
                  />
                </div>
                <span class="flex-1 text-[#FFE4B5]">{{ link.l }}</span>
                <icon name="heroicons:arrow-up-right-20-solid" class="w-5 h-5 text-[#FFE4B5]" />
              </div>
            </a>
          </div>
        </template>
      </div>

      <!-- Made with Antenna -->
      <div class="mt-auto pt-16 px-6 pb-8 text-center">
      <div class="absolute inset-x-0 bottom-4 text-center">
        <a
          href="https://antenna.incidental.site/"
          target="_blank"
          rel="noopener noreferrer"
          :class="[
            'text-sm hover:opacity-80',
            theme === 'light' ? 'text-gray-400' : theme === 'spring-festival' ? 'text-amber-200/70' : 'text-[#FFE4B5]'
          ]"
        >
          Made with Antenna
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true
  }
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
</script>

<style scoped>
.pattern-overlay {
  background-image: url('/src/spring.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
}

.avatar-diffuse {
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 215, 0, 0.12) 0%,
    rgba(255, 165, 0, 0.08) 30%,
    rgba(255, 165, 0, 0.04) 50%,
    transparent 70%
  );
  filter: blur(8px);
  animation: diffuse 4s ease-in-out infinite;
}

@keyframes diffuse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: scale(1.15);
    opacity: 0.8;
  }
}

.avatar-ring {
  border-radius: 50%;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff0, #fff0), linear-gradient(to right, rgba(255, 215, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 215, 0, 0.8));
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: rotate 6s linear infinite;
}

.avatar-ring-outer {
  border-radius: 50%;
  border: 1px solid transparent;
  background-image: linear-gradient(#fff0, #fff0), linear-gradient(to right, rgba(255, 215, 0, 0.6), rgba(255, 165, 0, 0.6), rgba(255, 215, 0, 0.6));
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: rotate-reverse 8s linear infinite;
  opacity: 0.5;
}

.avatar-glow {
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.2), transparent 70%);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.3;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.firecracker {
  animation: swing 2s ease-in-out infinite;
}

@keyframes swing {
  0%, 100% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
}

.fireworks {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
}

.firework {
  position: absolute;
  opacity: 0;
  font-size: 16px;
  animation: sparkle 2s ease-in-out infinite;
  animation-delay: var(--delay);
  color: #FFE4B5;
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>