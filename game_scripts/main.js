
var dictionaries = {
  d1: words,
  d2: colors,
  d3: time,
}

let totalWords = 10; // liczba słów do wyświetlenia
let wordCount = 0; // licznik słów
let results = []; // tablica wyników
let usedWords = []; // tablica użytych słów

function f1() {
  if (getCookie("selected_displayLanguage")) {
    return getCookie("selected_displayLanguage");
  } else {
    return "english";
  }
}
function f2() {
  if (getCookie("selected_inputLanguage")) {
    return getCookie("selected_inputLanguage");
  } else {
    return "italian";
  }
}

function getDictionary() {
  if (getCookie("selected_dictionary")) {
    words = dictionaries[getCookie("selected_dictionary")];
  }
}
function getGui() {
  if (getCookie("selectedGui")) {
    change_gui();
  }
}
let displayLanguage = f1();
let inputLanguage = f2();

getDictionary();

getGui();

print_dictionary();

function getRandomWord() {
  let word;
  do {
    word = words[Math.floor(Math.random() * words.length)];
  } while (usedWords.includes(word.translations[displayLanguage]));
  usedWords.push(word.translations[displayLanguage]);
  return word;
}

function checkWord() {
  let enteredWord = document.getElementById("entered_word").value.toLowerCase(); // Konwertujemy na małe litery
  let originalWord = currentWord.translations[displayLanguage].toLowerCase(); // Konwertujemy na małe litery
  let translation = currentWord.translations[inputLanguage].toLowerCase(); // Konwertujemy na małe litery

  let result = {
    original: originalWord,
    translation: translation,
    userAnswer: enteredWord
  };

  //results.push(result); // Dodajemy wynik do tablicy

  let resultField = document.getElementById("result");
  resultField.classList.remove("correct");
  resultField.classList.remove("wrong");
  if (enteredWord === translation) {
    document.getElementById("result").innerText = "Dobrze!";
    resultField.classList.add("correct");
  } else {
    document.getElementById("result").innerText = "Nie poprawne tłumaczenie. Poprawne tłumaczenie to: " + translation + ".";
    resultField.classList.add("wrong");
    if(enteredWord !== "") {
      results.push(result);
    } else {
      result.userAnswer = "—";
      results.push(result);
    }
    
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

    // Sprawdź czy odpowiedź użytkownika jest poprawna
    if (result.userAnswer.toLowerCase() !== result.translation.toLowerCase()) {
      let userAnswerSpan = document.createElement("span");
      userAnswerSpan.textContent = result.userAnswer + " ";
      userAnswerSpan.classList.add("incorrect");
      resultElement.appendChild(userAnswerSpan);
    }
    let translationSpan = document.createElement("span");
    translationSpan.textContent = result.translation + " ";
    translationSpan.classList.add("correct");
    resultElement.appendChild(translationSpan);

    let spanWord = document.createElement("span");
    spanWord.textContent = result.original + " ";
    spanWord.classList.add("original");
    resultElement.appendChild(spanWord);

    resultContainer.appendChild(resultElement);
  }
  document.getElementById("game").appendChild(resultContainer);
}



function startGame() {
  document.getElementById("entered_word").focus();
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
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleButtonClickOrEnter(event);
  }
});

// Rozpoczynamy grę po załadowaniu strony

window.onload = function () {
  document.getElementById("entered_word").focus();
  startGame();

};