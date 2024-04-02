"use strict";

//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

// Creo un array vuoto
let oddNum = [];

console.log(oddNum);

// Chiedo all'utente di inserire un numero per sei volte
for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt("Inserisci un numero:")); //Number

    // Controllo se il numero inserito è dispari
    if (num % 2 !== 0) {
        oddNum.push(num); // Inserisco il numero dispari nell'array
    }
};
