<template>
  <section class="lawyers-container">
    <div class="lawyer-card">
      <div class="image-container">
        <img src="../assets/img/custodio.png" alt="Foto de Moacir Custódio de Souza" />
      </div>
      <div class="lawyer-info">
        <h2 class="font-bold">Moacir Custódio de Souza</h2>
        <h3>Sócio</h3>
        <p>Advogado e gestor do escritório, atuando há 13 anos na área Jurídica;</p>
        <p>Formado pela Universidade Cruzeiro do Sul em 2008;</p>
        <p>Pós-graduado em Direito Tributário, pela Universidade Damásio de Jesus-SP.</p>
      </div>
    </div>

    <div class="lawyer-card">
      <div class="image-container">
        <img src="../assets/img/danilo.png" alt="Foto de Danilo Porto Silva" />
      </div>
      <div class="lawyer-info">
        <h2 class="font-bold">Danilo Porto Silva</h2>
        <h3>Advogado associado</h3>
        <p>Atuando há 7 anos na área jurídica;</p>
        <p>Formado pelas Faculdades Metropolitanas Unidas (FMU) em 2015;</p>
        <p>Pós-graduado em Direito Processual Civil, com especializações em Direito Civil, Trabalhista e do Consumidor;
        </p>
      </div>
    </div>
  </section>
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
.lawyers-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
}

.lawyer-card {
  background-color: transparent;
  border: 2px solid rgb(153, 127, 97);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 400px;
  text-align: left;
  transition: all 0.3s ease-in-out;
}

.lawyer-card:hover {
  transform: translateY(-5px);
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.lawyer-card img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.lawyer-info h2 {
  margin-bottom: 10px;
  color: rgb(50, 50, 50);
}

.lawyer-info h3 {
  margin-bottom: 5px;
  color: rgb(100, 100, 100);
}

.lawyer-info p {
  margin-bottom: 10px;
  line-height: 1.5;
  color: rgb(80, 80, 80);
}
</style>
