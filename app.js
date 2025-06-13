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
    } catch (error) {
        console.error(error.message);
    }
}

//This funtion allows you to click and select a list item
ul.addEventListener('click' , function(event) {
    clearSelection();

    if (event.target.tagName === 'LI') {
        event.target.className = 'selected';
        selectedCategory = event.target.textContent;
    }
});

// This function will remove the 'selected' class name from all list items

function clearSelection() {
    const li = document.querySelectorAll('LI');
    li.forEach( function(item) {
        item.className = '';
    })
}


fetchCategories();

button.addEventListener('click', getAndDisplayJoke); 


