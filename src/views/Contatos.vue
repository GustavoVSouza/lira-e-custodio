<template>
  <div>
    <section class="container mx-auto mb-12 p-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div class="contato-card">
          <h2 class="text-xl font-semibold mb-2">Moacir Custódio de Souza</h2>
          <div class="flex items-center mb-2">
            <p class="text-gray-600">custodio@liraecustodio.com.br</p>
          </div>
          <div class="flex items-center">
            <p class="text-gray-600">+55 11 98518-1425</p>
          </div>
        </div>

        <div class="contato-card">
          <h2 class="text-xl font-semibold mb-2">Danilo Porto Silva</h2>
          <div class="flex items-center mb-2">
            <p class="text-gray-600">danilo@liraecustodio.com.br</p>
          </div>
          <div class="flex items-center">
            <p class="text-gray-600">+55 11 98371-6216</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import topo from "@/components/topo.vue";

export default {
  components: {
    topo,
  },
};
</script>

<style scoped>
.container {
  max-width: 960px;
}

.contato-card {
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.contato-card:hover {
  transform: translateY(-4px);
}
</style>
