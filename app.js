let categories = '';
const button = document.getElementById('btn');
const ul = document.getElementById('categories');
let selectedCategory = '';


// This function retrieves a joke from the Chuck Norries API
async function getAndDisplayJoke() {
    
    if (selectedCategory === '') {
        var url = 'https://api.chucknorris.io/jokes/random'
    } else {
        var url = `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`;
    }

    
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

//This funtion allows you to click and select a list item
ul.addEventListener('click' , function(event) {
    if (event.target.tagName === 'LI') {
        selectedCategory = event.target.textContent;
        console.log(selectedCategory);
    }
});



fetchCategories();

button.addEventListener('click', getAndDisplayJoke); 


