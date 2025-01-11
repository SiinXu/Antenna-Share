<template>
  <base-form-section
    title="社交链接"
    description="添加您的社交媒体链接"
  >
    <div class="shadow sm:overflow-hidden sm:rounded-md">
      <div class="grid grid-cols-2 gap-8 bg-white px-4 py-5 sm:p-6">
        <div>
          <label for="facebook" class="block text-sm font-medium text-gray-700"
            >Meta</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:meta-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="facebook"
              id="facebook"
              :value="facebook"
              @input="$emit('update:facebook', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：https://fb.com/elonmusk"
            />
          </div>
        </div>
        <div>
          <label for="twitter" class="block text-sm font-medium text-gray-700"
            >X</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:x-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="twitter"
              id="twitter"
              :value="twitter"
              @input="$emit('update:twitter', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：https://twitter.com/elonmusk"
            />
          </div>
        </div>
        <div>
          <label for="instagram" class="block text-sm font-medium text-gray-700"
            >Instagram</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:instagram-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="instagram"
              id="instagram"
              :value="instagram"
              @input="$emit('update:instagram', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：https://instagram.com/elonmusk"
            />
          </div>
        </div>
        <div>
          <label for="github" class="block text-sm font-medium text-gray-700"
            >Github</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:github-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="github"
              id="github"
              :value="github"
              @input="$emit('update:github', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：https://github.com/elonmusk"
            />
          </div>
        </div>
        <div>
          <label for="telegram" class="block text-sm font-medium text-gray-700"
            >电报</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:telegram-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="telegram"
              id="telegram"
              :value="telegram"
              @input="$emit('update:telegram', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：https://t.me/elonmusk"
            />
          </div>
        </div>
        <div>
          <label for="linkedin" class="block text-sm font-medium text-gray-700"
            >领英</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:linkedin-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="linkedin"
              id="linkedin"
              :value="linkedin"
              @input="$emit('update:linkedin', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：https://linkedin.com/in/elonmusk"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >邮箱</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:envelope-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="email"
              id="email"
              :value="email"
              @input="$emit('update:email', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：elonmusk@gmail.com"
            />
          </div>
        </div>
        <div>
          <label for="youtube" class="block text-sm font-medium text-gray-700"
            >油管</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:youtube-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="youtube"
              id="youtube"
              :value="youtube"
              @input="$emit('update:youtube', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：https://youtube.com/elonmusk"
            />
          </div>
        </div>
        <div>
          <label for="whatsapp" class="block text-sm font-medium text-gray-700"
            >Whatsapp</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:whatsapp-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="whatsapp"
              id="whatsapp"
              :value="whatsapp"
              @input="$emit('update:whatsapp', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：+86 18000000000"
            />
          </div>
        </div>
        <div>
          <label for="wechat" class="block text-sm font-medium text-gray-700"
            >微信</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:wechat-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="wechat"
              id="wechat"
              :value="wechat"
              @input="$emit('update:wechat', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：wxid_123456"
            />
          </div>
        </div>
        <div>
          <label for="douyin" class="block text-sm font-medium text-gray-700"
            >抖音</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:tiktok-logo-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="douyin"
              id="douyin"
              :value="douyin"
              @input="$emit('update:douyin', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：douyin.com/user/123456"
            />
          </div>
        </div>
        <div>
          <label for="weibo" class="block text-sm font-medium text-gray-700"
            >微博</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="simple-icons:sinaweibo" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="weibo"
              id="weibo"
              :value="weibo"
              @input="$emit('update:weibo', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：weibo.com/u/123456"
            />
          </div>
        </div>
        <div>
          <label for="xiaohongshu" class="block text-sm font-medium text-gray-700"
            >小红书</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="ph:book-duotone" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="xiaohongshu"
              id="xiaohongshu"
              :value="xiaohongshu"
              @input="$emit('update:xiaohongshu', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：xiaohongshu.com/user/123456"
            />
          </div>
        </div>
        <div>
          <label for="bilibili" class="block text-sm font-medium text-gray-700"
            >哔哩哔哩</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="simple-icons:bilibili" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="bilibili"
              id="bilibili"
              :value="bilibili"
              @input="$emit('update:bilibili', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：space.bilibili.com/123456"
            />
          </div>
        </div>
        <div>
          <label for="zhihu" class="block text-sm font-medium text-gray-700"
            >知乎</label
          >
          <div class="mt-1 flex rounded-md shadow-sm">
            <span
              class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <icon name="simple-icons:zhihu" class="w-5 h-5" />
            </span>
            <input
              type="search"
              name="zhihu"
              id="zhihu"
              :value="zhihu"
              @input="$emit('update:zhihu', $event.target.value)"
              class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="例如：zhihu.com/people/123456"
            />
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>
<script setup>
const props = defineProps([
  "facebook",
  "twitter",
  "instagram",
  "github",
  "telegram",
  "linkedin",
  "email",
  "youtube",
  "whatsapp",
  "wechat",
  "douyin",
  "weibo",
  "xiaohongshu",
  "bilibili",
  "zhihu"
]);
</script>
