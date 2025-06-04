

async function getAndDisplayJoke() {
    const url = "https://api.chucknorris.io/jokes/random"
    try {
        const response = await fetch(url);
        const json = await response.json();
        const data = await json.value;
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

