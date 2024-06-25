/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function CrazyConcat(s1, s2) {
  return (
    s1
      .slice(0, 2)
      .concat(s2.slice(3))
      .toUpperCase()
  );
}

let stringa1 = 'EPICODE', stringa2 = 'EPICODE';
console.log(`esercizio 1 CrazyConcat('${stringa1}','${stringa2}')`, CrazyConcat(stringa1, stringa2))

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
  opzionale: estendere a valori singoli
*/

function RandomNumberArray() {
  let res = [];
  let extraLopps = 0
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 101);


    // if(res.indexOf(randomNumber) === -1)
    //   res.push(randomNumber);
    // else{
    //   extraLopps++;
    //   i--;
    // }

    // if (res.some(item => item === randomNumber)){
    //   extraLopps++;
    //    i--;
    // }
    // else
    //   res.push(randomNumber);

    // if (res.every(item => item !== randomNumber))
    //   res.push(randomNumber);
    // else{
    //   extraLopps++;
    //   i--;
    // }

    if (res.find(item => item === randomNumber)) {
      extraLopps++;
      i--;
    }
    else
      res.push(randomNumber);

  }
  console.log('esercizio 2 extraLopps ', extraLopps)

  return res;
}

let randomArray = RandomNumberArray();

console.log(`esercizio 2 RandomNumberArray()`, randomArray);


/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

let evenNumber = randomArray.filter((item) => item % 2 === 0);

console.log(`esercizio 3 randomArray.filter((item) => item % 2 === 0);`, evenNumber);


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

let summedArray = 0;

randomArray.forEach((item) => summedArray += item);

console.log(`esercizio 4 randomArray.forEach((item) => summedArray += item);`, summedArray);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

summedArray = randomArray.reduce((pv, item) => pv + item)

console.log(`esercizio 5 randomArray.reduce((pv, item) => pv + item)`, summedArray);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function AddToArray(arr, n) {

  return arr.map(item => item + n);
}

let ArrayChanged = AddToArray(randomArray, 1000);

console.log(`esercizio 6 arr.map(item => item + n);`, ArrayChanged);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
let stringArray = ["EPICODE", "is", "great"];

function ArrayStringsLength(arr) {
  return arr.map(item => item.length);
}

let stringsArrayLength = ArrayStringsLength(stringArray);

console.log(`esercizio 7 arr.map(item => item.length);`, stringsArrayLength);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

function OddNumbersTo99For() {
  let res = [];
  for (var i = 1; i <= 99; i++)
    if (i % 2 !== 0)
      res.push(i);

  return res;
}

let oddNumersArray = OddNumbersTo99For();

console.log(`esercizio 8 oddNumersArray (for)`, oddNumersArray);


function OddNumbersTo99ForEach() {
  let res = [];
  let temp = [];

  for(let i = 0; i < 100; i++)
    temp.push(i);

  // console.log('esercizio 7 temp var: ', temp)
  temp.forEach((item) => item % 2 !== 0 ? res.push(item) : null);

  return res;
}

oddNumersArray = OddNumbersTo99ForEach();

console.log(`esercizio 8 oddNumersArray (foreach)`, oddNumersArray);


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function OldestMovie(arrObjs){
  let res;

  arrObjs.forEach((item) => {
    if(res === undefined || res.Year > item.Year)
      res = item;
  });

  return res;
}

let oldestMovie = OldestMovie(movies);

console.log(`esercizio 9 oldestMovie`, oldestMovie);

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const CountMovies = (arrObjs) => arrObjs.length;

let moviesCount = CountMovies(movies)

console.log(`esercizio 10 const CountMovies = (arrObjs) => arrObjs.length;`, moviesCount);


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function GetNameMovies(arrObjs){
  let res = arrObjs.map(item => item.Title);

  return res;
}

let movieNames = GetNameMovies(movies);

console.log(`esercizio 11 arrObjs.map(item => item.Title)`, movieNames);


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const MoviesFrom2000s = (arrObjs) => arrObjs.filter(item => item.Year >= 2000);

let moviesFrom2000s = MoviesFrom2000s(movies);

console.log(`esercizio 12 arrObjs.filter(item => item.Year >= 2000);`, moviesFrom2000s);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const SumMoviesYear = (arrObjs) => arrObjs.reduce((sum, item) => sum + parseInt(item.Year) , 0);

let summedMovieYears = SumMoviesYear(movies);

console.log(`esercizio 13 arrObjs.reduce((sum, item) => sum + item.Year , 0)`, summedMovieYears);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const FindMovieById = (arrObjs, id) => arrObjs.find(item => item.imdbID === id);

let MovieFound = FindMovieById(movies, 'tt2395427');

console.log(`esercizio 14 arrObjs.find(item => item.imdbID === id)`, MovieFound);

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const FindMovieIndexByYear = (arrObjs, year) => arrObjs.findIndex(item => item.Year === year.toString());

MovieFound = FindMovieIndexByYear(movies, 2012);

console.log(`esercizio 15 FindMovieIndexByYear()`, MovieFound);


// ------------------------------------------------- //

function FindMovieIndexByNearestYear(arrObjs, year){
  let res;
  let yearPlus = year, yearMinus = year;
  
  while(res === undefined){

    let index = arrObjs.findIndex(item => item.Year === yearPlus.toString());

    if(index === -1)
      index = arrObjs.findIndex(item => item.Year === yearMinus.toString());

    index !== -1 ? res = index : null;

    yearPlus++;
    yearMinus--;
  }

  return res;

}

MovieFound = FindMovieIndexByNearestYear(movies, 1991);

console.log(`esercizio 15 FindMovieIndexByNearestYear()`, MovieFound);

