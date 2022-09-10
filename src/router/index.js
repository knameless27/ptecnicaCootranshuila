import { createRouter, createWebHistory } from "vue-router";
import newReleases from "../views/NewReleases.vue";

const routes = [
  {
    path: "/",
    name: "newReleases",
    component: newReleases,
  },
  {
    path: "/artists-profile",
    name: "artists-profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArtistProfile.vue"),
  },
  {
    path: "/artists-found",
    name: "artists-found",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ArtistsFound.vue"),
  },
  {
    path: "/song-found",
    name: "song-found",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SongFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
