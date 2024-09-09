// let api = "https://narutodb.xyz/api/character"
// let apiPersonajes = "https://narutodb.xyz/api/character&page=1&limit=1431"

// const { createApp } = Vue;

// const app = createApp({
//     data() {
//         return {
//             characters: [],
//             charactersBK: [],
//             textoBuscar: "",
//             categorias: [], 
//             categoriasSeleccionadas: [], 
//             totalCharacters: 0, // Total de personajes
//             page: 1, // Página actual
//             limit: 20, // Número de personajes por página
//             totalPages: 1, // Número total de páginas
//             visiblePages: 10, // Páginas visibles al mismo tiempo
//             selectedSex: "", // Filtro de sexo
//             selectedNatureType: "", // Filtro de Nature Type
//             natureTypes: ["Lightning Release", "Earth Release", "Fire Release",  "Wind Release","Water Release","Lava Release","Magnet Release","Boil Release","Yin Release","Yang Release"],
//             favorites: [],
//         };
//     },
//     created() {
//         this.bringPersonagePaged(this.page);
//         const storedFavorites = localStorage.getItem('favorites');
//         if (storedFavorites) {
//             this.favorites = JSON.parse(storedFavorites);
//         }
//     },
//     methods: {

//         // Función para traer personajes por página
//         bringPersonagePaged(page) {
//             fetch(`${api}?page=${page}&limit=${this.limit}`)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     this.characters = data.characters;
//                     this.charactersBK = [...this.characters]; // Guarda una copia sin filtrar
//                     this.totalCharacters = data.totalCharacters; // Total de personajes
//                     this.totalPages = Math.ceil(this.totalCharacters / this.limit); // Calcula el total de páginas
//                     console.log(this.characters);
//                 })
//                 .catch((error) => {
//                     console.error("Error:", error);
//                 });
//         },
        
//         // Función para cambiar de página
//         changePage(pageNumber) {
//             if (pageNumber > 0 && pageNumber <= this.totalPages) {
//                 this.page = pageNumber;
//                 this.bringPersonagePaged(this.page); // Trae los personajes de la nueva página
//             }
//         },
//         // Función para calcular el rango de páginas visibles
//         getPageNumbers() {
//             let start = Math.max(1, this.page - Math.floor(this.visiblePages / 2));
//             let end = Math.min(this.totalPages, start + this.visiblePages - 1);

//             // Si estamos en las últimas páginas y hay menos de 10 páginas, ajusta el inicio
//             if (end - start < this.visiblePages - 1) {
//                 start = Math.max(1, end - this.visiblePages + 1);
//             }

//             // Retorna el rango de números de página a mostrar
//             return Array.from({ length: end - start + 1 }, (_, i) => i + start);
//         },
//         getImageSrc(image) {
//             // Verifica si la propiedad 'image' existe, si es un array y si tiene una URL válida, de lo contrario, retorna la imagen por defecto.
//             if (!image || (Array.isArray(image) && image.length === 0) || image[0] === "") {
//                 return '../assets/naruto-fondo-personaje.png';
//             }
//             return image[0]; // Retorna la primera imagen del array si existe
//         },

//         addFavorite(character) {
//             if (!this.favorites.includes(character)) {
//                 this.favorites.push(character);
//                 console.log("Personaje favorito:", this.favorites);
//                 localStorage.setItem('favorites', JSON.stringify(this.favorites));
                
//             }
//         },

//         removeFavorite(character) {
//             const index = this.favorites.indexOf(character);
//                 this.favorites.splice(index, 1);
//                 console.log("Personaje eliminado de favoritos:", this.favorites);
//                 localStorage.setItem('favorites', JSON.stringify(this.favorites));
//         }

//     },
//     computed: {
//          // Filtrar personajes por texto, sexo y natureType
//          filteredCharacters() {
//             return this.charactersBK.filter(character => {
//                 // Filtro de texto
//                 const matchesText = character.name.toLowerCase().includes(this.textoBuscar.toLowerCase());
                
//                 // Filtro de sexo (si está seleccionado un sexo)
//                 const matchesSex = this.selectedSex ? character.personal.sex === this.selectedSex : true;

//                 // Filtro de natureType (si está seleccionado un tipo)
//                 const matchesNatureType = this.selectedNatureType 
//                     ? character.natureType && character.natureType.includes(this.selectedNatureType)
//                     : true;

//                 return matchesText && matchesSex && matchesNatureType;
//             });
//         }
//     },

// }).mount("#app");


let api = "https://narutodb.xyz/api/character"
let apiPersonajes = "https://narutodb.xyz/api/character&page=1&limit=1431"

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
            selectedSex: "", // Filtro de sexo
            selectedNatureType: "", // Filtro de Nature Type
            natureTypes: ["Lightning Release", "Earth Release", "Fire Release",  "Wind Release","Water Release","Lava Release","Magnet Release","Boil Release","Yin Release","Yang Release"],
            favorites: [],
        };
    },
    created() {
        this.bringPersonagePaged(this.page);
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            this.favorites = JSON.parse(storedFavorites);
        }
    },
    methods: {
        // Función para traer personajes por página
        bringPersonagePaged(page) {
            fetch(`${api}?page=${page}&limit=${this.limit}`)
                .then((response) => response.json())
                .then((data) => {
                    this.characters = data.characters;
                    this.charactersBK = [...this.characters]; // Guarda una copia sin filtrar
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

        // Verificar si el personaje está en favoritos
        isFavorite(character) {
            return this.favorites.some(fav => fav.id === character.id);
        },

        // Función toggle para agregar o quitar favoritos
        toggleFavorite(character) {
            if (this.isFavorite(character)) {
                this.removeFavorite(character); // Si ya es favorito, lo remueve
            } else {
                this.addFavorite(character); // Si no es favorito, lo agrega
            }
        },

        // Agregar personaje a favoritos
        addFavorite(character) {
            if (!this.isFavorite(character)) {
                this.favorites.push(character);
                console.log("Personaje agregado a favoritos:", this.favorites);
                localStorage.setItem('favorites', JSON.stringify(this.favorites));
            }
        },

        // Eliminar personaje de favoritos
        removeFavorite(character) {
            this.favorites = this.favorites.filter(fav => fav.id !== character.id);
            console.log("Personaje eliminado de favoritos:", this.favorites);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },

        getImageSrc(image) {
            // Verifica si la propiedad 'image' existe, si es un array y si tiene una URL válida, de lo contrario, retorna la imagen por defecto.
            if (!image || (Array.isArray(image) && image.length === 0) || image[0] === "") {
                return '../assets/naruto-fondo-personaje.png';
            }
            return image[0]; // Retorna la primera imagen del array si existe
        }
    },
    computed: {
        // Filtrar personajes por texto, sexo y natureType
        filteredCharacters() {
            return this.charactersBK.filter(character => {
                // Filtro de texto
                const matchesText = character.name.toLowerCase().includes(this.textoBuscar.toLowerCase());
                
                // Filtro de sexo (si está seleccionado un sexo)
                const matchesSex = this.selectedSex ? character.personal.sex === this.selectedSex : true;

                // Filtro de natureType (si está seleccionado un tipo)
                const matchesNatureType = this.selectedNatureType 
                    ? character.natureType && character.natureType.includes(this.selectedNatureType)
                    : true;

                return matchesText && matchesSex && matchesNatureType;
            });
        }
    },

}).mount("#app");
