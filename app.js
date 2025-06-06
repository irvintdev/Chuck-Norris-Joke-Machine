

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

let array = '';

async function fetchCategories() {
    const url = "https://api.chucknorris.io/jokes/categories"
    
    try {
        const response = await fetch(url);
        const json = await response.json();
        const data = await json;
        array = data;
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}


const button = document.getElementById('btn');

button.addEventListener('click', getAndDisplayJoke); 

