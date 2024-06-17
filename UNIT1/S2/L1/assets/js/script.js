/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* 

string: Caratteri concatenati inclusi tra apici o virgolette.

int: valore numerico contenuto tra ±9 trilioni circa (che schifo).

bool: con questo tipo la variabile può assumere o il valore true o false (0/1)

*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let myName = 'Paolo';
console.log('myName: ', myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 12, n2 = 20;

let sum = n1 + n2;
console.log('sum: ', sum);

// Per fare il figo

function sumFunction(...args){
    let res = 0;
    for(let num of args){

        if(typeof(args) === 'number'){
            res+= num
            continue;
        }

        // array management
        if(Array.isArray(num)){
            for(let n of num){
                res += n;
            }
        }
        // other types managment
        else
            return null;
    }

    return res;
}

let res = sumFunction({n1:1,n2:2}) 
console.log('sumFunction: ', res != null ? res : 'Tipo non valido')

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log('x: ', x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

myName = 'Pellizzari';
console.log('myName: ', myName);

const myFirstName = 'Pellizzari'; /* Valore non modificabile */
// myFirstName = 'Paolo'; /* Questa riga genera errore dato che le costanti non possono essere modificate! */
console.log('myFirstName: ', myFirstName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let sub = 4 - x;
console.log('sub: ', sub);

// Per fare il figo

function MySort(array){
    if(Array.isArray(array)){
        let i = 0;
        let swap;
        do{
            swap = false
            let nextIndex = i+1;
            if(array[i] < array[nextIndex] && array[i] != undefined && array[nextIndex] != undefined){
                let cache = array[i];
                array[i] = array[nextIndex];
                array[nextIndex] = cache;
                swap = true
            }

            if(swap)
                i=0;
            else
                i++;
        } while(swap || i <= array.length)
    }
    return array;
}

function SubFunction(...args){
    let res = null;
    let argsValues = args[0];
    if(Array.isArray(argsValues)){
        MySort(argsValues);

        for(num of argsValues)
            res === null ? res = num : res -= num;

    }
    return res;

}

console.log('SubFunction', SubFunction([4,12]))

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john', name2 = 'John';

name1 !== name2 ? console.log('diversi') : console.log('Uguali');

name1.toLowerCase() !== name2.toLowerCase() ? console.log('diversi') : console.log('Uguali');
