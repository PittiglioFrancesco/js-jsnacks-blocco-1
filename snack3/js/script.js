//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// ex

var array = [];

for (var i = 0; i < 6; i++){

    var temp = prompt("Inserisci numero.");

    if (temp % 2 != 0) {
        array.push(temp)
    }

}

document.getElementById("demo").innerHTML = array;