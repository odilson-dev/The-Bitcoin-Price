const url = "https://blockchain.info/ticker";

let save = 0;


function getPrice(){
let requete = new XMLHttpRequest();
let reponse, priceEuro;

requete.open("GET", url);

requete.responseType = "json";
requete.send();


requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE){
        if (requete.status === 200){
            reponse = requete.response;
             priceEuro = reponse["EUR"]["last"];
            document.querySelector("#price_label").textContent = priceEuro;
            if  (priceEuro != save && save != 0 ){
                console.log("The price has changed");
            }

            save = priceEuro
        ;
            
        } else {
            console.log("A problem has occurred, please come back later.")
        }
    }

}

}

setInterval(getPrice, 1000);

