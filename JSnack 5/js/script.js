//Crea un array vuoto.
//Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

// Creo un array vuoto
let numeriDispari = [];

console.log(numeriDispari);

// Chiedo all'utente di inserire un numero per sei volte
for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt("Inserisci un numero:")); //Number

    // Controllo se il numero inserito è dispari
    if (numero % 2 !== 0) {
        numeriDispari.push(numero); // Inserisco il numero dispari nell'array
    }
};
