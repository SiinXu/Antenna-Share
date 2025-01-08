<template>
  <main class="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
    <div class="text-center">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
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
      class="flex items-center justify-center flex-wrap gap-2"
    >
      <span v-if="acc.f" class="p-1">
        <a :href="acc.f" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:meta" class="h-6 w-6 text-[#0668E1]" />
        </a>
      </span>
      <span v-if="acc.t" class="p-1">
        <a :href="acc.t" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:twitter" class="h-6 w-6 text-[#1DA1F2]" />
        </a>
      </span>
      <span v-if="acc.ig" class="p-1">
        <a :href="acc.ig" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:instagram" class="h-6 w-6 text-[#E1306C]" />
        </a>
      </span>
      <span v-if="acc.m" class="p-1">
        <a :href="acc.m" target="_blank" rel="noopener noreferrer">
          <icon name="ph:envelope-duotone" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.gh" class="p-1">
        <a :href="acc.gh" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:github" class="h-6 w-6 text-[#181717]" />
        </a>
      </span>
      <span v-if="acc.tg" class="p-1">
        <a :href="acc.tg" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:telegram" class="h-6 w-6 text-[#0088CC]" />
        </a>
      </span>
      <span v-if="acc.l" class="p-1">
        <a :href="acc.l" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:linkedin" class="h-6 w-6 text-[#0077B5]" />
        </a>
      </span>
      <span v-if="acc.e" class="p-1">
        <a :href="'mailto:' + acc.e" rel="noopener noreferrer">
          <icon name="logos:google-gmail" class="h-6 w-6" />
        </a>
      </span>
      <span v-if="acc.w" class="p-1">
        <a :href="'https://wa.me/' + acc.w" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:whatsapp" class="h-6 w-6 text-[#25D366]" />
        </a>
      </span>
      <span v-if="acc.y" class="p-1">
        <a :href="acc.y" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:youtube" class="h-6 w-6 text-[#FF0000]" />
        </a>
      </span>
      <!-- 微信 -->
      <span v-if="acc.wx" class="p-1">
        <a :href="acc.wx" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:wechat" class="h-6 w-6 text-[#07C160]" />
        </a>
      </span>
      <!-- 抖音 -->
      <span v-if="acc.dy" class="p-1">
        <a :href="acc.dy" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:tiktok" class="h-6 w-6 text-[#69C9FF]" />
        </a>
      </span>
      <!-- 小红书 -->
      <span v-if="acc.xhs" class="p-1">
        <a :href="acc.xhs" target="_blank" rel="noopener noreferrer">
          <icon name="ri:book-2-fill" class="h-6 w-6 text-[#FE2C55]" />
        </a>
      </span>
      <!-- 微博 -->
      <span v-if="acc.wb" class="p-1">
        <a :href="acc.wb" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:sinaweibo" class="h-6 w-6 text-[#E6162D]" />
        </a>
      </span>
      <!-- 哔哩哔哩 -->
      <span v-if="acc.bl" class="p-1">
        <a :href="acc.bl" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:bilibili" class="h-6 w-6 text-[#00A1D6]" />
        </a>
      </span>
      <!-- 知乎 -->
      <span v-if="acc.zh" class="p-1">
        <a :href="acc.zh" target="_blank" rel="noopener noreferrer">
          <icon name="simple-icons:zhihu" class="h-6 w-6 text-[#0084FF]" />
        </a>
      </span>
    </div>
    <ul class="space-y-2">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
    </ul>
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
    !props.acc.xhs
  );
});

const showQRCode = (wechatId) => {
  alert(`微信公众号：${wechatId}\n请扫描二维码关注`);
};
</script>
<style scoped></style>
