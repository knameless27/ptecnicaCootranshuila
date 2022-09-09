<template>
  <div class="resultado-artista">
    <img src="@/assets/flecha-correcta.png" alt="" />
    <img
      src="@/assets/flecha-correcta.png"
      alt=""
      style="transform: scaleX(-1)"
    />
    <section class="layout">
      <div class="grow1"></div>
      <div class="grow2">
        <section class="layoutSectionCards">
          <div v-for="(data, index) in NRelease" :key="index">
            <div class="card" style="width: 12rem; background-color: #151618">
              <img
                class="card-img-top"
                :src="data.imagen"
                alt="Card image cap"
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
                <p class="card-text" style="color: #4e4e51">
                  {{ data.artista }}
                </p>
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
//import axios from "axios";
let NewRelease;

export default {
  name: "ResultadoArtista",
  data() {
    return {
      NRelease: [],
    };
  },
  props: {
    msg: String,
  },
  created() {
    fetch(
      "https://api.spotify.com/v1/browse/new-releases?country=co&limit=20&offset=5",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer BQCvspIllu60faaT0HLlrRzFFnPOdrOLvGbJn5O0mOfTaQmGDAyLYqfPCvGLb9rsY8DS1S9o7wclaMaQqT8JtQNIU4NYk4knCglnCemyYT-ntQFthBKU4-qHxH1JuvU1khC8wKXUqBOsKk8XUdSAbUIrJoN8Synpmk46AN5umozfgKmEBXfGF7HCawj3IKGU-c8w6jqiI84Z1IKBeuJNNz2ZYk32PY81vEPttcsQ3YvhFGDUBCM2Ym5eizqM8YBxk34TAQOGJBHWfjU5CIxZMgo405IuCM0hSxHsLuK3YnXVCO1MmLuBInSOkJXwa6snTo4",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response.albums.items);
        for (let i = 0; i < response.albums.items.length; i++) {
          console.log(response.albums.items[i]);
          NewRelease = {
            name: response.albums.items[i].name,
            artista: response.albums.items[i].artists[0].name,
            imagen: response.albums.items[i].images[0].url,
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
