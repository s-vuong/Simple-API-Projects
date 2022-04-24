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
      document.querySelector('.instructions').innerText = data.meals[randMeal].strInstructions
      // Changing color from white to black so text can be seen
      document.querySelector('h2').style.color = "black"
      document.querySelector('.instructions').style.color = "black"

      // Getting each of the ingredients and measurements
      let ingredientsNum = Object.keys(meals)
      console.log(ingredientsNum)
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

      // Getting each of the ingredients and measurements
      let ingredientsNum = Object.keys(data.meals[0])
      console.log(ingredientsNum)
      console.log(data.meals[0])
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
      // Initializing the list to put ingredients into
      const ul = document.querySelector("ul")

      // Remove everything so lists do not stack
      ul.innerHTML = ''

      ul.hidden = true

      console.log(data)
      document.querySelector('h2').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
      document.querySelector('.instructions').innerText = data.meals[0].strInstructions
      // Changing color from white to black so text can be seen
      document.querySelector('h2').style.color = "black"
      document.querySelector('.instructions').style.color = "black"

      // Getting each of the ingredients and measurements
      let ingredientsNum = Object.keys(data.meals[0]).filter(str => str.indexOf("Measure") >= 0).length
      let ingredientStr = ''
      let ingredientMeas = ""
      let ingredientActual = ""
      let li = document.createElement("li")
      for (i = 1; i <= ingredientsNum; i++) {
        ingredientMeas = data.meals[0]["strMeasure" + i]
        ingredientStr = data.meals[0]["strIngredient" + i]
        if(ingredientStr != "") {
          console.log(ingredientMeas)
          ingredientActual = `${ingredientMeas} ${ingredientStr}`
          li = document.createElement("li")
          li.appendChild(document.createTextNode(ingredientActual))
          ul.appendChild(li)
        }
        console.log(ingredientActual)
        ul.hidden = false
      }
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  
}

