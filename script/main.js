const apiNarutoBestias = "https://narutodb.xyz/api/tailed-beast"

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
    traerData(apiNarutoBestias){
        fetch(apiNarutoBestias).then(response => response.json())
          .then(data => {
            this.arrayBestias = data.tailedBeasts
            console.log(this.arrayBestias)
          })
        
    }
   },
   computed:{
       
   }
}).mount('#app')