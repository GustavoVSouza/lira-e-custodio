<template>
  <topo />
  <RouterView />
  <rodape />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import rodape from "./components/rodape.vue";
import topo from "@/components/topo.vue";

export default {
  components: {
    rodape,
    topo,
  },
};
</script>
