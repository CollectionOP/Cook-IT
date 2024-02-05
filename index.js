const API_KEY_RECIPE = '0420d2b6541d7d36cad725f9dc614e5b'
const API_ID_RECIPE = '8f4eed8f'

const recipeCall = (inputValue) => {
  fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID_RECIPE}&app_key=${API_KEY_RECIPE}&q=${inputValue ? inputValue : 'chicken'}`)
    .then(response => response.json())
    .then(data => {
      const recipesContainer = document.querySelector('.recipes-container')
      recipesContainer.innerHTML = ''

      data.hits.map(recipe => {
        // console.log(recipe);

        const uri = recipe.recipe.uri
        const id = uri.slice(51)
        const template = ` 
               <a href="details.html?id=${id}">
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

const filterButtons = document.querySelector('.filter-buttons');
const buttons = filterButtons.querySelectorAll('a');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {

    event.preventDefault();
    inputValue = button.textContent;
    console.log(inputValue);
    recipeCall(inputValue);
  })
})