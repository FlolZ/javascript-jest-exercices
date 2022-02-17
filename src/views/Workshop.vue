<template>
  <div class="home">
    <Algo/>
  </div>
</template>

<script lang="ts">
import Algo from "@/components/Algo.vue";
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  components: {
    Algo,
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
