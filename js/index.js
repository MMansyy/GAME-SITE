import { getGameList } from "./game.module.js";
const categories = document.querySelectorAll('.nav-link');
const loader = document.getElementById('loading');

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', function (e) {
        for (let j = 0; j < categories.length; j++) {
            categories[j].classList.remove('active');
        }
        e.target.classList.add('active');
        getGameList(e.target.id);
    });
}

export function showLoader() {
    loader.classList.remove('d-none');
}

export function hideLoader() {
    loader.classList.add('d-none');
}




getGameList();

