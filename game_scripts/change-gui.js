function change_gui() {
    var selectedGui = getCookie('selectedGui');
    if (selectedGui) {
        switch (selectedGui) {
            case "italian":
                document.getElementById("searched_word_text").innerHTML = "Scrivi una traduzione:";
                document.getElementsByClassName("symbols")[0].innerHTML = "à";
                document.getElementsByClassName("symbols")[1].innerHTML = "è";
                document.getElementsByClassName("symbols")[2].innerHTML = "ì";
                document.getElementsByClassName("symbols")[3].innerHTML = "ò";
                document.getElementsByClassName("symbols")[4].innerHTML = "ù";
                document.getElementsByClassName("symbols")[5].innerHTML = "’";
                document.getElementsByClassName("symbols")[6].innerHTML = "?";
                break;
            case "german":
                document.getElementById("searched_word_text").innerHTML = "Schreiben Sie eine Übersetzung:";
                document.getElementsByClassName("symbols")[0].innerHTML = "ä";
                document.getElementsByClassName("symbols")[1].innerHTML = "Ä";
                document.getElementsByClassName("symbols")[2].innerHTML = "ö";
                document.getElementsByClassName("symbols")[3].innerHTML = "Ö";
                document.getElementsByClassName("symbols")[4].innerHTML = "ü";
                document.getElementsByClassName("symbols")[5].innerHTML = "Ü";
                document.getElementsByClassName("symbols")[6].innerHTML = "ß";
                break;
            case "english":
                document.getElementById("searched_word_text").innerHTML = "Write the translation:";
                document.getElementsByClassName("symbols")[0].innerHTML = "à";
                document.getElementsByClassName("symbols")[1].innerHTML = "è";
                document.getElementsByClassName("symbols")[2].innerHTML = "ì";
                document.getElementsByClassName("symbols")[3].innerHTML = "ò";
                document.getElementsByClassName("symbols")[4].innerHTML = "ù";
                document.getElementsByClassName("symbols")[5].innerHTML = "’";
                document.getElementsByClassName("symbols")[6].innerHTML = "?";
                break;
            case "polish":
                document.getElementById("searched_word_text").innerHTML = "Napisz tłumaczenie:";
                document.getElementsByClassName("symbols")[0].innerHTML = "ą";
                document.getElementsByClassName("symbols")[1].innerHTML = "ć";
                document.getElementsByClassName("symbols")[2].innerHTML = "ę";
                document.getElementsByClassName("symbols")[3].innerHTML = "ń";
                document.getElementsByClassName("symbols")[4].innerHTML = "ó";
                document.getElementsByClassName("symbols")[5].innerHTML = "ż";
                document.getElementsByClassName("symbols")[6].innerHTML = "ź";
                break;

        }
    } else {
        document.getElementsByClassName("symbols")[0].innerHTML = "à";
        document.getElementsByClassName("symbols")[1].innerHTML = "è";
        document.getElementsByClassName("symbols")[2].innerHTML = "ì";
        document.getElementsByClassName("symbols")[3].innerHTML = "ò";
        document.getElementsByClassName("symbols")[4].innerHTML = "ù";
        document.getElementsByClassName("symbols")[5].innerHTML = "’";
        document.getElementsByClassName("symbols")[6].innerHTML = "?";
    }
}