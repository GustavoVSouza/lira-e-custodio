<template>
  <header class="bg-[#04070c]">
    <div class="editHeader text-white text-center font-montserrat">
      <h1 class="caixa text-3xl md:text-4xl lg:text-5xl">LIRA & CUSTÓDIO</h1>
      <h2 class="caixa2 text-sm md:text-base lg:text-lg">SOCIEDADE DE ADVOGADOS</h2>
    </div>
  </header>
  <nav class="bg-[#997F61] font">
    <ul class="flex gap-[3em] justify-center items-center py-2 flex-wrap">
      <li>
        <RouterLink class="text-white tracking-[.3em] py-2 text-md" to="/">home</RouterLink>
      </li>
      <li>
        <RouterLink class="text-white tracking-[.3em] py-2 text-md" to="/escritorio">o escritório</RouterLink>
      </li>
      <li>
        <RouterLink class="text-white tracking-[.3em] py-2 text-md" to="/advogados">advogados</RouterLink>
      </li>
      <li>
        <RouterLink class="text-white tracking-[.3em] py-2 text-md" to="/atuacoes">atuações</RouterLink>
      </li>
      <li>
        <RouterLink class="text-white tracking-[.3em] py-2 text-md disabled" to="/publicacoes">publicações</RouterLink>
      </li>
      <li>
        <RouterLink class="text-white tracking-[.3em] py-2 text-md" to="/contatos">contato</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "Topo",
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.font {
  font-family: 'Dosis', sans-serif;
}

.caixa {
  letter-spacing: 10px;
  padding: 55px 0px 52px 0px;
  font-size: 2em;
}

.caixa2 {
  position: relative;
  width: 365px;	
  letter-spacing: 8px;
  bottom: 1.5em;
  padding: 15px 0px;
  margin: 0 auto;
  font-size: .7em;
  border-top: 2px solid rgb(153, 127, 97);
  border-bottom: 2px solid rgb(153, 127, 97);
}

@media screen and (max-width: 480px) {
  .caixa2 {
    width: auto;
  }
}
.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
