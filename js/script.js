//1 variabie km che l'utente vuole percorrere
//2 variabile età dell'utente
//3 variabile prezzo totale ( km * 0.21)
//4 sconto SE (età < 18 allora prezzo tot - 20%) altrimenti SE (età > 65 allora prezzo tot - 40%) altrimenti (prezzo totale)
//

const km = 50; 
const age = 15; 

const ticketPrice = km * 0.21 ;
// console.log(ticketPrice);

let bigliettoValido = true;
let errorMsg = '';

if(isNaN(km)){
  bigliettoValido = false;
  errorMsg = 'Inserire un numero di kilometri valido';
}
if(isNaN(age)){
  bigliettoValido = false;
  errorMsg = 'Inserire un\'età valida';
}
if(age <0 || age > 150){
  bigliettoValido = false;
  errorMsg = 'Inserire un\'età valida';
}
console.log(km);
console.log(age);
console.log(bigliettoValido);
console.log(errorMsg);

let totalPrice = ticketPrice;
let outputText = `
  Avete scelto un percorso lungo ${km} km,<br>
  si conseguenza il vostro biglietto avrà un costo di <strong>${ticketPrice} euro.</strong>`;

if( age < 18 ){
  totalPrice = ticketPrice - (ticketPrice * 0.20);
  outputText = `
  Avete scelto un percorso lungo ${km} km, <br>
  di conseguenza il vostro biglietto ha un costo di ${ticketPrice} euro.<br>
  Considerando però la vostra età di ${age} anni, <br>
  vi concediamo uno sconto del 20% per un totale di : <strong>${totalPrice} euro</strong>`;
}else if( age > 65){
  totalPrice = ticketPrice - (ticketPrice * 0.40);
  outputText = `
  Avete scelto un percorso lungo ${km} km,<br>
  di conseguenza il vostro biglietto avrà un costo di ${ticketPrice} euro.<br>
  Considerando però la vostra età di  ${age} anni, <br> 
  vi concediamo uno sconto del 40% per un totale di : <strong>${totalPrice} euro </strong>`;
}

// console.log(totalPrice);


if(!bigliettoValido){
  outputText = `Errore!  ${errorMsg};`
}


document.getElementById("output").innerHTML = outputText;





