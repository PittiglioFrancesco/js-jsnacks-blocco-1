// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// ex

var invitati = ["Jimmy", "Bobby", "Charlie", "Titty", "Timmie", "Ellie"];

var nome = prompt("Inserire il proprio nome")

for (var i = 0; i <= invitati.length; i++){

    if (nome == invitati[i]) {
        var inv = "yes";
    }

}

if (inv == "yes") {
    document.getElementById("demo").innerHTML = "Sei nella lista degli invitati! *WidePeepoHappy*";
} else {
    document.getElementById("demo").innerHTML = "Non sei nella lista degli invitati! *WidePeepoSadge*";
}