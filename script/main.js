
let titulop = document.title
const apiNarutoBestias = "https://narutodb.xyz/api/tailed-beast"

const {createApp} = Vue

const app = createApp({
   data(){
       return{
        arrayBestias: [],
        titulo: titulop
       }
   },
   created(){

   },
   methods:{
    traerData(apiNarutoBestias){
        fetch(apiNarutoBestias).then(response => response.json())
          .then(data => {
            this.arrayBestias = data.tailedBeasts
          })
        
    },
    
   },
   computed:{
       
   }
}).mount('#app')