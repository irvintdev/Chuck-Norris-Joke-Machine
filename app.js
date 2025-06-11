let categories = '';
const button = document.getElementById('btn');
const ul = document.getElementById('categories');


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



// This function retrieves categories from the Chuck Norris API & adds them to category list
async function fetchCategories() {
    const url = "https://api.chucknorris.io/jokes/categories"
    
    try {
        const response = await fetch(url);
        const json = await response.json();
        const data = await json;
        categories = data;
        categories.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        })
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}






button.addEventListener('click', getAndDisplayJoke); 
fetchCategories();


