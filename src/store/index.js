import { createStore, createLogger } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      mensaCan: "",
      mensaArt: "",
      name: "",
      imagen: "",
    };
  },
  mutations: {
    misaje(state, mensaxd) {
      state.mensaCan = mensaxd;
    },
    misajeArt(state, mensaxd) {
      state.mensaArt = mensaxd;
    },
    recibirPerfil(state, name) {
      state.name = name;
    },
    recibirPerfilImagen(state, imagen) {
      state.imagen = imagen;
    },
  },
  getters: {},
  pluggins: [createLogger()],
});

// Install the store instance as a plugin
export default store;
