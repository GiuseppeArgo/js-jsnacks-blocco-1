"use strict";

//Calcola la somma e la media dei primi 10 numeri.


// Calcolo la somma dei primi 10 numeri interi
let somma = 0; //Number
for (let i = 1; i <= 10; i++) {
    somma += i;
}

// Calcolo la media dei primi 10 numeri interi
let media = somma / 10;

console.log(somma, typeof somma); //Number
console.log(media, typeof media); //Number
