// ---------------------------------- traccia

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
// Variante: stampare solo i numeri pari

// ---------------------------------- fine traccia

// ---------------------------------- inizio ex con for

//versione con for

var somma = 0;

for (var i = 0; i < 5; i++){
    var input = parseFloat(prompt("Inserisci numero"));
    somma += input;
}

document.getElementById("demo").innerHTML = somma;

// ---------------------------------- fine ex con for

// ---------------------------------- inizio ex con while

// versione con while

// var somma = 0;
// var i = 0;

// while (i < 5){
//     var input = parseFloat(prompt("Inserisci numero"));
//     somma += input;
// }

// document.getElementById("demo").innerHTML = somma;

// ---------------------------------- fine ex con while

// ---------------------------------- inizio variante con for

// variante numeri pari con for

// var somma = "";

// for (var i = 0; i < 5; i++){

//     var input = parseFloat(prompt("Inserisci numero"));
    
//     if (input % 2 == 0) {
//         somma += input;
//         somma += " ";
//     }

// }

// document.getElementById("demo").innerHTML = somma;

// ---------------------------------- fine variante con for

// ---------------------------------- inizio variante con while

// // variante numeri pari con while

// var somma = "";
// var i = 0;

// while (i < 5){

//     var input = parseFloat(prompt("Inserisci numero"));
    
//     if (input % 2 == 0) {
//         somma += input;
//         somma += " ";
//     }

// }

// document.getElementById("demo").innerHTML = somma;

// ---------------------------------- fine variante con while