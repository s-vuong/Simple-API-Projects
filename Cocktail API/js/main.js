//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getDrink)

function getDrink() {
    userInput = document.querySelector('input').value
    const baseURL = "https://thecocktaildb.com/api/json/v1/1/search.php?s="
    let finalDrink = baseURL + userInput

    fetch(finalDrink)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

document.querySelector('#random').addEventListener("click", getDrinkRandom)

function getDrinkRandom() {
    fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
