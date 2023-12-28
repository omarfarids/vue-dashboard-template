<template>
  <div class="bg-white w-0 md:w-[350px] h-screen shadow-lg">
    <div class="p-10">
      <img src="/public/assets/images/login-logo.png" alt="box bank" />
    </div>
    <div class="mt-10">
      <div v-for="item in navItems">
        <RouterLink
          :to="item.path"
          class="flex items-center gap-2 p-4 text-xl font-semibold"
        >
          <i :class="item.icon"></i>
          {{ item.name }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ----------- hooks -------------
defineProps(["navItems"]);

// ----------- functions -------------
</script>

<style scoped>
.router-link-active.router-link-exact-active {
  background: linear-gradient(267deg, #484f63 0%, #14151a 100%);
  color: #fff;
}
</style>
