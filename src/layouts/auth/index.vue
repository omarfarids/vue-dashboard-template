<script setup lang="ts">
import { ToggleTheme } from "@/components";
</script>

<template>
  <main>
    <header
      class="relative flex flex-row justify-center items-center p-6 md:p-12"
    >
      <img src="/public/assets/images/login-logo.png" alt="box bank" />
      <ToggleTheme />
    </header>

    <div class="h-[60vh] flex justify-center items-center p-5">
      <RouterView />
    </div>
  </main>
</template>
