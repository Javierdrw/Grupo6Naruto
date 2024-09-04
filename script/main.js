const api = "https://narutodb.xyz/api/"

fetch(api+"character")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })