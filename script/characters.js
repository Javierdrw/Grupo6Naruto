

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            characters: [],
            charactersBK: [],
            textoBuscar: "",
            categorias: [], 
            categoriasSeleccionadas: [] 
        };
    },
    created() {
        this.fetchAllCharacters();
    },
    methods: {
        async fetchAllCharacters() {
            const apiPersonajesBase = "https://narutodb.xyz/api/character/";
            const batchSize = 20;
            let personajes = [];

            for (let i = 0; i <= 50; i += batchSize) {
                let promises = [];
                for (let j = i; j < i + batchSize && j <= 50; j++) {
                    const apiPersonajes = `${apiPersonajesBase}${j}`;
                    promises.push(
                        fetch(apiPersonajes)
                        .then((response) => {
                            if (!response.ok) {
                                console.error(`Error al obtener personaje ${j}: ${response.statusText}`);
                                return null;
                            }
                            return response.json();
                        })
                        .catch((error) => {
                            console.error("Error en la solicitud:", error);
                            return null;
                        })
                    );
                }
                const resultados = await Promise.all(promises);
                personajes = personajes.concat(resultados.filter(p => p && p.id && p.name && p.images && p.images.length > 0));
            }
            
            this.characters = personajes;
            this.charactersBK = [...this.characters];
        }
    },
    computed: {
        superFiltro() {
            const resultado = this.charactersBK.filter((character) =>
                character.name.toLowerCase().includes(this.textoBuscar.toLowerCase())
            );
            console.log("Resultado del filtro:", resultado);
            return resultado;
        }
    }
}).mount("#app");
