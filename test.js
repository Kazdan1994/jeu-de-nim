let map = []
let restant = 10
let retire = 0
let joueur = 1

while (restant > 1) {
    for (let i = 0; i < restant; i++) {
        map += (' | ');
    }
    alert(map)

    if (joueur % 2 !== 0) {
        retire = parseInt(prompt('Combien voulez vous retirer ?'));
        while (retire > 3 || retire < 1) {
            alert(" Vous pouvez choisir un nombre entre 1 et 3 uniquement !")
            retire = parseInt(prompt('Vous pouvez en retirer entre 1 et 3 a la fois'));
        }
        restant = restant - retire;
        joueur = joueur + 1;
    } else {
        if (restant === 3) {
            retire = 2;
        } else if (restant === 2) {
            retire = 1;
        } else {
            retire = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        }
        restant = restant - retire;
        joueur = joueur + 1;
        alert("L'IA a retirer : " + retire)
    }

    map = [];

    if (restant <= 1) {
        if (joueur % 2 === 0) {
            alert("Vous avez gagner !")
        } else {
            alert("L'IA a gagner !")
        }
    }
}