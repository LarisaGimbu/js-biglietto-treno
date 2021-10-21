//1 variabie km che l'utente vuole percorrere
//2 variabile età dell'utente
//3 variabile prezzo totale ( km * 0.21)
//4 sconto SE (età < 18 allora prezzo tot - 20%) altrimenti SE (età > 65 allora prezzo tot - 40%) altrimenti (prezzo totale)
//

const km = 13; //da cambiare con prompt
const age = 17; //da cambiare con prompt

const ticketPrice = km * 0.21 ;
// console.log(ticketPrice);

let totalPrice = ticketPrice;
if( age < 18 ){
  totalPrice = ticketPrice - (ticketPrice * 0.20);
}else if( age > 65){
  totalPrice = ticketPrice - (ticketPrice * 0.40);
}

// console.log(totalPrice);

document.getElementById("output").innerHTML = `
  Il vostro biglietto costa: ${totalPrice.toFixed(2)} euro
`





