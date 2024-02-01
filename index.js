const API_KEY_RECIPE = '0420d2b6541d7d36cad725f9dc614e5b'
const API_ID_RECIPE = '8f4eed8f'
const URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID_RECIPE}&app_key=${API_KEY_RECIPE}&q=chicken`

const recipeCall = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            const recipesContainer = document.querySelector('.recipes-container')

            data.hits.map(recipe => {
                console.log(recipe);

                const template = `
               <a href="">
               <div class="recipe">
                 <img
                   src="${recipe.recipe.image}"
                   alt="">
                 <div class="recipe-title">
                   <p>${recipe.recipe.label}</p>
                 </div>
               </div>
             </a> `

                recipesContainer.innerHTML += template

            })
        })
}

recipeCall();

