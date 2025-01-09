<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100">
      <div class="flex-1 overflow-y-auto p-8">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
        />
        <app-form-hr />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
          v-model:wechat="data.wx"
          v-model:douyin="data.dy"
          v-model:weibo="data.wb"
          v-model:xiaohongshu="data.xhs"
        />
        <app-form-hr />
        <app-form-links v-model="data.ls" />
      </div>
      <div class="border-t bg-white flex items-center">
        <button
          @click="isDemo ? clearData() : prefillDemoData()"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white"
          :class="isDemo ? 'text-red-600' : 'text-slate-700'"
        >
          <span> {{ isDemo ? '清除示例' : '添加示例数据' }} </span>
          <icon :name="isDemo ? 'ph:trash-bold' : 'mdi:code-json'" class="h-4 w-4" />
        </button>
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700"
        >
          <span> 分享 </span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4" />
        </button>
      </div>
    </div>
    <app-form-preview :data="data" />
  </div>
</template>

<script setup>
import { encodeData } from "../utils/transformer";
const isDemo = ref(false);

const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  wx: "",
  dy: "",
  wb: "",
  xhs: "",
  ls: [],
});

const clearData = () => {
  data.value = {
    n: "",
    d: "",
    i: "",
    f: "",
    t: "",
    ig: "",
    gh: "",
    tg: "",
    l: "",
    e: "",
    w: "",
    y: "",
    wx: "",
    dy: "",
    wb: "",
    xhs: "",
    ls: [],
  };
  isDemo.value = false;
};

const prefillDemoData = () => {
  data.value = {
    n: "张三",
    d: "你好，我是张三，一个热爱生活的人",
    i: "https://avatars.githubusercontent.com/u/583231",
    f: "https://www.facebook.com/zhangsan",
    t: "https://twitter.com/zhangsan",
    ig: "https://www.instagram.com/zhangsan",
    e: "zhangsan@example.com",
    gh: "https://github.com/zhangsan",
    tg: "https://t.me/zhangsan",
    w: "+8613800138000",
    y: "https://youtube.com/@zhangsan",
    l: "https://linkedin.com/in/zhangsan",
    wx: "wxid_zhangsan",
    dy: "https://www.douyin.com/user/zhangsan",
    wb: "https://weibo.com/u/zhangsan",
    xhs: "https://www.xiaohongshu.com/user/zhangsan",
    ls: [
      {
        l: "我的博客",
        u: "https://blog.zhangsan.com",
      },
      {
        l: "我的作品",
        u: "https://portfolio.zhangsan.com",
      },
    ],
  };
  isDemo.value = true;
};

const publish = () => {
  const encodedData = encodeData(data.value);
  const url = `${window.location.origin}/1?data=${encodeURIComponent(encodedData)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("链接已复制到剪贴板");
  });
};
</script>
