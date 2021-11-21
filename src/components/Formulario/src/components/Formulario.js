
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data() {
    return {
      url: 'https://617f1cd12ff7e600174bd9c9.mockapi.io/usuarios',
      formData: this.getInicialData(),
      formState: {},
      nombreMinLength: 3,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
      datos: [],
    }
  },
  computed: {
  },
  mounted() {
    this.getInicialData()
  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: '',
        email: '',
      }
    },
    async postUsuario() {
      let usuario = { ...this.formData }
      try {
        let respuesta = await this.axios.post(this.url, usuario, { 'content-type': 'application/json' })
        let usuarioRecibido = respuesta.data
        console.log('AXIOS POST USUARIO', usuarioRecibido)
        this.datos.push(usuarioRecibido)
        this.formData = this.getInicialData()
        this.formState._reset()
      }
      catch (error) {
        console.error('ERROR AXIOS POST USUARIO', error)
      }
    },
  }
}


