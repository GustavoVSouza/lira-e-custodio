<template>
  <footer>
    <section class="p-5 border-top-4 border-solid border-orange">
      <div class="flex flex-wrap gap-16">
        <h2 class="italic inline text-gray-600">
          <p>Rua Coimbra, 61</p>
          <p>Loja: C40, CEP: 03052-030</p>
          <p>Brás | São Paulo – SP</p>
        </h2>
      </div>
      <div class="mt-10">
        <div>
          <h2>+55 11 94028-7351</h2>
        </div>
        <div>
          <h5>custodio@liraecustodio.com.br</h5>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
export default {
  name: "rodape",
};
</script>

<style scoped>
.border-top-4 {
  border-top-width: 1px;
}

.border-solid {
  border-style: solid;
}

.border-orange {
  border-color: rgb(153, 127, 97);
}
</style>
