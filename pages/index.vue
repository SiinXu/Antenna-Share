<template>
  <div class="min-h-full">
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent gradient-animate">
          Antenna
        </h1>
        <div class="flex items-center gap-4">
          <button
            @click="prefillDemoData"
            class="rounded-lg p-2 hover:bg-gray-100 transition-colors"
            :title="isDemo ? '清除示例' : '添加示例数据'"
          >
            <icon 
              :name="isDemo ? 'ph:trash-bold' : 'ph:magic-wand-bold'" 
              class="h-5 w-5 text-gray-600" 
            />
          </button>
          <button
            @click="publish"
            class="rounded-lg px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white transition-colors flex items-center gap-2"
          >
            <span>分享</span>
            <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
    <div class="h-screen grid grid-cols-3 divide-x divide-gray-200">
      <div class="col-span-2 h-screen flex flex-col bg-slate-100">
        <div class="flex-1 overflow-y-auto p-8">
          <app-form-profile
            v-model:name="data.n"
            v-model:desc="data.d"
            v-model:image="data.i"
          />
          <app-form-hr />
          <app-form-social-links
            v-model:wechat="data.wx"
            v-model:douyin="data.dy"
            v-model:xiaohongshu="data.xhs"
            v-model:weibo="data.wb"
            v-model:bilibili="data.bl"
            v-model:zhihu="data.zh"
            v-model:facebook="data.f"
            v-model:twitter="data.t"
            v-model:instagram="data.ig"
            v-model:github="data.gh"
            v-model:telegram="data.tg"
            v-model:linkedin="data.l"
            v-model:email="data.e"
            v-model:whatsapp="data.w"
            v-model:youtube="data.y"
          />
          <app-form-hr />
          <app-form-links v-model="data.ls" />
        </div>
      </div>
      <div class="relative">
        <div class="absolute right-4 top-4 z-10">
          <select 
            v-model="previewTheme"
            class="w-32 rounded-lg border-0 py-1.5 pl-3 pr-10 
                   text-gray-700
                   bg-white/70 backdrop-blur-md backdrop-saturate-150
                   ring-1 ring-blue-200/50 
                   focus:ring-2 focus:ring-blue-400/50
                   hover:ring-blue-300/50 transition-all duration-300
                   sm:text-sm sm:leading-6
                   appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23666666%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_0.5rem_center] bg-[length:1.5em_1.5em] bg-no-repeat
                   shadow-sm"
          >
            <option value="light">默认主题</option>
            <option value="dark">深色主题</option>
            <option value="spring-festival">新春主题</option>
          </select>
        </div>
        <div class="h-screen flex flex-col">
          <div class="flex-1 flex items-center justify-center">
            <app-form-preview :data="data" :theme="previewTheme" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "#app";
import { encodeData } from "../utils/encode";
import AppFormLinks from "../components/AppForm/Links.vue";

const route = useRoute();
const isDemo = ref(false);
const previewTheme = ref('light');

const data = ref({
  n: "",
  d: "",
  i: "",
  wx: "",
  dy: "",
  xhs: "",
  wb: "",
  bl: "",
  zh: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: []
});

const clearData = () => {
  data.value = {
    n: "",
    d: "",
    i: "",
    wx: "",
    dy: "",
    xhs: "",
    wb: "",
    bl: "",
    zh: "",
    f: "",
    t: "",
    ig: "",
    gh: "",
    tg: "",
    l: "",
    e: "",
    w: "",
    y: "",
    ls: []
  };
  isDemo.value = false;
};

const prefillDemoData = () => {
  if (isDemo.value) {
    clearData();
    return;
  }
  
  data.value = {
    n: "Tom Cat",
    d: "I'm Tom, the cat who's always chasing Jerry. Love milk, hate mice (especially Jerry), and enjoy taking naps in the sun. 😺",
    i: "https://i.pinimg.com/originals/dc/bb/b5/dcbbb53331af828812349bf7ffc9b7f5.gif",
    wx: "TomTheCat",
    dy: "https://www.douyin.com/user/TomCat",
    xhs: "https://www.xiaohongshu.com/user/tomcat",
    wb: "https://weibo.com/u/tomcat",
    bl: "https://space.bilibili.com/tomcat",
    zh: "https://www.zhihu.com/people/tomcat",
    f: "https://www.facebook.com/TomandJerry",
    t: "https://twitter.com/TomTheCat",
    ig: "https://www.instagram.com/tomthecat",
    gh: "https://github.com/TomCat",
    tg: "https://t.me/TomTheCat",
    l: "https://linkedin.com/in/tomcat",
    e: "tom@catmail.com",
    w: "+1234567890",
    y: "https://youtube.com/@TomCat",
    ls: [
      {
        l: "Tom & Jerry Official",
        u: "https://www.warnerbros.com/tv/tom-and-jerry"
      },
      {
        l: "My Cat Blog",
        u: "https://tomcat.blog"
      }
    ]
  };
  isDemo.value = true;
};

const publish = () => {
  try {
    const shareData = {
      ...data.value,
      theme: previewTheme.value // 使用当前预览主题
    };
    const encodedData = encodeData(shareData);
    const url = `${window.location.origin}/s/${encodedData}`;
    navigator.clipboard.writeText(url).then(() => {
      alert("链接已复制到剪贴板");
    });
  } catch (error) {
    console.error('Error sharing:', error);
    alert("分享失败，请重试");
  }
};
</script>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animate {
  background-size: 200% auto;
  animation: gradient 3s ease infinite;
}
</style>
