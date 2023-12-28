<template>
  <section>
    <Form class="flex flex-col gap-2 items-center">
      <h1 class="text-3xl font-semibold mb-5">Login to your account</h1>
      <TextInput
        name="email"
        v-model="userData.userName"
        placeholder="Email Address"
      />
      <TextInput
        name="password"
        placeholder="Password"
        type="password"
        v-model="userData.password"
      />
      <Button
        @click="
          () => {
            console.log(userData);
          }
        "
        label="Login"
        class="w-full rounded-sm mt-2"
      />
    </Form>
  </section>
</template>

<script setup lang="ts">
import TextInput from "@/components/TextInput.vue";
import Button from "@/components/Button.vue";
import { reactive } from "vue";
import { Form } from "vee-validate";
// ------------ hooks -------------
const userData = reactive({
  userName: "",
  password: "",
});
</script>
