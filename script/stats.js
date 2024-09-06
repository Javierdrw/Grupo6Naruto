const app = Vue.createApp({
      data() {
        return {
          characters: [],
          tallest: null,
          heaviest: null,
          oldest: null,
          maleCount: 0,
          femaleCount: 0,
          loading: true,
        };
      },
      mounted() {
        this.fetchAllCharacters();
      },
      methods: {
        fetchAllCharacters() {
          const apiPersonajesBase = "https://narutodb.xyz/api/character/";
          const promises = [];

      for (let i = 0; i < 1431; i++) {
        const apiPersonajes = `${apiPersonajesBase}${i}`;
        const promise = fetch(apiPersonajes)
          .then((response) => {
            if (!response.ok) return null; // Si no existe el personaje, devuelve null
            return response.json();
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            return null;
          });

        promises.push(promise);

        // Ejecutar las solicitudes en lotes
        if (promises.length >= batchSize) {
          await Promise.all(promises).then((characters) => {
            this.characters.push(...characters.filter((char) => char !== null));
          });
          promises = [];
        }
      }

      if (promises.length > 0) {
        await Promise.all(promises).then((characters) => {
          this.characters.push(...characters.filter((char) => char !== null));
        });
      }

      this.analyzeCharacters();
      this.loading = false;
    },
    analyzeCharacters() {
      let maleCount = 0;
      let femaleCount = 0;

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

        return {
          name: char?.name || "Unknown",
          height: height ? parseFloat(height) : null,
          weight: weight ? parseFloat(weight) : null,
          age: age,
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

      this.maleCount = maleCount;
      this.femaleCount = femaleCount;
    },
  },
});

app.mount('#app');


