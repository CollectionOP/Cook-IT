const urlParams = new URLSearchParams(window.location.search)

const id = urlParams.get('id');


const API_KEY_RECIPE = '0420d2b6541d7d36cad725f9dc614e5b'
const API_ID_RECIPE = '8f4eed8f'
const URL = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${API_ID_RECIPE}&app_key=${API_KEY_RECIPE}`

const detailsCall = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);


        })
}

detailsCall();