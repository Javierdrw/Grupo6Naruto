// const app = Vue.createApp({
//   data() {
//     return {
//       character: {
//         name: '',
//         status: '',
//         sex: '',
//         jutsu: [],
//         weight: '',
//         uniqueTraits: '',
//         images: []
//       }
//     };
//   },
//   computed: {
//     characterImage() {
//       return this.character.images.length > 0
//         ? this.character.images[0]
//         : '../assets/imagenes-de-personajes-de-naruto.jpg';
//     }
//   },
  
//   mounted() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const characterId = urlParams.get('id');
    
//     if (characterId) {
//       this.fetchCharacterDetails(characterId);
//     } else {
//       console.error('ID de personaje no encontrado en el URL.');
//     }
//   },
//   methods: {
//     async fetchCharacterDetails(id) {
//       try {
//         const response = await fetch(`https://narutodb.xyz/api/character/${id}`);
//         const data = await response.json();

//         this.character = {
//           name: data.name,
//           status: data.personal?.classification,
//           sex: data.personal?.sex,
//           jutsu: Array.isArray(data.jutsu) && data.jutsu.length > 0 ? data.jutsu : [],
//           weight: data.weight ,
//           uniqueTraits: data.unique_traits ,
//           images: data.images || []
//         };
//       } catch (error) {
//         console.error('Error al obtener los detalles del personaje:', error);
//       }
//     }
//   }
// });

// app.mount('#app');


const app = Vue.createApp({
  data() {
    return {
      character: {
        name: '',
        status: '',
        sex: '',
        jutsu: [],
        weight: '',
        uniqueTraits: '',
        images: [],
        kekkeiGenkai: '',
        clan: '',
        natureType: []
      }
    };
  },
  computed: {
    characterImage() {
      return this.character.images.length > 0
        ? this.character.images[0]
        : '../assets/imagenes-de-personajes-de-naruto.jpg';
    }
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
          name: data.name || null,
          status: data.personal?.status ,
          sex: data.personal?.sex ,
          jutsu: Array.isArray(data.jutsu) && data.jutsu.length > 0 ? data.jutsu : [],
          weight: data.personal?.weight?.['Part II'] || data.personal?.weight?.['Part I'] ,
          uniqueTraits: data.unique_traits,
          images: data.images || [],
          kekkeiGenkai: data.personal?.kekkeiGenkai,
          clan: data.personal?.clan,
          natureType: Array.isArray(data.natureType) ? data.natureType : []
        };
      } catch (error) {
        console.error('Error al obtener los detalles del personaje:', error);
      }
    }
  }
});

app.mount('#app');
