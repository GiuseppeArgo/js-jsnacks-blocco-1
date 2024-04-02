//In un array sono contenuti i nomi degli invitati alla festa del grande
//Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
//no alla festa.

// Array contenente i nomi degli invitati alla festa
let invitati = ["Pluto", "Pippo", "Paperino", "Topolino", "Zio Paperone"];

// Chiedo all'utente il suo nome
let nomeUtente = prompt("Inserisci il tuo nome:");

// Variabile per vedere se l'utente è stato invitato
let invitato = false;

// Ciclo per controllare se il nome dell'utente è presente tra gli invitati
for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === nomeUtente) {
        invitato = true;
    }
}

// Mostro un messaggio se il nome dell'utente è tra gli invitati
if (invitato) {
    console.log("Benvenuto alla festa.");
} else {
    console.log("Mi dispiace, non sei stato invitato alla festa.");
};