/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito19*/

// creare var per nome utente
var nomeUtente;
// chiedere il nome all'utente
nomeUtente = prompt("Scrivi il tuo nome");
// creare var per cognome utente
var cognomeUtente;
// chiedere cognome all'utente
cognomeUtente = prompt("Scrivi il tuo cognome");
// creare var per colore utente
var colorePreferito;
// chiedere colore preferito all'utente
colorePreferito = prompt("Scrivi il tuo colore preferito");
// suggerire pw all'utente
document.getElementById('yo').innerHTML = "La tua password 'sicurissima' è: " + nomeUtente + cognomeUtente + colorePreferito + "19";
