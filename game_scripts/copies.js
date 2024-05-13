/*function getRandomWords(words, count) {
    if (words.length < count) {
      console.log(`Requested ${count} words, but only have ${words.length} words available.`);
      return [];
    }
  
    let randomWords = [];
    let wordsCopy = [...words]; // tworzymy kopię tablicy, aby nie modyfikować oryginalnej
    for(let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * wordsCopy.length);
      randomWords.push(wordsCopy[randomIndex]);
      wordsCopy.splice(randomIndex, 1); // usuwamy wylosowane słowo, aby uniknąć powtórzeń
    }
    return randomWords;
  }
  
  let randomWords = getRandomWords(words, 5);
  console.log(randomWords);

  let displayLanguage = "english"; // język wyświetlany
let inputLanguage = "polish"; // język wprowadzany przez użytkownika

let usedWords = []; // tablica użytych już słów

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (usedWords.includes(word.english));
  usedWords.push(word.english);
  return word;
}

function checkWord() {
  let enteredWord = document.getElementById("entered_word").value;
  if (enteredWord === currentWord.translations[inputLanguage]) {
    alert("Dobrze!");
    startGame(); // rozpocznij kolejną rundę
  } else {
    alert("Niestety, to nie jest poprawne tłumaczenie.");
  }
}

function startGame() {
  currentWord = getRandomWord();
  document.getElementById("searched_word").innerText = currentWord[displayLanguage];
  document.getElementById("entered_word").value = "";
}

let currentWord = getRandomWord();
document.getElementById("searched_word").innerText = currentWord[displayLanguage];

document.getElementById("entered_word").addEventListener("change", checkWord);


let displayLanguage = "english"; // język wyświetlany
let inputLanguage = "polish"; // język wprowadzany przez użytkownika

let usedWords = []; // tablica użytych już słów

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (usedWords.includes(word.english));
  usedWords.push(word.english);
  return word;
}

function checkWord() {
  let enteredWord = document.getElementById("entered_word").value;
  if (enteredWord === currentWord.translations[inputLanguage]) {
    document.getElementById("result").innerText = "Dobrze!";
    startGame(); // rozpocznij kolejną rundę
  } else {
    document.getElementById("result").innerText = "Niestety, to nie jest poprawne tłumaczenie.";
  }
}

function startGame() {
  currentWord = getRandomWord();
  document.getElementById("searched_word").innerText = currentWord[displayLanguage];
  document.getElementById("entered_word").value = "";
  document.getElementById("result").innerText = ""; // resetujemy wynik
}

let currentWord = getRandomWord();
document.getElementById("searched_word").innerText = currentWord[displayLanguage];

document.getElementById("entered_word").addEventListener("change", checkWord);

let displayLanguage = "english"; // język wyświetlany
let inputLanguage = "polish"; // język wprowadzany przez użytkownika

let usedWords = []; // tablica użytych już słów

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (usedWords.includes(word.english));
  usedWords.push(word.english);
  return word;
}

function checkWord() {
  let enteredWord = document.getElementById("entered_word").value;
  if (enteredWord === currentWord.translations[inputLanguage]) {
    document.getElementById("result").innerText = "Dobrze!";
  } else {
    document.getElementById("result").innerText = "Niestety, to nie jest poprawne tłumaczenie.";
  }
  startGame(); // rozpocznij kolejną rundę
}

function startGame() {
  currentWord = getRandomWord();
  document.getElementById("searched_word").innerText = currentWord[displayLanguage];
  document.getElementById("entered_word").value = "";
}

let currentWord = getRandomWord();
document.getElementById("searched_word").innerText = currentWord[displayLanguage];

document.getElementById("entered_word").addEventListener("change", checkWord);
*/

/*let displayLanguage = "english"; // język wyświetlany
let inputLanguage = "polish"; // język wprowadzany przez użytkownika

let usedWords = []; // tablica użytych już słów

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (usedWords.includes(word.english));
  usedWords.push(word.english);
  return word;
}

function checkWord() {
  let enteredWord = document.getElementById("entered_word").value;
  if (enteredWord === currentWord.translations[inputLanguage]) {
    document.getElementById("result").innerText = "Dobrze!";
  } else {
    document.getElementById("result").innerText = "Niestety, to nie jest poprawne tłumaczenie. Poprawne tłumaczenie to: " + currentWord.translations[inputLanguage] + ".";
  }
  startGame(); // rozpocznij kolejną rundę
}

function startGame() {
  currentWord = getRandomWord();
  document.getElementById("searched_word").innerText = currentWord[displayLanguage];
  document.getElementById("entered_word").value = "";
}

let currentWord = getRandomWord();
document.getElementById("searched_word").innerText = currentWord[displayLanguage];

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // zapobiegamy domyślnej akcji przycisku submit
  checkWord();
});*/

/*let displayLanguage = "english"; // język wyświetlany
let inputLanguage = "polish"; // język wprowadzany przez użytkownika

let usedWords = []; // tablica użytych już słów

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (usedWords.includes(word.english));
  usedWords.push(word.english);
  return word;
}

let wordCount = 0;

function checkWord() {
    let enteredWord = document.getElementById("entered_word").value;
    if (enteredWord === currentWord.translations[inputLanguage]) {
      document.getElementById("result").innerText = "Dobrze!";
    } else {
      let correctTranslation = currentWord.translations[inputLanguage];
      document.getElementById("result").innerText = "Niestety, to nie jest poprawne tłumaczenie. Poprawne tłumaczenie to: " + correctTranslation + ".";
    }
    wordCount++;
    if (wordCount === 5) {
      displayResult();
    } else {
      startGame(); // rozpocznij kolejną rundę
    }
  }
function displayResult() {
    document.getElementById("result").innerText = "Twój wynik: " + score;
    //document.getElementById("game").innerHTML = "";
  }
  
function startGame() {
  currentWord = getRandomWord();
  document.getElementById("searched_word").innerText = currentWord[displayLanguage];
  document.getElementById("entered_word").value = "";
}

let currentWord = getRandomWord();
document.getElementById("searched_word").innerText = currentWord[displayLanguage];

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // zapobiegamy domyślnej akcji przycisku submit
  checkWord();
});

*/

/*let displayLanguage = "english"; // język wyświetlany
let inputLanguage = "polish"; // język wprowadzany przez użytkownika

let usedWords = []; // tablica użytych już słów

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (usedWords.includes(word.english));
  usedWords.push(word.english);
  return word;
}

let totalWords = 5; // liczba słów do wyświetlenia
let wordCount = 0; // licznik słów
let results = []; // tablica wyników

function checkWord() {
    let enteredWord = document.getElementById("entered_word").value;
    let originalWord = currentWord[displayLanguage];
    let translation = currentWord.translations[inputLanguage];
  
    let result = {
      original: originalWord,
      translation: translation,
      userAnswer: enteredWord
    };
  
    results.push(result); // Dodajemy wynik do tablicy
  
    if (enteredWord === translation) {
      document.getElementById("result").innerText = "Dobrze!";
    } else {
      document.getElementById("result").innerText = "Niestety, to nie jest poprawne tłumaczenie. Poprawne tłumaczenie to: " + translation + ".";
    }
    wordCount++;
    if (wordCount === totalWords) {
      displayResult();
    } else {
      startGame(); // rozpocznij kolejną rundę
    }
  }

function displayResult() {
  // Usuń zawartość elementu "game"
  document.getElementById("game").innerHTML = "";

  // Wyświetl wyniki
  let resultContainer = document.createElement("div");
  for (let i = 0; i < results.length; i++) {
    let result = results[i];
    let resultElement = document.createElement("p");
    resultElement.textContent = "Słowo: " + result.original + ", Tłumaczenie: " + result.translation + ", Odpowiedź użytkownika: " + result.userAnswer;
    resultContainer.appendChild(resultElement);
  }
  document.getElementById("game").appendChild(resultContainer);
}
  
function startGame() {
  currentWord = getRandomWord();
  document.getElementById("searched_word").innerText = currentWord[displayLanguage];
  document.getElementById("entered_word").value = "";
}

let currentWord = getRandomWord();
document.getElementById("searched_word").innerText = currentWord[displayLanguage];

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // zapobiegamy domyślnej akcji przycisku submit
  checkWord();
});
*/


const words = [
    {
      word: "apple",
      translations: {
        english: "apple",
        polish: "jabłko",
        german: "Apfel",
        italian: "mela"
      }
    },
    {
      word: "book",
      translations: {
        english: "book",
        polish: "książka",
        german: "Buch",
        italian: "libro"
      }
    },
    {
      word: "car",
      translations: {
        english: "car",
        polish: "samochód",
        german: "Auto",
        italian: "auto"
      }
    },
    {
      word: "dog",
      translations: {
        english: "dog",
        polish: "pies",
        german: "Hund",
        italian: "cane"
      }
    },
    {
      word: "elephant",
      translations: {
        english: "elephant",
        polish: "słoń",
        german: "Elefant",
        italian: "elefante"
      }
    },
    {
      word: "flower",
      translations: {
        english: "flower",
        polish: "kwiat",
        german: "Blume",
        italian: "fiore"
      }
    },
    {
      word: "guitar",
      translations: {
        english: "guitar",
        polish: "gitara",
        german: "Gitarre",
        italian: "chitarra"
      }
    },
    {
      word: "house",
      translations: {
        english: "house",
        polish: "dom",
        german: "Haus",
        italian: "casa"
      }
    },
    {
      word: "island",
      translations: {
        english: "island",
        polish: "wyspa",
        german: "Insel",
        italian: "isola"
      }
    },
    {
      word: "jacket",
      translations: {
        english: "jacket",
        polish: "kurtka",
        german: "Jacke",
        italian: "giacca"
      }
    }
  ];
  
  let totalWords = 5; // liczba słów do wyświetlenia
  let wordCount = 0; // licznik słów
  let results = []; // tablica wyników
  let usedWords = []; // tablica użytych słów
  
  let displayLanguage = "english"; // język wyświetlany
  let inputLanguage = "polish"; // język wprowadzany przez użytkownika
  
  function getRandomWord() {
    let word;
    do {
      word = words[Math.floor(Math.random() * words.length)];
    } while (usedWords.includes(word.translations[displayLanguage]));
    usedWords.push(word.translations[displayLanguage]);
    return word;
  }
  
  function checkWord() {
    let enteredWord = document.getElementById("entered_word").value;
    let originalWord = currentWord.translations[displayLanguage];
    let translation = currentWord.translations[inputLanguage];
  
    let result = {
      original: originalWord,
      translation: translation,
      userAnswer: enteredWord
    };
  
    results.push(result); // Dodajemy wynik do tablicy
  
    if (enteredWord === translation) {
      document.getElementById("result").innerText = "Dobrze!";
    } else {
      document.getElementById("result").innerText = "Niestety, to nie jest poprawne tłumaczenie. Poprawne tłumaczenie to: " + translation + ".";
    }
    wordCount++;
    if (wordCount === totalWords) {
      displayResult();
    } else {
      startGame(); // rozpocznij kolejną rundę
    }
  }
  
  function displayResult() {
    // Usuń zawartość elementu "game"
    document.getElementById("game").innerHTML = "";
  
    // Wyświetl wyniki
    let resultContainer = document.createElement("div");
    for (let i = 0; i < results.length; i++) {
      let result = results[i];
      let resultElement = document.createElement("p");
      resultElement.textContent = "Słowo: " + result.original + ", Tłumaczenie: " + result.translation + ", Odpowiedź użytkownika: " + result.userAnswer;
      resultContainer.appendChild(resultElement);
    }
    document.getElementById("game").appendChild(resultContainer);
  }
  
  function startGame() {
    currentWord = getRandomWord();
    document.getElementById("searched_word").innerText = currentWord.translations[displayLanguage];
    document.getElementById("entered_word").value = "";
  }
  
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); // zapobiegamy domyślnej akcji przycisku submit
    checkWord();
  });
  
  let currentWord = getRandomWord();
  document.getElementById("searched_word").innerText = currentWord.translations[displayLanguage];
  
