class User {

    firstName = undefined;
    lastName = undefined;
    age = undefined;
    location = undefined;

    amIOlderThen = function (otherUser){

        if(this.age === undefined || otherUser.age === undefined)
            throw `impossibile verificare chi è più vecchio`


        if(otherUser.age > this.age)
            return `${otherUser.firstName} è più vecchio di me`

        if(this.age > otherUser.age )
        return `Io sono più vecchio di ${otherUser.firstName}`;

        return `Abbiamo la stessa età`;
    }

    constructor(_firstName, _lastName, _age, _location){
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
}


class Pet {

    petName = undefined;
    ownerName = undefined;
    species = undefined;
    breed = undefined;

    hasSameOwner = (otherPet) => otherPet.ownerName === this.ownerName;

    toString = () => `nome: ${this.petName}, proprietario: ${this.ownerName}, specie: ${this.species}, razza: ${this.breed}`;
    
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }
}