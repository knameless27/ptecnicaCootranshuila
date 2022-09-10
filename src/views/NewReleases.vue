<template>
  <div class="newReleases">
    <h1 class="titulo">New Releases</h1>
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
  background-color: #151618;
}

.titulo {
  color: white;
}
</style>
