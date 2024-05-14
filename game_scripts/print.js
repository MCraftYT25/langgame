function print_dictionary()
{
    // Znajdź kontener, do którego będą dodawane elementy
var dictionaryList = document.getElementById("dictionary-list");

// Iteruj przez elementy w obiekcie words
words.forEach(function(wordObj) {
    // Pobierz słowo i jego tłumaczenie zgodnie z wybranymi językami
    var displayWord = wordObj.translations[displayLanguage];
    var inputTranslation = wordObj.translations[inputLanguage];

    // Stwórz nowy element div
    var wordContainer = document.createElement("div");
    wordContainer.classList.add("word-cont");

    // Stwórz element span dla słowa
    var wordSpan = document.createElement("span");
    wordSpan.classList.add("word");
    wordSpan.textContent = displayWord;

    // Stwórz element span dla pauzy
    var pauseSpan = document.createElement("span");
    pauseSpan.classList.add("pause");
    pauseSpan.textContent = "—";

    // Stwórz element span dla tłumaczenia
    var translateSpan = document.createElement("span");
    translateSpan.classList.add("translate");
    // Użyj tłumaczenia w odpowiednim języku
    translateSpan.textContent = inputTranslation;

    // Dodaj stworzone elementy do kontenera słów
    wordContainer.appendChild(wordSpan);
    wordContainer.appendChild(pauseSpan);
    wordContainer.appendChild(translateSpan);

    // Dodaj kontener słów do listy w dokumencie
    dictionaryList.appendChild(wordContainer);
});

}