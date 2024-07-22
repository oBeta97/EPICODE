const Baolo = new User('Paolo','Pellizzari', 27, 'Crespadoro');
const Norfo = new User('Antonio', 'Norfo', 25, 'Da qualche parte in Sicilia');
const Barone = new User('Manuel', 'Barone', undefined, 'Napulé');

console.log('Baolo>Norfo: ', Baolo.amIOlderThen(Norfo));
console.log('Norfo>Baolo: ', Norfo.amIOlderThen(Baolo));

try{
    console.log('Barone>Baolo: ', Barone.amIOlderThen(Baolo));
}
catch (e){
    console.log(e);
}


const pets = [];

const petList = document.getElementById('petList');

window.addEventListener("load", function(event){
    const petNameInput = document.getElementById('petNameInput');
    const ownerNameInput = document.getElementById('ownerNameInput');
    const SpeciesInput = document.getElementById('SpeciesInput');
    const breedInput = document.getElementById('breedInput');
    const insertPetForm = document.getElementById('insertPetForm');
    const formBtn = document.getElementById('formBtn');
    
    
    insertPetForm.addEventListener("submit", function(event){
        event.preventDefault();
        const pet = new Pet(petNameInput.value, ownerNameInput.value, SpeciesInput.value, breedInput.value);
    
        pets.forEach(pet => {
            if(pet.hasSameOwner(pet))
                alert(`anche ${pet.petName} è dello stesso proprietario`);
        });


        pets.push(pet);    
        
        RefreshPetList();
    })
    
});


function RefreshPetList (){
    petList.innerHTML ='';

    pets.forEach((pet) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = pet.toString();

        petList.append(li);
    });

}


