
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
      this.traerData(apiNarutoBestias) 

  },
  methods:{
      traerData(url){
          fetch(url)
          .then(response => response.json()).then(data =>{
              console.log(data.tailedBeasts);
              
              this.arrayBestias = data.tailedBeasts
          })
      },
  },
  computed:{
      
  }
}).mount('#app')