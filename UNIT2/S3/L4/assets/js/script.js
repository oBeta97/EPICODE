const cardsRow = document.querySelector('.album .container .row');

window.addEventListener('load', function (event) {
    const loadImagesBtn = document.getElementById('loadImagesBtn');

    loadImagesBtn.addEventListener('click', function(event){
        const searchWordInput = document.getElementById('searchWord');
        LoadCardImages(searchWordInput.value);
    });

});


async function LoadCardImages(searchWord) {

    const images = await GetImages(searchWord);
    // console.log(images);

    cardsRow.innerHTML = '';
    images.photos.forEach(photo => {
        AddCard(photo);
    });

}


function AddCard(cardContent) {

    // console.log(cardContent);

    const card = `
        <div class="col-md-4" id="${cardContent.id}">
            <div class="card mb-4 shadow-sm">
                <img src="${cardContent.src.medium}" class="bd-placeholder-img card-img-top" onclick='ShowImgDetails(${cardContent.id})'/>
                <div class="card-body">
                    <h5 class="card-title">${cardContent.photographer}</h5>
                    <p class="card-text">
                    ${cardContent.photographer_url}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                View
                            </button>
                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick='HideCard(${cardContent.id})'>
                                hide
                            </button>
                        </div>
                        <small class="text-muted">${cardContent.id}</small>
                    </div>
                </div>
            </div>
        </div>
    `;

    cardsRow.innerHTML += card;

}

function HideCard(targetId){

    document.getElementById(targetId).classList.add('d-none');
    
}

function ShowImgDetails(targetId){

    window.location.href = `./imgDetails.html?imgID=${targetId}`;
}

