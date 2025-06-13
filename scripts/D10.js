/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = { name: "Antimo", surname: "Mandorino", age: 34 };
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["JavaScript", "HTML", "CSS"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("IDK");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
let dice = () => Math.floor(Math.random() * 6) + 1;
console.log(dice());
/*Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
 */
const whoIsBigger = (n1, n2) => Math.max(n1, n2);
console.log(whoIsBigger(10, 5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (s) => s.split(" ");
console.log(splitMe("I love coding"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (s, bool) => {
  if (bool === true) {
    return s.slice(1);
  } else {
    return s.slice(0, -1);
  }
};
console.log(deleteOne("Hello", true));
console.log(deleteOne("JavaScript", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isNaN(parseInt(char)) || char === "") {
      result += char;
    }
  }
  return result;
};
console.log(onlyLetters("I have 4 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (email) => {
  const emailRejection = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRejection.test(email);
};
console.log(isThisAnEmail("test@example.com"));
console.log(isThisAnEmail("invalid_email"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const today = new Date();
  const dayNumber = today.getDay();
  const daysOfWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return daysOfWeek[dayNumber];
};
console.log("Oggi è:", whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (n) => {
  let sum = 0;
  const values = [];
  for (let i = 0; i < n; i++) {
    const singleRoll = dice();
    values.push(singleRoll);
    sum += singleRoll;
  }
  return {
    sum: sum,
    values: values,
  };
};
console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {
  const today = new Date();
  const inputDate = new Date(date);
  const differenceMilliseconds = today.getTime() - inputDate.getTime();
  const millisecondsForDay = 1000 * 60 * 60 * 24;
  const daysPassed = Math.floor(differenceMilliseconds / millisecondsForDay);
  return daysPassed;
};
const dataInizioAnno = new Date("2025-01-01T00:00:00");
console.log(
  "Giorni trascorsi dal 1° Gennaio 2025:",
  howManyDays(dataInizioAnno)
);
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = () => {
  const myBirthday = new Date(1990, 7, 31);
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const birthdayDay = myBirthday.getDate();
  const birthdayMonth = myBirthday.getMonth();
  if (todayDay === birthdayDay && todayMonth === birthdayMonth) {
    return true;
  } else {
    return false;
  }
};
console.log("Oggi è il mio compleanno?", isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (obj, propToDelete) => {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
  return obj;
};
console.log(deleteProp(me, "surname"));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = (moviesArray) => {
  let newest = moviesArray[0];
  for (let i = 0; i < moviesArray.length; i++) {
    const currentMovie = moviesArray[i];
    if (parseInt(currentMovie.Year) > parseInt(newest.Year)) {
      newest = currentMovie;
    }
  }
  return newest;
};
console.log("Il film più recente è:", newestMovie(movies));

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (moviesArray) => {
  return moviesArray.length;
};
console.log("Numero di film : ", countMovies(movies));
/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (moviesArray) => {
  const years = [];
  for (let i = 0; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    years.push(movie.Year);
  }
  return years;
};
console.log("Anni di uscita dei film:", onlyTheYears(movies));
/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (moviesArray) => {
  const lastMillenniumMovies = [];
  for (let i = 0; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    const movieYear = parseInt(movie.Year);
    if (movieYear <= 2000) {
      lastMillenniumMovies.push(movie);
    }
  }
  return lastMillenniumMovies;
};
console.log("Film del millennio scorso:", onlyInLastMillennium(movies));
/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (moviesArray) => {
  let totalYears = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    const movie = moviesArray[i];
    const movieYear = parseInt(movie.Year);
    totalYears += movieYear;
  }
  return totalYears;
};
console.log("Somma totale degli anni dei film:", sumAllTheYears(movies));
/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (str) => {
  if (typeof str !== "string" || str.trim() === "") {
    return [];
  }
  const lowerCaseStr = str.toLowerCase();
  const matchingMovies = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieTitleLower = movie.Title.toLowerCase();
    if (movieTitleLower.includes(lowerCaseStr)) {
      matchingMovies.push(movie);
    }
  }
  return matchingMovies;
};
console.log("Ricerca per 'Lord':", searchByTitle("Lord"));
/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (str) => {
  if (typeof str !== "string" || str.trim() === "") {
    return {
      match: [],
      unmatch: [],
    };
  }
  const lowerCaseSearchStr = str.toLowerCase();
  const result = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const movieTitleLower = movie.Title.toLowerCase();
    if (movieTitleLower.includes(lowerCaseSearchStr)) {
      result.match.push(movie);
    } else {
      result.unmatch.push(movie);
    }
  }
  return result;
};
console.log("Risultati per 'Lord':", searchAndDivide("Lord"));
/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (indexToRemove) => {
  if (
    typeof indexToRemove !== "number" ||
    indexToRemove < 0 ||
    indexToRemove >= movies.length
  ) {
    return [...movies];
  }
  const newMoviesArray = [...movies];
  newMoviesArray.splice(indexToRemove, 1);
  return newMoviesArray;
};
console.log(removeIndex(0));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectContainer = () => {
  const containerElement = document.getElementById("container");
  return containerElement;
};
console.log(selectContainer());

/* ESERCIZIO 21
Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectAllTdTags = () => {
  const tdElements = document.getElementsByTagName("td");
  return tdElements;
};
console.log(selectAllTdTags());
/* ESERCIZIO 22
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const printTdContent = () => {
  const tdElements = selectAllTdTags();
  if (tdElements.length === 0) {
    console.log("Nessun tag <td> trovato nella pagina.");
    return;
  }
  console.log("Contenuto dei tag <td>");
  for (let i = 0; i < tdElements.length; i++) {
    const currentTd = tdElements[i];
    console.log(`Cella ${i + 1}: ${currentTd.textContent}`);
  }
};
printTdContent();
/* ESERCIZIO 23
Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const addRedBackground = () => {
  const allLinks = document.getElementsByTagName("a");
  for (let i = 0; i < allLinks.length; i++) {
    const currentLink = allLinks[i];
    currentLink.style.backgroundColor = "red";
  }
};
addRedBackground();
/* ESERCIZIO 24
Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addListItem = (textContent = "Nuovo elemento della lista") => {
  const myList = document.getElementById("myList");
  const newListItem = document.createElement("li");
  newListItem.textContent = textContent;
  myList.appendChild(newListItem);
};
addListItem();
/* ESERCIZIO 25
Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const clearList = () => {
  const myList = document.getElementById("myList");
  myList.innerHTML = "";
};
clearList();
/* ESERCIZIO 26
Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassToTr = () => {
  const allTrElements = document.getElementsByTagName("tr");
  for (let i = 0; i < allTrElements.length; i++) {
    const currentTr = allTrElements[i];
    currentTr.classList.add("test");
  }
};
addClassToTr();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

Esempio:
halfTree(3)

*
**
***

*/
const halfTree = (height) => {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let x = 0; x < i; x++) {
      row += "*";
    }
    console.log(row);
  }
};
halfTree(3);

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

Esempio:
tree(3)

*
***
*****

*/
const tree = (height) => {
  for (let i = 0; i < height; i++) {
    let row = "";
    const numSpaces = height - 1 - i;
    const numStars = 2 * i + 1;
    for (let s = 0; s < numSpaces; s++) {
      row += " ";
    }
    for (let k = 0; k < numStars; k++) {
      row += "*";
    }
    console.log(row);
  }
};
tree(3);
/* ESERCIZIO 29
Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
console.log("isItPrime(7):", isItPrime(7));
console.log("isItPrime(100):", isItPrime(100));
console.log("isItPrime(23):", isItPrime(23));
