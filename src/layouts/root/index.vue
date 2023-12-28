<template>
  <main class="bg-secondary-100 h-screen">
    <div class="flex flex-row">
      <SideNav :navItems="NAV_ITEMS" />
      <div class="w-full">
        <Header />
        <RouterView />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import SideNav from "./components/SideNav.vue";
import { NAV_ITEMS } from "./constants/index.ts";
</script>
