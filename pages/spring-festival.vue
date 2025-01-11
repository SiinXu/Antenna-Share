<template>
  <div class="min-h-full">
    <header class="bg-gradient-to-r from-red-800 to-red-900 shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-tight text-amber-100">
          新春贺卡
        </h1>
        <div class="flex items-center gap-4">
          <button
            @click="prefillDemoData"
            class="rounded-lg p-2 hover:bg-red-800/50 transition-colors"
            :title="isDemo ? '清除示例' : '添加示例数据'"
          >
            <icon 
              :name="isDemo ? 'ph:trash-bold' : 'ph:magic-wand-bold'" 
              class="h-5 w-5 text-amber-200" 
            />
          </button>
          <button
            @click="publish"
            class="rounded-lg px-3 py-2 bg-amber-500 hover:bg-amber-600 text-red-900 transition-colors flex items-center gap-2 font-medium"
          >
            <span>分享贺卡</span>
            <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
    <div class="h-screen grid grid-cols-3 divide-x divide-red-900/20">
      <div class="col-span-2 h-screen flex flex-col bg-gradient-to-br from-red-50 to-amber-50">
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
      <div class="relative bg-gradient-to-br from-red-100 to-amber-100">
        <div class="h-screen flex flex-col">
          <div class="flex-1 flex items-center justify-center">
            <div class="h-[729px] w-[340px] overflow-y-auto rounded-[3rem] ring-8 ring-red-900 overflow-hidden relative">
              <spring-festival-template :acc="data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, navigateTo } from "#app";
import { encodeData } from "../utils/encode";
import AppFormLinks from "../components/AppForm/Links.vue";
import SpringFestivalTemplate from "../components/Templates/SpringFestival.vue";

const route = useRoute();
const isDemo = ref(false);

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

function clearData() {
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
}

function prefillDemoData() {
  if (isDemo.value) {
    clearData();
    return;
  }

  data.value = {
    n: "兔年快乐",
    d: "祝您新春快乐，万事如意！",
    i: "",
    wx: "https://weixin.qq.com/",
    dy: "https://www.douyin.com/",
    xhs: "https://www.xiaohongshu.com/",
    wb: "https://weibo.com/",
    bl: "https://www.bilibili.com/",
    zh: "https://www.zhihu.com/",
    f: "",
    t: "",
    ig: "",
    gh: "",
    tg: "",
    l: "",
    e: "",
    w: "",
    y: "",
    ls: [
      {
        l: "送你一个红包",
        u: "https://example.com/hongbao",
        i: "ph:money-bold"
      },
      {
        l: "新年祝福",
        u: "https://example.com/greetings",
        i: "ph:heart-bold"
      }
    ]
  };
  isDemo.value = true;
}

async function publish() {
  const shareData = {
    ...data.value,
    theme: 'spring-festival'  // 添加主题信息
  };
  const encoded = await encodeData(shareData);
  navigateTo(`/s/${encoded}`);
}
</script>
