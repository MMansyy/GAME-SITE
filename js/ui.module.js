



export function displayGames(data) {
    let cartona = '';
    for (let i = 0; i < data.length; i++) {
        cartona += `
        <div class="col-md-6 col-lg-4 col-xl-3 gy-4">
                        <div id="${data[i].id}" class="card bg-transparent h-100 ">
                            <img src="${data[i].thumbnail}"
                                class="card-img-top rounded-5 p-3" alt="...">
                            <div class="card-body py-1 mb-2">
                                <div class="d-flex align-items-center justify-content-between m-0">
                                    <h6 class="text-white fw-bold">${data[i].title}</h6>
                                    <h5><span class="badge text-bg-primary">Free</span></h5>
                                </div>
                                <p class="card-text text-white-50 text-center">${data[i].short_description}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <span class="badge text-bg-secondary">MMORBG</span>
                                <span class="badge text-bg-secondary">PC (WINDOWS)</span>
                            </div>
                        </div>
                    </div>  
        `;
        document.getElementById('games-data').innerHTML = cartona;
    }
}




export function displaySpecificGame(data) {
    const cartona = `
    <div class="d-flex justify-content-between align-items-center text-white">
                    <p class="fs-2 fw-bold">Game Deatails</p>
                    <i id="close-btn" class="fa-solid fs-3 fa-xmark"></i>
                </div>
                <div class="col-md-4">
                    <img src="${data.thumbnail}" class="img-fluid" alt="">
                </div>
                <div class="col-md-8">
                    <div class="text-white">
                        <h2>Title: ${data.title}</h2>
                        <p>Category : <span class="badge text-bg-primary">${data.genre}</span></p>
                        <p>Platform : <span class="badge text-bg-primary">${data.platform}</span></p>
                        <p>Status : <span class="badge text-bg-primary">${data.status}</span></p>
                        <p>${data.description}</p>
                    </div>
                    <a class="btn btn-outline-warning text-white" target="_blank" href="${data.game_url}">Show Game</a>
                </div>`
    document.getElementById('game-details').innerHTML = cartona;
    document.getElementById('games').classList.add('d-none');
    document.getElementById('details').classList.remove('d-none');

}