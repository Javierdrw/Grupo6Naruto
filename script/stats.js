const api = "https://narutodb.xyz/api/character"


const app = Vue.createApp({
  data() {
    return {
      characters: [],
      charactersBK: [],
      totalCharacters: 0,
      tallest: null,
      heaviest: null,
      oldest: null,
      maleCount: 0,
      femaleCount: 0,
      characterWithMostNatureTypes: null,
      mostNatureTypes: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchAllCharacters();
  },
  methods: {
    // Función para traer todos los personajes
    fetchAllCharacters() {
      fetch(`${api}?page=1&limit=2000`) // Asegúrate de que el límite cubre todos los personajes
        .then((response) => response.json())
        .then((data) => {
          this.characters = data.characters;
          this.charactersBK = [...this.characters]; // Guarda una copia sin filtrar
          this.totalCharacters = data.totalCharacters; // Total de personajes
          this.analyzeCharacters(); // Llama a la función de análisis después de obtener los personajes
          this.loading = false; // Cargar completado
          
        })
        .catch((error) => {
          console.error("Error:", error);
          this.loading = false; // Cargar completado incluso si ocurre un error
        });
    },
    
    analyzeCharacters() {
      let maleCount = 0;
      let femaleCount = 0;
      let characterWithMostNatureTypes = null;
      let maxNatureTypesCount = 0;

      const charactersWithStats = this.characters.map((char) => {
        const height =
          char?.personal?.height?.["Part II"] || char?.personal?.height?.["Part I"];
        const weight =
          char?.personal?.weight?.["Part II"] || char?.personal?.weight?.["Part I"];
        const agePartI = char?.personal?.age?.["Part I"]
          ? parseInt(char.personal.age["Part I"])
          : null;
        const agePartII = char?.personal?.age?.["Part II"]
          ? parseInt(char.personal.age["Part II"])
          : null;
        const age = agePartII !== null ? agePartII : agePartI;

        const gender = char?.personal?.sex?.toLowerCase();
        if (gender === "male") maleCount++;
        if (gender === "female") femaleCount++;

        const natureTypes = char?.natureType || []; // Acceder directamente a natureType
        const natureTypesCount = natureTypes.length;

        if (natureTypesCount > maxNatureTypesCount) {
          maxNatureTypesCount = natureTypesCount;
          characterWithMostNatureTypes = char;
        }

        return {
          name: char?.name || "Unknown",
          height: height ? parseFloat(height) : null,
          weight: weight ? parseFloat(weight) : null,
          age: age,
          natureTypes: natureTypes,
        };
      });

      this.tallest = charactersWithStats.reduce(
        (max, char) => (char.height && char.height > max.height ? char : max),
        { height: -Infinity }
      );

      this.heaviest = charactersWithStats.reduce(
        (max, char) => (char.weight && char.weight > max.weight ? char : max),
        { weight: -Infinity }
      );

      this.oldest = charactersWithStats.reduce(
        (oldest, char) =>
          char.age && (!oldest.age || char.age > oldest.age) ? char : oldest,
        { age: null }
      );

      this.characterWithMostNatureTypes = characterWithMostNatureTypes?.name || "Unknown";
      this.mostNatureTypes = characterWithMostNatureTypes?.natureType || [];

      this.maleCount = maleCount;
      this.femaleCount = femaleCount;
    },
  },
});

app.mount('#app');
