<template>
  <main class="preview-container min-h-screen w-full space-y-8 pt-12 max-w-lg mx-auto relative">
    <!-- 背景动画光团 -->
    <div class="glow-balls">
      <div class="ball ball-1"></div>
      <div class="ball ball-2"></div>
      <div class="ball ball-3"></div>
    </div>

    <div class="text-center relative z-10">
      <div class="relative mx-auto" :class="acc.i ? 'w-32 h-32' : 'w-24 h-24'">
        <!-- 渐变光圈动效 -->
        <div v-if="acc.i" class="absolute inset-[-12px] rounded-full">
          <div class="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 opacity-60 blur-xl animate-gradient-x"></div>
        </div>
        <div v-if="acc.i" class="absolute inset-[-2px] rounded-full animate-spin-slow">
          <div class="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>
        </div>
        <!-- 头像 -->
        <div class="absolute inset-0 rounded-full overflow-hidden bg-white shadow-lg">
          <img
            v-if="acc.i"
            :src="acc.i"
            :alt="acc.n"
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
            <icon name="ph:user-duotone" class="w-12 h-12 text-gray-400" />
          </div>
        </div>
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
      class="flex flex-wrap justify-center gap-1 mx-8 relative z-10 py-1"
    >
      <!-- 中国社交媒体 -->
      <span v-if="acc.wx">
        <a :href="acc.wx" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:wechat" class="h-5 w-5 text-[#07C160]" />
        </a>
      </span>
      <span v-if="acc.dy">
        <a :href="acc.dy" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:tiktok" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.xhs">
        <a :href="acc.xhs" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="ri:book-2-fill" class="h-5 w-5 text-[#FE2C55]" />
        </a>
      </span>
      <span v-if="acc.wb">
        <a :href="acc.wb" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:sinaweibo" class="h-5 w-5 text-[#E6162D]" />
        </a>
      </span>
      <span v-if="acc.bl">
        <a :href="acc.bl" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:bilibili" class="h-5 w-5 text-[#00A1D6]" />
        </a>
      </span>
      <span v-if="acc.zh">
        <a :href="acc.zh" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:zhihu" class="h-5 w-5 text-[#0084FF]" />
        </a>
      </span>

      <!-- 国际社交媒体 -->
      <span v-if="acc.f">
        <a :href="acc.f" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:meta" class="h-5 w-5 text-[#0668E1]" />
        </a>
      </span>
      <span v-if="acc.t">
        <a :href="acc.t" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:x" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.ig">
        <a :href="acc.ig" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:instagram" class="h-5 w-5 text-[#E1306C]" />
        </a>
      </span>
      <span v-if="acc.gh">
        <a :href="acc.gh" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:github" class="h-5 w-5 text-[#181717]" />
        </a>
      </span>
      <span v-if="acc.tg">
        <a :href="acc.tg" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:telegram" class="h-5 w-5 text-[#0088CC]" />
        </a>
      </span>
      <span v-if="acc.l">
        <a :href="acc.l" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:linkedin" class="h-5 w-5 text-[#0077B5]" />
        </a>
      </span>
      <span v-if="acc.e">
        <a :href="'mailto:' + acc.e" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="logos:google-gmail" class="h-5 w-5" />
        </a>
      </span>
      <span v-if="acc.w">
        <a :href="'https://wa.me/' + acc.w" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:whatsapp" class="h-5 w-5 text-[#25D366]" />
        </a>
      </span>
      <span v-if="acc.y">
        <a :href="acc.y" target="_blank" rel="noopener noreferrer" class="p-1.5 hover:opacity-80">
          <icon name="simple-icons:youtube" class="h-5 w-5 text-[#FF0000]" />
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
    !props.acc.bl &&
    !props.acc.zh
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
  margin: 0 auto;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
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

/* 添加渐变动画 */
@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-x {
  animation: gradient-x 8s ease infinite;
  background-size: 200% 200%;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

@keyframes gradientXY {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-xy {
  animation: gradientXY 3s ease infinite;
  background-size: 200% 200%;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
  transform-box: fill-box;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>