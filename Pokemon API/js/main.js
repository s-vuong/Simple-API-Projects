//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getPokemon)

function getPokemon() {
    userInput = document.querySelector('input').value
    let baseURL = "https://pokeapi.co/api/v2/pokemon/"
    let pokemonURL = baseURL + userInput

    fetch(pokemonURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.name[0].toUpperCase() + data.name.slice(1) + ' - Pokedex No. ' + data.id
            document.querySelector('#regSprite').src = data.sprites.front_default
            document.querySelector('#shinySprite').src = data.sprites.front_shiny
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('#random').addEventListener("click", getPokemonRandom)

function getPokemonRandom() {
    let randNum = Math.floor(Math.random()*898)
    let randURL = "https://pokeapi.co/api/v2/pokemon/" + randNum
    fetch(randURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.name[0].toUpperCase() + data.name.slice(1) + ' - Pokedex No. ' + data.id
            document.querySelector('#regSprite').src = data.sprites.front_default
            document.querySelector('#shinySprite').src = data.sprites.front_shiny
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
