import { getSpecificGame } from "./details.module.js";
import { hideLoader, showLoader } from "./index.js";
import { displayGames } from "./ui.module.js";
let currentData;


document.getElementById('games-data').addEventListener('click', function (e) {
    const clickedCard = e.target.closest('.card');
    getSpecificGame(clickedCard.id);
})

export async function getGameList(category) {
    showLoader();
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category ? category : 'mmorpg'}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9eb3f39d4mshb3f591cfd1acb86p125b8ejsn110eed45228c',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    currentData = data;
    console.log(data);
    displayGames(data);
    hideLoader();
}


export {
    currentData
}

