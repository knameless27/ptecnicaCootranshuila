<template>
  <div class="artist-profile">
    <h1 class="titulo">Artistas Encontrados</h1>
    <p>flecha 1</p>
    <p>flecha 2</p>
    <releases-comp />
  </div>
</template>

<script>
import ReleasesComp from "@/components/ReleasesComponent.vue";

export default {
  name: "newReleases",
  components: {
    ReleasesComp,
  },
  created() {},
};
</script>

<style>
.newReleases {
  padding-top: 10rem;
  background-color: #151618;
}

.titulo {
  color: white;
}
</style>
