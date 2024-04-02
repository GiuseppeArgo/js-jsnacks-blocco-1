"use strict";

//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall'utente.

//Chiedo un numero all'utente 

const num = parseInt(prompt("Dimmi un numero")); //Number

//Stampo il cubo dei primi N numeri

for (let i = 1; i <= num; i++) {
    let cubo = i * i * i;
    console.log("Il cubo di", i, "è", cubo);
};