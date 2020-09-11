let map = []

for (let i = 0; i < 10; i++) {
    map.push('|')
}

document
    .querySelector('#app')
    .innerHTML = map.join(' ')
