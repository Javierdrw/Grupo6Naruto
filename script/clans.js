new Vue({
    el: '#app',
    data: {
        clans: [
            { id: 1, name: 'Uchiha', shortHistory: 'Conocidos por su Sharingan.', history: 'Los Uchiha son conocidos por su Sharingan, con una larga rivalidad con los Senju y la tragedia de la masacre de su clan a manos de Itachi Uchiha.', abilities: 'Sharingan, genjutsu, ninjutsu.', importantMembers: 'Itachi Uchiha, Sasuke Uchiha.' },
            { id: 2, name: 'Senju', shortHistory: 'Fundadores de Konoha.', history: 'Los Senju son uno de los clanes fundadores de Konoha, conocidos por su gran chakra y habilidades en ninjutsu, simbolizados por Hashirama Senju.', abilities: 'Gran chakra, ninjutsu poderoso.', importantMembers: 'Hashirama Senju, Tobirama Senju.' },
            { id: 3, name: 'Hyūga', shortHistory: 'Famosos por su Byakugan.', history: 'Los Hyūga son famosos por su Byakugan y su estructura familiar rígida, enfrentando luchas internas y la búsqueda de aceptación.', abilities: 'Byakugan, taijutsu.', importantMembers: 'Hinata Hyuga, Neji Hyuga.' },
            { id: 4, name: 'Nara', shortHistory: 'Expertos en estrategias.', history: 'Los Nara son expertos en estrategias y tácticas, con Shikamaru Nara como un ejemplo destacado de su enfoque en la paz.', abilities: 'Manipulación de sombras.', importantMembers: 'Shikamaru Nara.' },
            { id: 5, name: 'Akimichi', shortHistory: 'Conocidos por su gran fuerza.', history: 'Los Akimichi son conocidos por su habilidad de aumentar su tamaño a través de técnicas de control de calorías, simbolizando la camaradería y lealtad.', abilities: 'Control de calorías, técnicas de aumento de tamaño.', importantMembers: 'Chōji Akimichi.' },
            { id: 6, name: 'Yamanaka', shortHistory: 'Expertos en técnicas mentales.', history: 'Los Yamanaka son expertos en técnicas de transferencia de mente y comunicación, actuando como intermediarios en situaciones difíciles.', abilities: 'Transferencia de mente, comunicación mental.', importantMembers: 'Ino Yamanaka.' },
            { id: 7, name: 'Inuzuka', shortHistory: 'Conocidos por su vínculo con los perros.', history: 'Los Inuzuka son conocidos por su vínculo con los perros, reflejando lealtad y amistad en su historia.', abilities: 'Técnicas con perros, aumento de sentidos.', importantMembers: 'Kiba Inuzuka.' },
            { id: 8, name: 'Aburame', shortHistory: 'Utilizan insectos en combate.', history: 'Los Aburame utilizan insectos en combate y tienen un fuerte vínculo con la investigación y la naturaleza.', abilities: 'Control de insectos, técnicas de ocultación.', importantMembers: 'Shino Aburame.' },
            { id: 9, name: 'Sarutobi', shortHistory: 'Conocidos por su gran poder.', history: 'Los Sarutobi son conocidos por su gran poder y han desempeñado un papel crucial en la historia de Konoha.', abilities: 'Técnicas de fuego, sabiduría en combate.', importantMembers: 'Hiruzen Sarutobi.' },
            { id: 10, name: 'Hōzuki', shortHistory: 'Manipulan agua.', history: 'Los Hōzuki tienen la habilidad de manipular agua, destacándose en técnicas relacionadas con este elemento.', abilities: 'Manipulación de agua, técnicas de niebla.', importantMembers: 'Kisame Hōzuki.' },
            { id: 11, name: 'Yūhi', shortHistory: 'Habilidad con ilusiones.', history: 'Los Yūhi son conocidos por su habilidad con ilusiones, jugando un papel importante en las tácticas de combate.', abilities: 'Genjutsu, técnicas de distracción.', importantMembers: 'Kurenai Yūhi.' },
            { id: 12, name: 'Kaguya', shortHistory: 'Manipulación ósea.', history: 'El clan Kaguya es famoso por su manipulación ósea, con una historia marcada por la guerra y la búsqueda de poder.', abilities: 'Manipulación de huesos, técnicas de combate cuerpo a cuerpo.', importantMembers: 'Kaguya Ōtsutsuki.' },
            { id: 13, name: 'Otsutsuki', shortHistory: 'Poderes divinos.', history: 'El clan Otsutsuki posee poderes divinos y es fundamental en la historia del chakra en el mundo ninja.', abilities: 'Poderes de chakra, técnicas de viaje dimensional.', importantMembers: 'Kaguya Ōtsutsuki.' },
            { id: 14, name: 'Kumoi', shortHistory: 'Control de sombras.', history: 'Los Kumoi son expertos en control de sombras, contribuyendo a las técnicas de sigilo y estrategia.', abilities: 'Manipulación de sombras.', importantMembers: 'Desconocidos.' },
            { id: 15, name: 'Kurotsuchi', shortHistory: 'Técnicas de tierra.', history: 'Este clan se especializa en técnicas de tierra, con un enfoque en la resistencia y defensa.', abilities: 'Manipulación de tierra.', importantMembers: 'Kurotsuchi.' },
            { id: 16, name: 'Fūma', shortHistory: 'Habilidad en ninjutsu.', history: 'Los Fūma son conocidos por su habilidad en ninjutsu y han dejado una marca en la historia ninja.', abilities: 'Técnicas de ninjutsu únicas.', importantMembers: 'Desconocidos.' },
            { id: 17, name: 'Tōjō', shortHistory: 'Famosos por su resistencia.', history: 'El clan Tōjō es famoso por su resistencia, enfrentando adversidades con valentía.', abilities: 'Técnicas defensivas.', importantMembers: 'Desconocidos.' },
            { id: 18, name: 'Akatsuki', shortHistory: 'Organización que busca obtener poderes.', history: 'Una organización que busca obtener poderes, marcada por la tragedia y la ambición de sus miembros.', abilities: 'Técnicas prohibidas, control de bijuus.', importantMembers: 'Pain, Itachi Uchiha.' },
            { id: 19, name: 'Yuki', shortHistory: 'Técnicas de hielo.', history: 'Los Yuki son conocidos por su habilidad en técnicas de hielo, destacándose en el combate invernal.', abilities: 'Manipulación de hielo.', importantMembers: 'Desconocidos.' },
            { id: 20, name: 'Orochi', shortHistory: 'Búsqueda de inmortalidad.', history: 'Un clan que busca la inmortalidad, con un enfoque en la investigación prohibida y el poder.', abilities: 'Técnicas prohibidas.', importantMembers: 'Desconocidos.' },
            { id: 21, name: 'Kuro', shortHistory: 'Expertos en técnicas oscuras.', history: 'Expertos en técnicas oscuras, este clan ha sido parte de muchas historias misteriosas.', abilities: 'Técnicas de oscuridad.', importantMembers: 'Desconocidos.' },
            { id: 22, name: 'Yamato', shortHistory: 'Técnicas de madera.', history: 'Conocidos por técnicas de madera, este clan tiene una conexión especial con la naturaleza.', abilities: 'Manipulación de madera.', importantMembers: 'Desconocidos.' },
            { id: 23, name: 'Shin', shortHistory: 'Un oscuro pasado.', history: 'Un clan con un oscuro pasado, buscando redención y un nuevo propósito.', abilities: 'Técnicas de combate.', importantMembers: 'Shin Uchiha.' },
            { id: 24, name: 'Mizukage', shortHistory: 'Famoso por su liderazgo.', history: 'Famoso por su liderazgo, este clan ha influido en la historia de la aldea de la niebla.', abilities: 'Técnicas de niebla.', importantMembers: 'Desconocidos.' },
            { id: 25, name: 'Konoha', shortHistory: 'Fundador de la aldea de la hoja.', history: 'El clan fundador de la aldea de la hoja, cuyo legado continúa en cada ninja de la aldea.', abilities: 'Diversas técnicas ninja.', importantMembers: 'Desconocidos.' }
        ],
        selectedClan: {}
    },
    methods: {
        fetchClanInfo: function(clan) {
            this.selectedClan = clan; // Asigna el clan seleccionado
            $('#infoModal').modal('show'); // Muestra el modal
        }
    }
});