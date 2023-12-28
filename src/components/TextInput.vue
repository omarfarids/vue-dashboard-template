<template>
  <div>
    <div class="relative">
      <Field
        :type="state.type"
        :name="name"
        :rules="(isRequired as any)"
        :placeholder="placeholder"
        class="input input-bordered input-md w-full sm:w-[450px] rounded-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as any).value)"
      />
      <div
        class="absolute right-3 top-[15px] cursor-pointer"
        v-if="type === 'password'"
      >
        <i
          v-if="isPassword === true"
          @click="togglePassword"
          class="pi pi-eye"
        ></i>
        <i v-else @click="togglePassword" class="pi pi-eye-slash"></i>
      </div>
    </div>
    <ErrorMessage class="text-red-500 text-sm p-2" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import "primeicons/primeicons.css";
import { ErrorMessage, Field } from "vee-validate";
// ------------ hooks -------------
const { type = "text" } = defineProps<{
  placeholder: string;
  type?: string;
  modelValue: string;
  name: string;
}>();
const state = reactive({
  type: type || "text",
  isPassword: true,
});

const isPassword = computed(() => state.type === "password");

// ------------ functions --------------
const togglePassword = () => {
  if (state.isPassword === true) {
    state.type = "text";
    state.isPassword = false;
  } else {
    state.type = "password";
    state.isPassword = true;
  }
};

function isRequired(value: string) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}
</script>

<style lang="scss" scoped></style>
