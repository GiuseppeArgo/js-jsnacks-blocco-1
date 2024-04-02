"use strict";

//Chiedi un numero di 4 cifre all'utente
//e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo all'utente di inserire un numero di 4 cifre
let num = prompt("Inserisci un numero di 4 cifre:"); //String
console.log(num, typeof num);

//Variabile per la somma = 0

let sums = 0;
console.log(sums, typeof sums); //String
parseInt (sums); //Number

//Ciclo for per passare da ogni cifra del numero ed aggiungere alla somma

for (let i = 0; i < num.length; i++) {
    sums += parseInt(num[i]);
};

console.log(sums, typeof sums); //Number

