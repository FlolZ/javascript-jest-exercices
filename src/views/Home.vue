<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  components: {
    HelloWorld,
  },
  props: {},
  setup() {
    const data = reactive({});

    return {
      ...toRefs(data),
    };
  },
});
</script>
