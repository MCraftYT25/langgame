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
  
  //let displayLanguage = "italian"; // język wyświetlany
  //let inputLanguage = "german"; // język wprowadzany przez użytkownika
  /*let selectedLanguages = getSelectedLanguages(); // Pobieramy wybrane języki z plików cookie

    let displayLanguage = selectedLanguages.displayLanguage || "english"; // język wyświetlany
    let inputLanguage = selectedLanguages.inputLanguage || "polish"; // język wprowadzany przez użytkownika*/
    /*function getSelectedLanguages() {
        //const inputLanguage = getCookie("selected_inputLanguage");
        //const displayLanguage = getCookie("selected_displayLanguage");
        const inputLanguage = "polish";
        const displayLanguage = "english";
        return {
          inputLanguage: inputLanguage,
          displayLanguage: displayLanguage
        };
      }
*/
    /*let inputLanguage = "italian";
    let displayLanguage = "english";*/
    function f1()
    {
        if(getCookie("selected_displayLanguage")) {
            return getCookie("selected_displayLanguage");
        } else {
            return "english";
        }
    }
    function f2()
    {
        if(getCookie("selected_inputLanguage")) {
            return getCookie("selected_inputLanguage");
        } else {
            return "italian";
        }
    }

    let displayLanguage = f1();
    let inputLanguage = f2();

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
    resultField.classList.remove("incorrect");
    if (enteredWord === translation) {
      document.getElementById("result").innerText = "Dobrze!";
      resultField.classList.add("correct");
    } else {
      document.getElementById("result").innerText = "Nie poprawne tłumaczenie. Poprawne tłumaczenie to: " + translation + ".";
      resultField.classList.add("incorrect");
      results.push(result);
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
      
  
      
  
      // Dodaj klasę "correct" do tłumaczenia
      
  
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
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      handleButtonClickOrEnter(event);
    }
  });
  
  // Rozpoczynamy grę po załadowaniu strony

  window.onload = function() {
    document.getElementById("entered_word").focus();
    startGame();

  };