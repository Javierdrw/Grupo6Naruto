const app = Vue.createApp({
  data() {
    return {
      character: {
        name: '',
        status: '',
        sex: '',
        jutsu: '',
        weight: '',
        uniqueTraits: '',
        image: ''
      }
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id');
    
    if (characterId) {
      this.fetchCharacterDetails(characterId);
    } else {
      console.error('ID de personaje no encontrado en el URL.');
    }
  },
  methods: {
    async fetchCharacterDetails(id) {
      try {
        const response = await fetch(`https://narutodb.xyz/api/character/${id}`);
        const data = await response.json();

        this.character = {
          name: data.name || 'Información no disponible',
          status: data.status || 'Información no disponible',
          sex: data.sex || 'Información no disponible',
          jutsu: Array.isArray(data.jutsu) && data.jutsu.length > 0 ? data.jutsu : 'Información no disponible',
          weight: data.weight || 'Información no disponible',
          uniqueTraits: data.unique_traits || 'Información no disponible',
          image: data.images?.[0] || 'default.jpg'
        };
      } catch (error) {
        console.error('Error al obtener los detalles del personaje:', error);
      }
    }
  }
});

app.mount('#app');
