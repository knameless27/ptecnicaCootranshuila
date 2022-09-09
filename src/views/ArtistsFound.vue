<template>
  <div class="artists-found">
    <h1 class="titulo">Artistas encontrados</h1>
    <resultado-artista />
  </div>
</template>

<script>
import ResultadoArtista from "@/components/ResultadoArtista.vue";

export default {
  name: "ArtistaEncontrado",
  components: {
    ResultadoArtista,
  },
};
</script>

<style>
.artists-found {
  padding-top: 10rem;
  background-color: #151618;
}

.titulo {
  color: white;
}
</style>
