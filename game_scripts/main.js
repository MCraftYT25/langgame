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

let displayLanguage = "italian"; // język wyświetlany
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

// Funkcja obsługująca naciśnięcie przycisku lub klawisza Enter
function handleButtonClickOrEnter(event) {
  event.preventDefault(); // Zapobiegamy domyślnej akcji przycisku submit
  checkWord();
}

// Dodajemy nasłuchiwanie na kliknięcie przycisku
document.getElementById("submit").addEventListener("click", handleButtonClickOrEnter);

// Dodajemy nasłuchiwanie na naciśnięcie klawisza Enter
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleButtonClickOrEnter(event);
  }
});

// Rozpoczynamy grę po załadowaniu strony
window.onload = startGame();
  