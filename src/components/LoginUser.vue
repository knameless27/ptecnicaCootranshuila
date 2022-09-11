<template>
  <div class="login-user"></div>
</template>

<script>
var client_id = "918a7f4dd93342b596a1adcbb2a6a7f1";
var client_secret = "9e06cb03cffa42d8980ef9877d1c357b";

export default {
  name: "LoginUser",
  data() {
    return {};
  },
  methods: {},
  async created() {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    localStorage.token = data.access_token;
    if (localStorage.token === "") {
      location.reload();
    }
  },
};
</script>

<style>
h1 {
  color: white;
}
</style>
