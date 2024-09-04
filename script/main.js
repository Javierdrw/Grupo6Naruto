const api = "https://narutodb.xyz/api/"

const {createApp} = Vue

const app = createApp({
   data(){
       return{
        arrayBestias: []
       }
   },
   created(){

   },
   methods:{
    fetch("https://narutodb.xyz/api/tailed-beast")
      .then(response => response.json())
      .then(data => {
        this.arrayBestias = data.tailedBeasts
        console.log(this.arrayBestias)
      })
   },
   computed:{
       
   }
}).mount('#app')