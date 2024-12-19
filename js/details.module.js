import { hideLoader, showLoader } from "./index.js";
import { displaySpecificGame } from "./ui.module.js";
let game_details = document.getElementById('game-details');



export async function getSpecificGame(id) {
    showLoader();
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e9eb3f39d4mshb3f591cfd1acb86p125b8ejsn110eed45228c',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    displaySpecificGame(data);
    hideLoader();
}


// عشان اقدر اعمل ال close button 
// لو حطيت علي ال close button ال event listener هيبقي مش شغال
// لان ال close button مش موجود من الاول في الصفحة
// فهستخدم ال event delegation
game_details.addEventListener('click', function (e) {
    if (e.target.id === 'close-btn') {
        document.getElementById('games').classList.remove('d-none');
        document.getElementById('details').classList.add('d-none');
    }
});

