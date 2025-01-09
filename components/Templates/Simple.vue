<template>
  <main class="preview-container min-h-screen w-full space-y-8 pt-12 max-w-lg mx-auto relative">
    <!-- 背景动画光团 -->
    <div class="glow-balls">
      <div class="ball ball-1"></div>
      <div class="ball ball-2"></div>
      <div class="ball ball-3"></div>
    </div>

    <div class="text-center relative z-10">
      <div
        v-if="acc.i"
        class="avatar-container mx-auto"
      >
        <img :src="acc.i" alt="name" class="avatar-image" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-800">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-600">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex flex-wrap justify-center gap-4 max-w-[280px] mx-auto relative z-10 px-4"
    >
      <span v-if="acc.f">
        <a :href="acc.f" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:meta" class="h-6 w-6 text-[#0668E1]" />
        </a>
      </span>
      <span v-if="acc.t">
        <a :href="acc.t" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:twitter" class="h-6 w-6 text-[#1DA1F2]" />
        </a>
      </span>
      <span v-if="acc.ig">
        <a :href="acc.ig" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:instagram" class="h-6 w-6 text-[#E1306C]" />
        </a>
      </span>
      <span v-if="acc.m">
        <a :href="acc.m" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="ph:envelope-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.gh">
        <a :href="acc.gh" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:github" class="h-6 w-6 text-[#181717]" />
        </a>
      </span>
      <span v-if="acc.tg">
        <a :href="acc.tg" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:telegram" class="h-6 w-6 text-[#0088CC]" />
        </a>
      </span>
      <span v-if="acc.l">
        <a :href="acc.l" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:linkedin" class="h-6 w-6 text-[#0077B5]" />
        </a>
      </span>
      <span v-if="acc.e">
        <a :href="'mailto:' + acc.e" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="logos:google-gmail" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.w">
        <a :href="'https://wa.me/' + acc.w" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:whatsapp" class="h-6 w-6 text-[#25D366]" />
        </a>
      </span>
      <span v-if="acc.y">
        <a :href="acc.y" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:youtube" class="h-6 w-6 text-[#FF0000]" />
        </a>
      </span>
      <!-- 微信 -->
      <span v-if="acc.wx">
        <a :href="acc.wx" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:wechat" class="h-6 w-6 text-[#07C160]" />
        </a>
      </span>
      <!-- 抖音 -->
      <span v-if="acc.dy">
        <a :href="acc.dy" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:tiktok" class="h-6 w-6 text-[#69C9FF]" />
        </a>
      </span>
      <!-- 小红书 -->
      <span v-if="acc.xhs">
        <a :href="acc.xhs" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="ri:book-2-fill" class="h-6 w-6 text-[#FE2C55]" />
        </a>
      </span>
      <!-- 微博 -->
      <span v-if="acc.wb">
        <a :href="acc.wb" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:sinaweibo" class="h-6 w-6 text-[#E6162D]" />
        </a>
      </span>
      <!-- 哔哩哔哩 -->
      <span v-if="acc.bl">
        <a :href="acc.bl" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:bilibili" class="h-6 w-6 text-[#00A1D6]" />
        </a>
      </span>
      <!-- 知乎 -->
      <span v-if="acc.zh">
        <a :href="acc.zh" target="_blank" rel="noopener noreferrer" class="p-2 hover:opacity-80">
          <icon name="simple-icons:zhihu" class="h-6 w-6 text-[#0084FF]" />
        </a>
      </span>
    </div>
    <div v-if="acc.ls?.length" class="space-y-4 px-4 relative z-10 max-w-md mx-auto">
      <a
        v-for="link in acc.ls"
        :key="link.u"
        :href="link.u"
        target="_blank"
        rel="noopener noreferrer"
        class="glass-card w-full"
      >
        <span class="flex-1 flex items-center">
          <span v-if="link.i" class="mr-2">
            <template v-if="isImageUrl(link.i)">
              <img 
                :src="link.i" 
                :alt="link.l"
                @error="handleImageError(link)" 
                class="h-6 w-6 rounded-full object-cover"
              />
            </template>
            <template v-else-if="link.i.startsWith('simple-icons:') || link.i.startsWith('ph:')">
              <icon :name="link.i" class="h-6 w-6" />
            </template>
            <template v-else>
              <img 
                :src="`https://www.google.com/s2/favicons?domain=${getDomain(link.u)}&sz=128`"
                :alt="link.l"
                @error="handleImageError(link)" 
                class="h-6 w-6 rounded-full object-cover"
              />
            </template>
          </span>
          <span>{{ link.l }}</span>
        </span>
        <icon name="ph:arrow-up-right-bold" class="h-4 w-4" />
      </a>
    </div>
    <div class="absolute bottom-4 left-0 right-0 text-center z-20">
      <a 
        href="https://antenna-share.incidental.site/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center px-3 py-1.5 text-gray-400/60 text-xs font-light tracking-wider hover:text-gray-400/90 active:text-gray-400/50 transition-colors rounded-full hover:bg-gray-50/50 active:bg-gray-100/50"
      >
        Made with Antenna
      </a>
    </div>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.t &&
    !props.acc.ig &&
    !props.acc.gh &&
    !props.acc.tg &&
    !props.acc.l &&
    !props.acc.e &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.wx &&
    !props.acc.dy &&
    !props.acc.wb &&
    !props.acc.xhs &&
    !props.acc.bl
  );
});

const isImageUrl = (url) => {
  if (!url) return false;
  // 检查是否是图片扩展名
  if (url.match(/\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i)) return true;
  // 检查是否是图片URL（包含图片相关关键词）
  if (url.match(/\/(img|image|photo|avatar|logo)\//i)) return true;
  // 检查是否是常见图片服务
  if (url.match(/(gravatar\.com|avatars\.githubusercontent\.com)/i)) return true;
  return false;
};

const getDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
};

const handleImageError = (link) => {
  // 如果图片加载失败，尝试使用 favicon
  const img = event.target;
  if (!img.src.includes('google.com/s2/favicons')) {
    img.src = `https://www.google.com/s2/favicons?domain=${getDomain(link.u)}&sz=128`;
  }
};

</script>
<style scoped>
.preview-container {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 1) 0%,
    rgba(243, 244, 255, 0.9) 30%,
    rgba(238, 242, 255, 0.9) 50%,
    rgba(230, 230, 255, 0.9) 70%,
    rgba(255, 255, 255, 1) 100%
  );
  overflow: hidden;
  position: relative;
}

/* 头像发光效果 */
.avatar-container {
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}

.avatar-container::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: linear-gradient(45deg, #e2e8f0, #cbd5e1, #e2e8f0);
  border-radius: 50%;
  z-index: -1;
  animation: glowPulse 2s ease-in-out infinite;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
}

/* 毛玻璃卡片效果 */
.glass-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  color: #1f2937;
  transition: all 0.3s ease;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.3);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
  box-shadow: 
    0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.5);
}

.glass-card img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

/* 背景光团 */
.glow-balls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.ball {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  mix-blend-mode: soft-light;
}

.ball-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle at 30% 40%,
    rgba(167, 139, 250, 0.3),
    rgba(139, 92, 246, 0.1)
  );
  top: -200px;
  left: -100px;
  animation: float1 25s ease-in-out infinite;
}

.ball-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at 70% 60%,
    rgba(147, 197, 253, 0.3),
    rgba(96, 165, 250, 0.1)
  );
  top: 40%;
  right: -150px;
  animation: float2 20s ease-in-out infinite;
}

.ball-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle at 50% 50%,
    rgba(196, 181, 253, 0.3),
    rgba(167, 139, 250, 0.1)
  );
  bottom: -100px;
  left: 30%;
  animation: float3 22s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
}

@keyframes float1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(100px, 100px) rotate(45deg);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-100px, -50px) rotate(-30deg);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(50px, -100px) rotate(30deg);
  }
}

/* 文字颜色调整 */
h1 {
  color: #1f2937 !important;
}

p {
  color: #4b5563 !important;
}
</style>
