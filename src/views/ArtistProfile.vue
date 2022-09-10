<template>
  <div class="artists-profile">
    <section class="layoutGeneral">
      <div class="sidebarGeneral">
        <section class="layoutLeft">
          <div class="CaraNombre">
            <img :src="imagen" alt="" class="imagenArtista" />
            <hr style="color: #151618" />
            <h4 style="padding-left: 3%">{{ name }}</h4>
          </div>
          <div class="aboutZone">
            <h5>About</h5>
            <hr />
            <p class="lore">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aut hic et doloribus cum praesentium repudiandae libero placeat.
              Dolor mollitia cumque eligendi rem expedita illo aspernatur
              reiciendis temporibus dolorem nihil.
            </p>
            <hr />
          </div>
          <div>
            <div class="Similares">
              <h5>Similar a {{ name }}</h5>
              <section class="layoutSim">
                <div v-for="(data, index) in relatedArtists" :key="index">
                  <img :src="data.imagen" alt="" class="relatedImages" />
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <div class="bodyGeneral">
        <section class="layoutRight">
          <div class="headerRight">
            <section class="layoutTopAlbums">
              <div class="grow1"><h5>Albums</h5></div>
              <div class="grow1">
                <img
                  src="@/assets/flecha-correcta.png"
                  alt=""
                  style="transform: scaleX(-1)"
                />
                <img src="@/assets/flecha-correcta.png" alt="" />
              </div>
              <div class="grow1"></div>
            </section>
          </div>
          <div class="mainRight">
            <section class="layoutAlbums">
              <div v-for="(data, index) in albums" :key="index" class="albumes">
                <img :src="data.imagen" alt="" class="albImagen" />
                <h6>{{ data.name }}</h6>
                <h7 style="color: #3e3f42">{{ data.anno.substr(0, 4) }}</h7>
              </div>
            </section>
            <hr />
          </div>
          <div class="footerRight">
            <h5>Most popular tracks</h5>
            <hr />
            <section class="layoutPTracks">
              <table>
                <td>
                  <div
                    v-for="(data, index) in tracks"
                    :key="index"
                    class="albumesPTracks"
                  >
                    <table class="tablaTracks">
                      <td>
                        <h6>{{ index + 1 }}</h6>
                      </td>
                      <td>
                        <img
                          :src="data.imagen"
                          alt=""
                          class="albImagenPTracks"
                        />
                      </td>
                      <td>
                        <div class="TrackTextos">
                          <h6>{{ data.name }}</h6>
                          <h7 style="color: #3e3f42">{{ data.nameAlb }}</h7>
                        </div>
                      </td>
                      <td>
                        <h7 style="color: #3e3f42">{{ data.duracion }}</h7>
                      </td>
                    </table>
                    <hr />
                  </div>
                </td>
              </table>
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
let tempoRA,
  tempoAlb,
  tempoTrack,
  minutos,
  segundos,
  tempoSecs = 0;
export default {
  name: "artists-profile",
  data() {
    return {
      name: this.$store.state.name,
      imagen: this.$store.state.imagen,
      id: this.$store.state.id,
      relatedArtists: [],
      albums: [],
      tracks: [],
    };
  },
  created() {
    fetch(
      "https://api.spotify.com/v1/artists/" + this.id + "/related-artists",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        for (let i = 0; i < 5; i++) {
          tempoRA = {
            imagen: response.artists[i].images[0].url,
          };
          this.relatedArtists.push(tempoRA);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    fetch(
      "https://api.spotify.com/v1/artists/" +
        this.id +
        "/albums?include_groups=single&market=CO&limit=5&offset=1",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        for (let i = 0; i < 5; i++) {
          tempoAlb = {
            name: response.items[i].name,
            imagen: response.items[i].images[0].url,
            anno: response.items[i].release_date,
          };
          this.albums.push(tempoAlb);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    fetch(
      "https://api.spotify.com/v1/artists/" + this.id + "/top-tracks?market=CO",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        for (let i = 0; i < 5; i++) {
          minutos = parseInt(response.tracks[i].duration_ms / 1000 / 60);
          tempoSecs = response.tracks[i].duration_ms - minutos * 60 * 1000;
          segundos = parseInt(tempoSecs / 1000);
          tempoTrack = {
            name: response.tracks[i].name,
            imagen: response.tracks[i].album.images[0].url,
            nameAlb: response.tracks[i].album.name,
            duracion: minutos + ":" + (segundos < 10 ? "0" : "") + segundos,
          };
          this.tracks.push(tempoTrack);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: white;
}
h5 {
  text-align: left;
}
hr {
  max-width: 30%;
}
.trackTdImg {
  max-width: 60px;
  max-height: 60px;
}
.trackTextos {
  text-align: right;
}
.tablaTracks {
  width: 650px;
}
.layoutPTracks {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(auto-fit, 1px);
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.albumesPTracks {
  text-align: left;
}
.albImagenPTracks {
  width: 60px;
  height: 60px;
  border-radius: 12%;
  border-color: white 1px;
}
.albImagen {
  width: 100%;
  border-radius: 12%;
}
.albumes {
  text-align: left;
}
.layoutAlbums {
  width: 70%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(auto-fit, 1px);
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
.aboutZone {
  max-width: 100%;
  max-height: 10%;
}
.layoutSim {
  width: 366px;
  height: 68px;

  display: flex;
  gap: 16px;
}
.relatedImages {
  border-radius: 50%;
  max-width: 100%;
  max-height: 100%;
}
.Similares {
  text-align: left;
}
.CaraNombre {
  padding-left: 10%;
  color: white;
  text-align: left;
}
.lore {
  text-align: left;
  max-width: 30%;
}
.imagenArtista {
  border-radius: 100%;
  max-width: 180px;
  max-height: 180px;
}
.layoutGeneral {
  width: 1366px;
  height: 768px;

  display: grid;
  grid:
    "sidebar body" 1fr
    / 40% 1fr;
  gap: 8px;
}

.sidebarGeneral {
  grid-area: sidebar;
}
.bodyGeneral {
  padding-right: 0px;
  grid-area: body;
}
.layoutLeft {
  width: 1366px;
  height: 768px;

  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  gap: 8px;
  padding-left: 10%;
}
.layoutRight {
  width: 1366px;
  height: 768px;

  display: grid;
  grid:
    "header" auto
    "main" 1fr
    "footer" 1fr
    / 1fr;
  gap: 8px;
}

.headerRight {
  grid-area: header;
}
.mainRight {
  grid-area: main;
}
.footerRight {
  grid-area: footer;
}
</style>
