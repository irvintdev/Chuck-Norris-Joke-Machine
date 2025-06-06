

async function getAndDisplayJoke() {
    const url = "https://api.chucknorris.io/jokes/random"
    document.getElementById('Joke').textContent = '';
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



const button = document.getElementById('btn');

button.addEventListener('click', getAndDisplayJoke); 

