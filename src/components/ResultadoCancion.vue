<template>
  <div class="results-songs-component">
    <hr style="color: #151618" />
    <section class="layout">
      <div class="grow1"></div>
      <div class="grow2">
        <section class="layoutSectionCards">
          <div v-for="(data, index) in NRelease" :key="index">
            <a :href="data.href" style="text-decoration: none">
              <div
                class="card"
                style="
                  width: 12rem;
                  background-color: #151618;
                  border-color: #151618;
                "
              >
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
            </a>
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
  name: "results-songs-component",
  data() {
    return {
      NRelease: [],
      token: localStorage.token,
      mensaCan: this.$store.state.mensaCan,
    };
  },
  props: {
    msg: String,
  },
  created() {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
        this.mensaCan +
        "&type=track&market=ES&limit=20&offset=5",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        for (let i = 0; i < response.tracks.items.length; i++) {
          NewRelease = {
            name: response.tracks.items[i].name,
            artista: response.tracks.items[i].artists[0].name,
            imagen: response.tracks.items[i].album.images[0].url,
            href: response.tracks.items[i].external_urls.spotify,
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
