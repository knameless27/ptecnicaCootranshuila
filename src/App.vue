<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div class="container px-4 px-lg-5">
      <router-link to="/"
        ><img src="@/assets/spotifyLogo.jpeg" alt=""
      /></router-link>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <section class="layout">
        <div class="grow1"></div>
        <div class="grow1"><buscador-artista /></div>
        <div class="grow1"><buscador-cancion /></div>
      </section>
    </div>
  </nav>
  <h1 style="padding-top: 10rem"></h1>
  <login-user />
  <router-view />
</template>

<script>
import BuscadorArtista from "@/components/BuscadorArtista.vue";
import BuscadorCancion from "@/components/BuscadorCancion.vue";
import LoginUser from "@/components/LoginUser.vue";

export default {
  name: "HomeView",
  components: {
    BuscadorArtista,
    BuscadorCancion,
    LoginUser,
  },
};
</script>

<style lang="scss">
.layout {
  width: 100%;

  display: flex;
  gap: 16px;
}

.grow1 {
  flex-grow: 1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #323235;

    &.router-link-exact-active {
      color: #323235;
    }
  }
}
#mainNav {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  background-color: black;
  transition: background-color 0.2s ease;
}
</style>
