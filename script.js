const url = "https://blockchain.info/ticker";

let save = 0;


async function getPrice(){
// let requete = new XMLHttpRequest();
// let reponse, priceEuro;

// requete.open("GET", url);

// requete.responseType = "json";
// requete.send();


// requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE){
//         if (requete.status === 200){
//             reponse = requete.response;
//              priceEuro = reponse["EUR"]["last"];
//             document.querySelector("#price_label").textContent = priceEuro;
//             if  (priceEuro != save && save != 0 ){
//                 console.log("The price has changed");
//             }

//             save = priceEuro
//         ;
            
//         } else {
//             console.log("A problem has occurred, please come back later.")
//         }
//     }

// }
const requete = await fetch(url,{
    method: "GET"
});
if (!requete.ok){
    alert("A problem has occurred, please come back later!")
} else{
    let donnees = await requete.json();
    document.querySelector("#price_label").textContent = donnees.EUR.last;
}

}
setInterval(getPrice, 1000);

