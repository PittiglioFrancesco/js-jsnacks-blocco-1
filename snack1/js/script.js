// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta
// poi la parola più lunga.
// Se uguale lunghezza dire sono uguali e stamparle entrambe.

var parola1 = prompt("Inserisci prima parola");

var parola2 = prompt("Inserisci seconda parola");

var n1 = parola1.length;
var n2 = parola2.length;

if (n1 > n2) {
    document.getElementById("demo").innerHTML = parola2 + " " + parola1;
} else if (n2 > n1) {
    document.getElementById("demo").innerHTML = parola1 + " " + parola2;
} else if (n1 === n2) {
    document.getElementById("demo").innerHTML = "Le 2 parole, " + parola1 + " e " + parola2 + ", hanno la stessa lunghezza.";
}


