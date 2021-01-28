//https://icanhazdadjoke.com/api

const jokeBtn = document.querySelector("button");
const jokerPara = document.querySelector(".joke");
console.log(jokerPara)


jokeBtn.addEventListener('click', getJoke);


async function getJoke() {
    const jokeUTL = "https://icanhazdadjoke.com/";
    const response = await fetch(jokeUTL, {
        headers: {
            accept: "application/json",
        }
    })


    const responseData = await response.json();

    jokerPara.innerText  = responseData.joke;
}