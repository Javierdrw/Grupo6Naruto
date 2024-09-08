let titulop = document.title

new Vue({
    el: '#app',
    data: {
        clans: [],
        selectedClan: {}
    },
    created() {
        this.fetchClans(); 
    },
    methods: {
        fetchClans: function() {
            fetch('clans.json')
                .then(response => response.json())
                .then(data => {
                    this.clans = data; 
                })
                .catch(error => console.error('Error al cargar el JSON:', error));
        },
        fetchClanInfo: function(clan) {
            this.selectedClan = clan; 
            $('#infoModal').modal('show'); 
        }
    }
});