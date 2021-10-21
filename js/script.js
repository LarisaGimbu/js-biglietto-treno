const km = 723; 
const age = 15; 
const discountCode = "SCONTO20"

let ticketPrice = km * 0.21 ;
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
  si conseguenza il vostro biglietto avrà un costo di <strong>${ticketPrice.toFixed(2)} euro.</strong>`;

if( age < 18 ){
  totalPrice = ticketPrice - (ticketPrice * 0.20);
  outputText = `
  Avete scelto un percorso lungo ${km} km, <br>
  di conseguenza il vostro biglietto ha un costo di ${ticketPrice.toFixed(2)} euro.<br>
  Considerando però la vostra età di ${age} anni, <br>
  vi concediamo uno sconto del 20% per un totale di : <strong>${totalPrice.toFixed(2)} euro</strong>`;
}else if( age > 65){
  totalPrice = ticketPrice - (ticketPrice * 0.40);
  outputText = `
  Avete scelto un percorso lungo ${km} km,<br>
  di conseguenza il vostro biglietto avrà un costo di ${ticketPrice.toFixed(2)} euro.<br>
  Considerando però la vostra età di  ${age} anni, <br> 
  vi concediamo uno sconto del 40% per un totale di : <strong>${totalPrice.toFixed(2)} euro </strong>`;
}

// if(discountCode === 'SCONTO20' && age <= 20){
//   discountPrice = totalPrice - (totalPrice * 0.20)
//   discountText = `Prendendo in considerazione il codice sconto viene quindi applicato un ulteriore sconto del 20% <br>
//   <strong>Per un totale di ${discountPrice.toFixed(2)} euro.</strong>`
// }

console.log(discountCode)
console.log(discountPrice)
console.log(discountText)

// console.log(totalPrice);


if(!bigliettoValido){
  outputText = `Errore!  ${errorMsg};`
}


document.getElementById("output").innerHTML = outputText;





