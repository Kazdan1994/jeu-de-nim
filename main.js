let map = []

for (let i = 0; i < 10; i++) {
    map.push('|')
}

document
    .querySelector('#app')
    .innerHTML = map.join(' ')

const value = document
    .querySelector('#nb')
    .value

const button = document
    .querySelector('button')
    .addEventListener('click', function () {
        map.splice(0, 3)

        document
            .querySelector('#app')
            .innerHTML = map.join(' ')
    })
