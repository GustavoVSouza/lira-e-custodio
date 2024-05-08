<template>
  <main>
    <img class="banner" src="../assets/img/imageBannerEdit1.jpg" />
    <section class="content">
      <div class="flex flex-col lg:flex-row gap-5 h-auto py-5">
        <div :class="['blocoCard', { 'text-lg': isLargeScreen }]">
          <p class="text-white fontSerif text-3xl">Nos acompanhe no Instagram:</p>
          <a href="https://www.instagram.com/liraecustodioadvogados/" target="_blank"><img class="iconeInstagram"
              alt="Ícone Instagram" src="@\assets\img\logoInstagram.png"></a>
        </div>
        <div :class="['blocoCard', { 'text-lg': isLargeScreen }]">
          <p class="text-white">{{ dataAtual }}</p>
          <p class="text-white fontSerif text-[2em] leading-normal"><a
              href="https://www.jusbrasil.com.br/noticias/construtora-deve-pagar-dano-moral-por-atraso-na-entrega-de-imovel/1366578070"
              target="_blank">Construtora
              deve pagar dano moral por atraso na entrega de imóvel</a></p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import topo from "@/components/topo.vue";

export default {
  components: {
    topo,
  },

  data() {
    return {
      dataAtual: '',
      isLargeScreen: false,
    }
  },

  methods: {
    adicionaDataAtual() {
      const data = new Date();
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      this.dataAtual = data.toLocaleDateString('pt-BR', options).replace(/\//g, '.');
    },

    verificaTamanhoTela() {
      this.isLargeScreen = window.innerWidth >= 480;
    }
  },

  mounted() {
    this.adicionaDataAtual();
    this.verificaTamanhoTela();

    window.addEventListener('resize', this.verificaTamanhoTela);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.verificaTamanhoTela);
  }
};
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}

main {
  background-color: black;
}

.banner {
  width: 100%;
}

.fontSerif {
  font-family: 'EB Garamond', serif;
  color: rgb(153, 127, 97);
}

.blocoCard {
  padding: 20px;
  color: white;
  background-color: transparent;
  border: 1px solid rgb(153, 127, 97);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  max-width: 260px;
}

.content {
  display: flex;
  justify-content: center;
}

.iconeInstagram {
  width: 30px;
}

@media screen and (min-width: 480px) {
  .iconeInstagram {
    width: 50px;
  }

  .blocoCard {
    min-width: 25em;
    min-height: em;
  }
}


.text-lg {
  font-size: 1.25rem;
}
</style>
