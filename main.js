// On initialise un tableau qui contiendra nos allumettes

let map = []

const divMap = document.querySelector('#map')

// On remplit notre tableau avec les allumettes
for (let i = 0; i < 10; i++) {
    map.push('|')
}

// On insert notre tableau dans l'élément html
// qui a l'id map
divMap.innerHTML = map.join(' ')

document
    .querySelector('button') // Selection du button

    // Ajout d'un évènement click
    .addEventListener('click', play)

function play () {
    // supprime les allumettes du tableau en fonction
    // de ce que rentre l'utilisateur
    map.splice(0, parseInt(document
        .querySelector('#nb')
        .value, 10))

    // On réaffiche la map
    divMap.innerHTML = map.join(' ')
}
