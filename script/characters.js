let api = "https://narutodb.xyz/api/character"

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            characters: [],
            charactersBK: [],
            textoBuscar: "",
            categorias: [], 
            categoriasSeleccionadas: [], 
            totalCharacters: 0, // Total de personajes
            page: 1, // Página actual
            limit: 20, // Número de personajes por página
            totalPages: 1, // Número total de páginas
            visiblePages: 10, // Páginas visibles al mismo tiempo
        };
    },
    created() {
        this.bringPersonagePaged(this.page);
    },
    methods: {

        // Función para traer personajes por página
        bringPersonagePaged(page) {
            fetch(`${api}?page=${page}&limit=${this.limit}`)
                .then((response) => response.json())
                .then((data) => {
                    this.characters = data.characters;
                    this.totalCharacters = data.totalCharacters; // Total de personajes
                    this.totalPages = Math.ceil(this.totalCharacters / this.limit); // Calcula el total de páginas
                    console.log(this.characters);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        },
        
        // Función para cambiar de página
        changePage(pageNumber) {
            if (pageNumber > 0 && pageNumber <= this.totalPages) {
                this.page = pageNumber;
                this.bringPersonagePaged(this.page); // Trae los personajes de la nueva página
            }
        },
        // Función para calcular el rango de páginas visibles
        getPageNumbers() {
            let start = Math.max(1, this.page - Math.floor(this.visiblePages / 2));
            let end = Math.min(this.totalPages, start + this.visiblePages - 1);

            // Si estamos en las últimas páginas y hay menos de 10 páginas, ajusta el inicio
            if (end - start < this.visiblePages - 1) {
                start = Math.max(1, end - this.visiblePages + 1);
            }

            // Retorna el rango de números de página a mostrar
            return Array.from({ length: end - start + 1 }, (_, i) => i + start);
        },
        getImageSrc(image) {
            // Verifica si 'image' es un string antes de usar 'trim', de lo contrario retorna la imagen por defecto
            return image !== "" ? image : '../assets/naruto-fondo-personaje.png';
        },
        // async fetchAllCharacters() {
        //     const apiPersonajesBase = "https://narutodb.xyz/api/character/";
        //     const batchSize = 20;
        //     let personajes = [];

        //     for (let i = 0; i <= 50; i += batchSize) {
        //         let promises = [];
        //         for (let j = i; j < i + batchSize && j <= 50; j++) {
        //             const apiPersonajes = `${apiPersonajesBase}${j}`;
        //             promises.push(
        //                 fetch(apiPersonajes)
        //                 .then((response) => {
        //                     if (!response.ok) {
        //                         console.error(`Error al obtener personaje ${j}: ${response.statusText}`);
        //                         return null;
        //                     }
        //                     return response.json();
        //                 })
        //                 .catch((error) => {
        //                     console.error("Error en la solicitud:", error);
        //                     return null;
        //                 })
        //             );
        //         }
        //         const resultados = await Promise.all(promises);
        //         personajes = personajes.concat(resultados.filter(p => p && p.id && p.name && p.images && p.images.length > 0));
        //     }
            
        //     this.characters = personajes;
        //     this.charactersBK = [...this.characters];
        // }
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
