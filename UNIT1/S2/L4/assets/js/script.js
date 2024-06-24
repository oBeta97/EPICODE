/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let base = 19, altezza = 5;

let area = (l1,l2) => l1 * l2;

console.log(`area(${base},${altezza}): `, area(base,altezza));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1,n2){
    if(typeof(n1) !== 'number' || typeof(n2) !== 'number')
return null; 

    return n1 === n2 ? (n1 + n2) * 3 : n1 + n2;
}

console.log(`crazySum(${base}, ${altezza}): `,crazySum(base, altezza))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1){
    if(typeof(n1) !== 'number')
        return null;

    return n1 >= 19 ? (n1 - 19) * 3 : 19 - n1;
}

console.log(`crazyDiff(${base}): `,crazyDiff(base))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let boundary = (n) => n > 20 && n<= 100 || n === 400;

console.log(`boundary(${base}): `,boundary(base))


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let string = 'ciao come stai';

function epify(s){
    if(typeof(s) !== 'string')
        return null;

    return s.toLowerCase().indexOf('epicode') === 0 ? s : 'EPICODE - '.concat(s); 
}

console.log(`epify(${string}): `,epify(string));



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n){
    if(typeof(n) !== 'number' || n < 0)
        return null;

    return n % 3 === 0 || n % 7 === 0;
}

console.log(`check3and7(${base}): `,check3and7(base));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(s){
    if(typeof(s) !== 'string')
        return null;

    let res = '';
    s = s.split('');

    for(let i = s.length-1; i >= 0; i--)
        res+=s[i];

    return res;
}

console.log(`reverseString(${string}): `,reverseString(string));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(s){
    if(typeof(s) !== 'string')
        return null;

    let res = '';
    s = s.split(' ');

    for(let i = 0; i < s.length; i++){
        s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);

        res = res.concat(s[i], i <= s.length -1 ? ' ' : '');
    }

    return res;
}

console.log(`upperFirst(${string}): `,upperFirst(string));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = (s) =>  s.substring(1, s.length -1);

console.log(`cutString(${string}): `,cutString(string));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    let res = []
    for(let i = 0; i < n; i++)
        res.push(Math.floor(Math.random()*11));

    return res;
}

console.log(`giveMeRandom(${base}): `,giveMeRandom(base));




