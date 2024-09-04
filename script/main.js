const api = "https://narutodb.xyz/api/"

fetch(api+"tailed-beast")
    .then(response => response.json())
    .then(data => {
        let arrayBestias = data.tailedBeasts
        for (let i = 0; i < arrayBestias.length; i++) {
       console.log(arrayBestias[i].images);}
       
    })
