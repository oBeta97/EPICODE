window.addEventListener('load', () => {
    const trips = Array.from(document.getElementsByClassName('card-trip'));
    const countTrips = document.getElementById('countTrips');
    const removeAllCards = document.getElementById('removeAllCards');
    const cardImgContainers = Array.from(document.getElementsByClassName('card-img-container'));
    
    countTrips.addEventListener("click", () => {
        alert(`nr viaggi disponibili: ${trips.length}`)
    })

    cardImgContainers.forEach(element => {
        
        const hotSpan = document.createElement('span');
        hotSpan.innerText = 'HOT';
        hotSpan.classList.add('badge', 'rounded-pill', 'bg-danger', 'hot-pill', 'position-absolute', 'm-2', 'top-0', 'end-0');

        element.appendChild(hotSpan);
    });

    removeAllCards.addEventListener('click',() => {
        trips.forEach(element => {
            element.classList.toggle('d-none');
        });
    });

})