<template>
  <div class="SongFound">
    <h1>Canciones Encontradas</h1>
    <resultado-cancion />
  </div>
</template>

<script>
import ResultadoCancion from "@/components/ResultadoCancion.vue";

export default {
  name: "SongFound",
  components: {
    ResultadoCancion,
  },
};
</script>
