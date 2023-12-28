<template>
  <div class="flex justify-between items-center p-6">
    <h1 class="text-3xl font-semibold">{{ $route.meta.header }}</h1>
    <div class="flex flex-row gap-6 items-center">
      <div class="relative">
        <svg
          v-if="true"
          class="absolute top-[-14px] right-[-12px]"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 16 16"
        >
          <path fill="#6F8DE8" d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" />
        </svg>
        <img src="/public/assets/images/bill.svg" alt="" />
      </div>
      <div class="flex flex-row items-center cursor-pointer">
        <div class="avatar">
          <div class="w-14 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="m7 10l5 5l5-5z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
