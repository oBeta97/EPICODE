/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 4, n2 = 4;

if(typeof(n1) != 'number')
    throw('n1 non è un numero, malissimo!');
else if(typeof(n2) != 'number')
    throw('n2 non è un numero, malissimo!');
else if ( n1 > n2 )
    console.log('n1 è maggiore a n2');
else if (n2 > n1)
    console.log('n2 è maggiore di n1');
else if (n1 === n2)
    console.log('n1 ed n2 sono uguali');
else 
    console.log('bravo hai trovato un bug! :D');

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    if( n1 != 5)
        console.log('n1 è diverso da 5');
    else 
        console.log('n1 è ugugale a 5');

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    if(n1 % 5 === 0 )
        console.log('n1 è divisibile per 5');
    else 
        console.log('n1 non è divisibile per 5');

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    // if(n1 === 8 || n2 === 8 || n1 + n2 === 8 || n1 + n2 === 8)
    if(n1 === 8)
        console.log('n1 è 8');
    else if(n2 === 8)
        console.log('n2 è 8');
    else if(n1 + n2 === 8)
        console.log('la somma tra n1 e n2 fa 8');
    else if(n1 - n2 === 8)
        console.log('la sottrazione tra n1 e n2 fa 8');
    else 
        console.log('n1 ed n2 non sono 8 e la loro somma o sottrazione non fa 8');


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    let totalShoppingCart = 52;
    let shippingCost = 10;
    let salePerc = 20;

    let totAfterSale = totalShoppingCart * (salePerc /100);

    if(totAfterSale > 50)
        console.log('il costo spedizione è: ' + totAfterSale);
    else if(totAfterSale < 50 && totAfterSale > 0)
        console.log('il costo della spedizione è ' + totAfterSale + shippingCost + ' (10 di spedizione)');
    else 
        console.log('ti dobbiamo dei soldi! Accipicchia');


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    let x1 = 2;
    let x2 = 1;
    let x3 = 3;

    let resString = '';

    if(x1 != x2 && x1 != x3 && x2 != x3){


        // sono poco furbo e mi sono complicato la vita

        // if(x1 > x2 && x1 > x3)
        //     resString +='Il valore più grande è x1: ' + x1;
        // else if(x2 > x1 && x2 > x3)
        //     resString +='Il valore più grande è x2: ' + x2;
        // else if(x3 > x1 && x3 > x2)
        //     resString +='Il valore più grande è x3: ' + x3;
        
        // resString += ' - ';
        
        // if(x1 > x2 && x1 < x3 || x1 < x2 && x1 > x3)
        //     resString +='Il secondo valore più grande è x1: ' + x1;
        // else if(x2 > x1 && x2 < x3 || x2 < x1 && x2 > x3)
        //     resString +='Il secondo valore più grande è x2: ' + x2;
        // else if(x3 > x1 && x3 < x2 || x3 < x1 && x3 > x2)
        //     resString +='Il secondo valore più grande è x3: ' + x3;

        // resString += ' - ';
        
        // if(x1 < x2 && x1 < x3 || x1 < x2 && x1 < x3)
        //     resString +='Il terzo valore più grande è x1: ' + x1;
        // else if(x2 < x1 && x2 < x3 || x2 < x1 && x2 < x3)
        //     resString +='Il terzo valore più grande è x2: ' + x2;
        // else if(x3 < x1 && x3 < x2 || x3 < x1 && x3 < x2)
        //     resString +='Il terzo valore più grande è x3: ' + x3;

        if(x1 > x2 && x2 > x3)
            resString +='x1, x2, x3';
        else if(x1 > x3 && x3 > x2)
            resString +='x1, x3, x2';
        else if(x2 > x1 && x1 > x3)
            resString +='x2, x1, x3';
        else if(x2 > x3 && x3 > x1)
            resString +='x2, x3, x1';
        else if(x3 > x1 && x1 > x2)
            resString +='x3, x1, x2';
        else if (x3 > x2 && x2 > x1)
            resString +='x3, x2, x1';
        else
            resString +='Bravo! Combinazione inesistente'


    } else
        resString += 'n1, n2 e n3 sono uguali';

    console.log(resString);


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    if(n1 % 2 === 0)
        console.log('n1 è pari! :D');
    else 
    console.log('n1 è dispari! D:');

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    let val = 53;

    if (val < 5) {
        console.log("Meno di 5");
    } else if (val <= 10) {
        console.log("tra 5 e 10");
    } else {
        console.log("Maggiore di 10");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
    }

    me.city = "toronto";

    console.log('oggetto me: ', me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    delete me.lastName;

    console.log('oggetto me post delete: ', me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    me.skills.pop();

    console.log('oggetto me post pop: ', me);
    
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    let arr = [];
    let i = 1;

    while(i <= 10)
        arr.push(i++);

    console.log('arr: ', arr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

    arr[arr.length -1 ] = 100;
    console.log('arr con ultimo valore variato: ', arr);
