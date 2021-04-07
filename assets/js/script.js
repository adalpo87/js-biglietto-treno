//richiesta km che vuole percorrere

var distanza = parseInt(prompt("Salve, quanti km deve percorerre?"));

//età del passeggero

var eta = prompt("Quanti anni ha?");

//prezzo 0.21 € al km

var prezzo_km = 0.21;

//sconto del 20% per i minorenni

var prezzo_under = prezzo_km * 0.8;

//sconto del 40% per gli over 65%

var prezzo_over = prezzo_km * 0.6;


if (eta < 18){

 sconto = "ha diritto ad uno sconto del 20%";
 totale = prezzo_under * distanza;
} 

else if (eta >= 65){

  sconto = "ha diritto ad uno sconto del 40%";
  totale = prezzo_over * distanza;
}

else{
  sconto = "non ha nessun sconto"
  totale = prezzo_km * distanza;
}


document.getElementById('ticket').innerHTML = "Lei deve percorrere una distanza di " + distanza + "Km e ha un'età di " + eta + "anni. Quindi " + sconto + " . Il prezzo totale è di euro " + (totale).toFixed(2) + ".";