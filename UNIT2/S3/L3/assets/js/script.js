let books = [];
const shoppingCartContainer = document.getElementById('shoppingCartContainer');

window.addEventListener('load', function (event) {
    const booksLibraryContainer = this.document.getElementById('booksLibrary');

    if(!this.localStorage.getItem('shoppingCart'))
        this.localStorage.setItem('shoppingCart', undefined);

    AddToShoppingCart([]);
    
    this.fetch('https://striveschool-api.herokuapp.com/books').
    then(function(promise){

        if(!promise.ok)
            throw new Error(1, {cause: 'richiesta non andata a buon fine'});

        return promise.json();
        
    }).
    then(function(bookList){

        books = bookList;
        console.log(books);
        books.forEach(book => {

            booksLibraryContainer.
                appendChild(
                    CreateBootstrapCard(book.asin, book.img, book.title, `Price: ${book.price}€ - category: ${book.category}`
                    )
                );

        });

    }).
    catch(function(error){
        console.log(error);

    })

});


function CreateBootstrapCard(cardId, imgSource, title, textContent) {
    const col = document.createElement('div');
    col.classList.add('col');

    const card = document.createElement('div');
    card.classList.add('card');
    card.id = cardId;

    const cardImg = document.createElement('img');
    cardImg.src = imgSource;
    cardImg.classList.add('card-img-top');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerText = textContent;

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    btnGroup.role = 'group';
    btnGroup['aria-label'] = 'Card Buttons';

    const discardBtn = document.createElement('button');
    discardBtn.type = 'button';
    discardBtn.classList.add('btn', 'btn-sm', 'btn-danger');
    discardBtn.innerText = 'discard';
    discardBtn.addEventListener('click', function (event) {
        event.
            target.
            closest('.col').
            classList.add('d-none');
    });

    const buyNowBtn = document.createElement('button');
    buyNowBtn.type = 'button';
    buyNowBtn.classList.add('btn', 'btn-sm', 'btn-info');
    buyNowBtn.innerText = 'Buy Now!';
    buyNowBtn.addEventListener('click', function (event) {
        const clickedBook = books.find((book) => book.asin === event.target.closest('.card').getAttribute('id'));

        AddToShoppingCart(clickedBook)
    });


    card.appendChild(cardImg);
    
    btnGroup.appendChild(buyNowBtn);
    btnGroup.appendChild(discardBtn);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnGroup);

    card.appendChild(cardBody);

    col.appendChild(card);

    return col;
}


function AddToShoppingCart(item){
    let shopingCart = localStorage.getItem('shoppingCart') !== 'undefined' ? JSON.parse(localStorage.getItem('shoppingCart')) : [];

    shopingCart.push(item);

    shoppingCartContainer.innerHTML = '';
    shopingCart.forEach(book => {
        CreateShoppingCartCard(book)
    });

    localStorage.setItem('shoppingCart', JSON.stringify(shopingCart));

    const shoppingCartCount = document.getElementById('shoppingCartCount');

    shoppingCartCount.innerText = shopingCart.length;

}

function DeleteToShoppingCart(itemID){
    if(localStorage.getItem('shoppingCart') === 'undefined')
        return;

    let shopingCart = JSON.parse(localStorage.getItem('shoppingCart'));

    const indexToDelete = shopingCart.findIndex(book => book.asin === itemID);

    shopingCart.splice(indexToDelete,1);

    shoppingCartContainer.innerHTML = '';
    shopingCart.forEach(book => {
        CreateShoppingCartCard(book)
    });

    localStorage.setItem('shoppingCart', JSON.stringify(shopingCart));

    const shoppingCartCount = document.getElementById('shoppingCartCount');

    shoppingCartCount.innerText = shopingCart.length;

}

function CreateShoppingCartCard(item){
    if(item.length === 0)
        return;


    const card = document.createElement('div');
    card.classList.add('card');
    card.id = item.asin;

    const cardRow = document.createElement('div');
    cardRow.classList.add('row', 'g-0');

    const cardCol = document.createElement('div');
    cardCol.classList.add('col');

    const innerCardImgCol = document.createElement('div');
    innerCardImgCol.classList.add('col-4');

    const cardImg = document.createElement('img');
    cardImg.classList.add('img-fluid','rounded-start')
    cardImg.src = item.img;

    const innerCardBodyCol = document.createElement('div');
    innerCardBodyCol.classList.add('col-8');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = item.title;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');

    const cardTextSmall =  document.createElement('small');
    cardTextSmall.classList.add('text-muted');
    cardTextSmall.innerText = `${item.price}€`;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.addEventListener('click', function(event){
        const bookId = 
            event.
            target.
            closest('.card').
            id;


        DeleteToShoppingCart(bookId)
    });

    cardText.appendChild(cardTextSmall);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(deleteBtn);

    innerCardImgCol.appendChild(cardImg);
    
    innerCardBodyCol.appendChild(cardBody);

    cardRow.appendChild(innerCardImgCol);
    cardRow.appendChild(innerCardBodyCol);

    card.appendChild(cardRow);

    shoppingCartContainer.appendChild(card);

}