<template>
  <div class="profile-a">
    <section class="layout">
      <div class="sidebar">
        <section class="layoutSideBar">
          <div class="headerSideBar">
            <img :src="imagen" alt="" style="border-radius: 0%" />
            <h4>{{ name }}</h4>
          </div>
          <div class="mainSideBar">
            <h5>About</h5>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              modi voluptatum veritatis. Libero quasi vel fugit dignissimos
              placeat officia nulla fuga molestias unde a dolor, suscipit
              maiores, voluptatum, doloremque excepturi?
            </p>
            <hr />
          </div>
          <div class="footerSideBar">
            <h5>Similar a {{ name }}</h5>
            <img
              src="@/assets/spotifyLogo.jpeg"
              alt=""
              style="border-radius: 50%"
            />
          </div>
        </section>
      </div>
      <div class="body">
        <section class="layoutBody">
          <div class="headerBody">
            <section class="layoutBdyH">
              <div><h5>Albums</h5></div>
              <div></div>
              <div class="grow1BdyH">
                <img src="@/assets/flecha-correcta.png" alt="" />
                <img
                  src="@/assets/flecha-correcta.png"
                  alt=""
                  style="transform: scaleX(-1)"
                />
                <img
                  src="@/assets/spotifyLogo.jpeg"
                  alt=""
                  style="border-radius: 50%"
                />
              </div>
            </section>
            <h4>albums</h4>
            <hr />
          </div>
          <div class="mainBody">
            <h5>Most popular tracks</h5>
            <hr />
            <img
              src="@/assets/spotifyLogo.jpeg"
              alt=""
              style="border-radius: 50%"
            />
            <p>datos</p>
            <hr />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "profile-a",
  data() {
    return {
      name: this.$store.state.name,
      imagen: this.$store.state.imagen,
    };
  },
};
</script>

<style></style>
