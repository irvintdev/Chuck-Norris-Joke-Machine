
// This function retrieves a joke from the Chuck Norries API
async function getAndDisplayJoke() {
    const url = "https://api.chucknorris.io/jokes/random"
    
    try {
        const response = await fetch(url);
        const json = await response.json();
        const data = await json.value;
        document.getElementById('Joke').textContent = data;
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

let categories = '';

// This function retrieves categories from the Chuck Norris API
async function fetchCategories() {
    const url = "https://api.chucknorris.io/jokes/categories"
    
    try {
        const response = await fetch(url);
        const json = await response.json();
        const data = await json;
        categories = data;
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}




const button = document.getElementById('btn');

button.addEventListener('click', getAndDisplayJoke); 

