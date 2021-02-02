<template>
  <div class="container">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld :msg="message"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/app/components/HelloWorld.vue';
import { ref, defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const message = ref("Welcome to Your Vue.js + TypeScript App");
    return {
      message
    }
  }
})
</script>
