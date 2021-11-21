export default {
  name: "src-components-Usuarios",
  props: [],
  mounted() {
    this.getUsuarios();
  },
  data() {
    return {
      url: 'https://617f1cd12ff7e600174bd9c9.mockapi.io/usuarios',
      usuarios: [],
    };
  },
  methods: {
    /* --------------------------------------- */
    /*               Then y Catch              */
    /* --------------------------------------- */
    getUsuarios() {
      this.axios(this.url)
        .then(respuesta => {
          let usuarios = respuesta.data
          console.log("AXIOS GET USUARIOS", usuarios)
          this.usuarios = usuarios
        })
        .catch (error => console.error("ERROR AXIOS GET USUARIOS", error))
    },
    /* --------------------------------------- */
    /*                Async y Await            */
    /* --------------------------------------- */
    async deleteUsuario(id) {
      try {
        let respuesta = await this.axios.delete(this.url + "/" + id);
        let usuarioEliminado = respuesta.data;
        console.log("AXIOS DELETE USUARIO", usuarioEliminado);
        let index = this.usuarios.findIndex(
          (usuario) => usuario.id == usuarioEliminado.id
        );
        this.usuarios.splice(index, 1);
      } catch (error) {
        console.error("ERROR AXIOS DELETE USUARIO", error);
      }
    },
  },
}
