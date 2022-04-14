//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#get').addEventListener('click', getMeal)

document.querySelector('#random').addEventListener('click', getRandomMeal)

function getMeal(){
  
  let userSelect = document.querySelector('select').value

  let foodSearch = document.querySelector('input').value

  console.log(userSelect)

  if(userSelect == "meal") {
    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let dataLength = Object.keys(data.meals).length
      // Gives a random meal rather than first meal
      console.log(data)
      let randMeal = Math.floor(Math.random()*dataLength)
      console.log(dataLength)
      console.log(randMeal)
      document.querySelector('h2').innerText = data.meals[randMeal].strMeal
      document.querySelector('img').src = data.meals[randMeal].strMealThumb
      document.querySelector('h3').innerText = data.meals[randMeal].strInstructions
      // Changing color from white to black so text can be seen
      document.querySelector('h2').style.color = "black"
      document.querySelector('h3').style.color = "black"
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  } else {
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${foodSearch}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let dataLength = Object.keys(data.meals).length
      // Gives a random meal rather than first meal
      let randMeal = Math.floor(Math.random()*dataLength)
      console.log(data)
      document.querySelector('h2').innerText = data.meals[randMeal].strMeal
      document.querySelector('img').src = data.meals[randMeal].strMealThumb
      // Changing color from white to black so text can be seen
      document.querySelector('h2').style.color = "black"
      document.querySelector('h3').style.color = "white"
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
}

function getRandomMeal(){

    fetch(`https://themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
      document.querySelector('h3').innerText = data.meals[0].strInstructions
      // Changing color from white to black so text can be seen
      document.querySelector('h2').style.color = "black"
      document.querySelector('h3').style.color = "black"
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  
}

