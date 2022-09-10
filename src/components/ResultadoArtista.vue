<template>
  <div class="resultado-artista">
    <br />
    <img
      src="@/assets/flecha-correcta.png"
      alt=""
      style="transform: scaleX(-1); padding-right: 80%; align-items: right"
    />
    <img src="@/assets/flecha-correcta.png" alt="" />
    <br />
    <hr style="color: #151618" />
    <section class="layout">
      <div class="grow1"></div>
      <div class="grow2">
        <section class="layoutSectionCards">
          <div
            v-for="(data, index) in NRelease"
            :key="index"
            v-on:click="
              artist(data.name),
                artistImagen(data.imagen),
                artistId(data.id),
                pushArtist()
            "
            style="cursor: pointer"
          >
            <div
              class="card"
              style="width: 12rem; background-color: #151618"
              href="this.$router.push('/song-found')"
            >
              <img
                class="card-img-top"
                :src="data.imagen"
                alt="Card image cap"
                style="width: 14rem; height: 14rem"
              />
              <div
                class="card-body"
                style="
                  background-color: #151618;
                  text-align: left;
                  padding-left: 0rem;
                  color: #d3d3d4;
                "
              >
                <h5 class="card-title">{{ data.name }}</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="grow1"></div>
    </section>
  </div>
</template>

<script>
let NewRelease;

export default {
  name: "resultado-artista",
  data() {
    return {
      NRelease: [],
      token: localStorage.token,
      mensaArt: this.$store.state.mensaArt,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    artist(name) {
      this.$store.commit("recibirPerfil", name);
    },
    artistId(id) {
      this.$store.commit("recibirId", id);
    },
    artistImagen(imagen) {
      this.$store.commit("recibirPerfilImagen", imagen);
    },
    pushArtist() {
      this.$router.push("/artists-profile");
    },
  },
  created() {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
        this.mensaArt +
        "&type=artist&market=ES&limit=20&offset=5",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        for (let i = 0; i < response.artists.items.length; i++) {
          NewRelease = {
            name: response.artists.items[i].name,
            imagen: response.artists.items[i].images[0].url,
            id: response.artists.items[i].id,
          };
          this.NRelease.push(NewRelease);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.newReleases {
  padding-top: 10rem;
  background-color: #151618;
}
.layout {
  width: 100%;

  display: flex;
  gap: 16px;
}

.grow1 {
  flex-grow: 1;
}
.grow2 {
  flex-grow: 4;
}
.layoutSectionCards {
  width: 1366px;
  height: 768px;

  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: repeat(6, 14.5rem);
  gap: 8px;
}
</style>
