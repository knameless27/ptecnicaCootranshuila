<template>
  <div class="buscador-artista">
    <div class="group">
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path
            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
          ></path>
        </g>
      </svg>
      <input
        type="text"
        placeholder="Buscar Artista"
        v-model="message"
        v-on:keyup.enter="
          $store.commit('misajeArt', message), (message = ''), song()
        "
        class="input"
      /><button
        style="border-radius: 50%"
        v-on:click="$store.commit('misajeArt', message), (message = ''), song()"
      >
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuscadorArtista",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    song() {
      this.$router.push("/artists-found");
    },
    submitxd() {
      return console.log(this.message);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* From uiverse.io by @alexruix */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 260px;
}

.input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 4px;
  outline: none;
  background-color: #323235;
  color: white;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #706f75;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(234, 76, 137, 0.4);
  background-color: #323235;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
}
</style>
