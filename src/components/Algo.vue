<template>
  <div style="padding: 40px">
    <div
      justify="center"
      align="center"
      style="
        padding: 50px;

        font-size: 30px;
      "
    >
      Javascript funny moments
    </div>
    <v-card style="padding: 80px">
      <v-col class="mb-15" v-for="(item, i) in items" :key="item.title">
        <v-row>
          <v-avatar color="indigo" size="36">
            <span class="white--text text-h5">{{i+1}}</span>
          </v-avatar>
          <h2 class="ml-3">{{ item.title }}</h2>
        </v-row>
        <v-row>
          <h3>
            {{ item.statement }}
          </h3>
        </v-row>
        <v-row v-if="item.example">
          <p>{{ item.example }}</p>
        </v-row>
        <v-row> Résultat:</v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script lang="ts">
import { EXERCICES } from "./EXERCICES";
import {
  computed,
  defineComponent,
  reactive,
  toRefs,
} from "@vue/composition-api";

export default defineComponent({
  props: {},
  setup(props) {
    const data = reactive({
      items: EXERCICES
    });

    const exerciceResult = computed(() => {
      return 'toto';
    });


    return {
      ...toRefs(data),
      exerciceResult
    };
  },
});
</script>
<style scoped lang="scss"></style>
