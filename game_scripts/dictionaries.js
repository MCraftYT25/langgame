var words = [
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

var colors = [
    {
        color: "red",
        translations: {
            english: "red",
            polish: "czerwony",
            german: "rot",
            italian: "rosso"
        }
    },
    {
        color: "blue",
        translations: {
            english: "blue",
            polish: "niebieski",
            german: "blau",
            italian: "blu"
        }
    },
    {
        color: "green",
        translations: {
            english: "green",
            polish: "zielony",
            german: "grün",
            italian: "verde"
        }
    },
    {
        color: "yellow",
        translations: {
            english: "yellow",
            polish: "żółty",
            german: "gelb",
            italian: "giallo"
        }
    },
    {
        color: "orange",
        translations: {
            english: "orange",
            polish: "pomarańczowy",
            german: "orange",
            italian: "arancione"
        }
    },
    {
        color: "purple",
        translations: {
            english: "purple",
            polish: "fioletowy",
            german: "lila",
            italian: "viola"
        }
    },
    {
        color: "pink",
        translations: {
            english: "pink",
            polish: "różowy",
            german: "rosa",
            italian: "rosa"
        }
    },
    {
        color: "brown",
        translations: {
            english: "brown",
            polish: "brązowy",
            german: "braun",
            italian: "marrone"
        }
    },
    {
        color: "black",
        translations: {
            english: "black",
            polish: "czarny",
            german: "schwarz",
            italian: "nero"
        }
    },
    {
        color: "white",
        translations: {
            english: "white",
            polish: "biały",
            german: "weiß",
            italian: "bianco"
        }
    },
    {
        color: "grey",
        translations: {
            english: "grey",
            polish: "szary",
            german: "grau",
            italian: "grigio"
        }
    },
    {
        color: "turquoise",
        translations: {
            english: "turquoise",
            polish: "turkusowy",
            german: "türkis",
            italian: "turchese"
        }
    },
    {
        color: "gold",
        translations: {
            english: "gold",
            polish: "złoty",
            german: "gold",
            italian: "oro"
        }
    },
    {
        color: "silver",
        translations: {
            english: "silver",
            polish: "srebrny",
            german: "silber",
            italian: "argento"
        }
    }
];

var time = [
    {
        word: "second",
        translations: {
            english: "second",
            polish: "sekunda",
            german: "Sekunde",
            italian: "secondo"
        }
    },
    {
        word: "minute",
        translations: {
            english: "minute",
            polish: "minuta",
            german: "Minute",
            italian: "minuto"
        }
    },
    {
        word: "hour",
        translations: {
            english: "hour",
            polish: "godzina",
            german: "Stunde",
            italian: "ora"
        }
    },
    {
        word: "day",
        translations: {
            english: "day",
            polish: "dzień",
            german: "Tag",
            italian: "giorno"
        }
    },
    {
        word: "week",
        translations: {
            english: "week",
            polish: "tydzień",
            german: "Woche",
            italian: "settimana"
        }
    },
    {
        word: "month",
        translations: {
            english: "month",
            polish: "miesiąc",
            german: "Monat",
            italian: "mese"
        }
    },
    {
        word: "year",
        translations: {
            english: "year",
            polish: "rok",
            german: "Jahr",
            italian: "anno"
        }
    },
    {
        word: "yesterday",
        translations: {
            english: "yesterday",
            polish: "wczoraj",
            german: "gestern",
            italian: "ieri"
        }
    },
    {
        word: "today",
        translations: {
            english: "today",
            polish: "dzisiaj",
            german: "heute",
            italian: "oggi"
        }
    },
    {
        word: "tomorrow",
        translations: {
            english: "tomorrow",
            polish: "jutro",
            german: "morgen",
            italian: "domani"
        }
    },
    {
        word: "Monday",
        translations: {
            english: "Monday",
            polish: "poniedziałek",
            german: "Montag",
            italian: "lunedì"
        }
    },
    {
        word: "Tuesday",
        translations: {
            english: "Tuesday",
            polish: "wtorek",
            german: "Dienstag",
            italian: "martedì"
        }
    },
    {
        word: "Wednesday",
        translations: {
            english: "Wednesday",
            polish: "środa",
            german: "Mittwoch",
            italian: "mercoledì"
        }
    },
    {
        word: "Thursday",
        translations: {
            english: "Thursday",
            polish: "czwartek",
            german: "Donnerstag",
            italian: "giovedì"
        }
    },
    {
        word: "Friday",
        translations: {
            english: "Friday",
            polish: "piątek",
            german: "Freitag",
            italian: "venerdì"
        }
    },
    {
        word: "Saturday",
        translations: {
            english: "Saturday",
            polish: "sobota",
            german: "Samstag",
            italian: "sabato"
        }
    },
    {
        word: "Sunday",
        translations: {
            english: "Sunday",
            polish: "niedziela",
            german: "Sonntag",
            italian: "domenica"
        }
    },
    {
        word: "January",
        translations: {
            english: "January",
            polish: "styczeń",
            german: "Januar",
            italian: "gennaio"
        }
    },
    {
        word: "February",
        translations: {
            english: "February",
            polish: "luty",
            german: "Februar",
            italian: "febbraio"
        }
    },
    {
        word: "March",
        translations: {
            english: "March",
            polish: "marzec",
            german: "März",
            italian: "marzo"
        }
    },
    {
        word: "April",
        translations: {
            english: "April",
            polish: "kwiecień",
            german: "April",
            italian: "aprile"
        }
    },
    {
        word: "May",
        translations: {
            english: "May",
            polish: "maj",
            german: "Mai",
            italian: "maggio"
        }
    },
    {
        word: "June",
        translations: {
            english: "June",
            polish: "czerwiec",
            german: "Juni",
            italian: "giugno"
        }
    },
    {
        word: "July",
        translations: {
            english: "July",
            polish: "lipiec",
            german: "Juli",
            italian: "luglio"
        }
    },
    {
        word: "August",
        translations: {
            english: "August",
            polish: "sierpień",
            german: "August",
            italian: "agosto"
        }
    },
    {
        word: "September",
        translations: {
            english: "September",
            polish: "wrzesień",
            german: "September",
            italian: "settembre"
        }
    },
    {
        word: "October",
        translations: {
            english: "October",
            polish: "październik",
            german: "Oktober",
            italian: "ottobre"
        }
    },
    {
        word: "November",
        translations: {
            english: "November",
            polish: "listopad",
            german: "November",
            italian: "novembre"
        }
    },
    {
        word: "December",
        translations: {
            english: "December",
            polish: "grudzień",
            german: "Dezember",
            italian: "dicembre"
        }
    },
    {
        word: "spring",
        translations: {
            english: "spring",
            polish: "wiosna",
            german: "Frühling",
            italian: "primavera"
        }
    },
    {
        word: "summer",
        translations: {
            english: "summer",
            polish: "lato",
            german: "Sommer",
            italian: "estate"
        }
    },
    {
        word: "autumn",
        translations: {
            english: "autumn",
            polish: "jesień",
            german: "Herbst",
            italian: "autunno"
        }
    },
    {
        word: "winter",
        translations: {
            english: "winter",
            polish: "zima",
            german: "Winter",
            italian: "inverno"
        }
    },
    {
        word: "morning",
        translations: {
            english: "morning",
            polish: "rano",
            german: "Morgen",
            italian: "mattina"
        }
    },
    {
        word: "noon",
        translations: {
            english: "noon",
            polish: "południe",
            german: "Mittag",
            italian: "mezzogiorno"
        }
    },
    {
        word: "afternoon",
        translations: {
            english: "afternoon",
            polish: "popołudnie",
            german: "Nachmittag",
            italian: "pomeriggio"
        }
    },
    {
        word: "evening",
        translations: {
            english: "evening",
            polish: "wieczór",
            german: "Abend",
            italian: "sera"
        }
    },
    {
        word: "night",
        translations: {
            english: "night",
            polish: "noc",
            german: "Nacht",
            italian: "notte"
        }
    },
];

var zwroty = [
    {
        word: "please",
        translations: {
            english: "please",
            polish: "proszę",
            german: "bitte",
            italian: "per favore"
        }
    },
    {
        word: "thank you",
        translations: {
            english: "thank you",
            polish: "dziękuję",
            german: "danke",
            italian: "grazie"
        }
    },
    {
        word: "excuse me",
        translations: {
            english: "excuse me",
            polish: "przepraszam",
            german: "Entschuldigung",
            italian: "mi scusi"
        }
    },
    {
        word: "how are you?",
        translations: {
            english: "how are you?",
            polish: "jak się masz?",
            german: "wie geht es Ihnen?",
            italian: "come stai?"
        }
    },
    {
        word: "what's your name?",
        translations: {
            english: "what's your name?",
            polish: "jak się nazywasz?",
            german: "wie heißt du?",
            italian: "come ti chiami?"
        }
    },
    {
        word: "where are you from?",
        translations: {
            english: "where are you from?",
            polish: "skąd jesteś?",
            german: "Woher kommst du?",
            italian: "di dove sei?"
        }
    },
    {
        word: "how are you doing?",
        translations: {
            english: "how are you doing?",
            polish: "co u Ciebie słychać?",
            german: "wie geht es Ihnen?",
            italian: "come va?"
        }
    }
];

var traits = [
    {
      word: "ambitious",
      translations: {
        english: "ambitious",
        polish: "ambitny",
        german: "ehrgeizig",
        italian: "ambizioso"
      }
    },
    {
      word: "brave",
      translations: {
        english: "brave",
        polish: "odważny",
        german: "mutig",
        italian: "coraggioso"
      }
    },
    {
      word: "compassionate",
      translations: {
        english: "compassionate",
        polish: "współczujący",
        german: "mitfühlend",
        italian: "compassionevole"
      }
    },
    {
      word: "determined",
      translations: {
        english: "determined",
        polish: "zdeterminowany",
        german: "entschlossen",
        italian: "determinato"
      }
    },
    {
      word: "energetic",
      translations: {
        english: "energetic",
        polish: "energetyczny",
        german: "energiegeladen",
        italian: "energetico"
      }
    },
    {
      word: "faithful",
      translations: {
        english: "faithful",
        polish: "wierny",
        german: "treu",
        italian: "fedele"
      }
    },
    {
      word: "generous",
      translations: {
        english: "generous",
        polish: "hojny",
        german: "großzügig",
        italian: "generoso"
      }
    },
    {
      word: "honest",
      translations: {
        english: "honest",
        polish: "uczciwy",
        german: "ehrlich",
        italian: "onesto"
      }
    },
    {
      word: "intelligent",
      translations: {
        english: "intelligent",
        polish: "inteligentny",
        german: "intelligent",
        italian: "intelligente"
      }
    },
    {
      word: "joyful",
      translations: {
        english: "joyful",
        polish: "radosny",
        german: "freudig",
        italian: "gioioso"
      }
    },
    {
      word: "kind",
      translations: {
        english: "kind",
        polish: "uprzejmy",
        german: "freundlich",
        italian: "gentile"
      }
    },
    {
      word: "loyal",
      translations: {
        english: "loyal",
        polish: "lojalny",
        german: "loyal",
        italian: "leale"
      }
    },
    {
      word: "modest",
      translations: {
        english: "modest",
        polish: "skromny",
        german: "bescheiden",
        italian: "modesto"
      }
    },
    {
      word: "noble",
      translations: {
        english: "noble",
        polish: "szlachetny",
        german: "edel",
        italian: "nobile"
      }
    },
    {
      word: "optimistic",
      translations: {
        english: "optimistic",
        polish: "optymistyczny",
        german: "optimistisch",
        italian: "ottimista"
      }
    },
    {
      word: "patient",
      translations: {
        english: "patient",
        polish: "cierpliwy",
        german: "geduldig",
        italian: "paziente"
      }
    },
    {
      word: "reliable",
      translations: {
        english: "reliable",
        polish: "niezawodny",
        german: "zuverlässig",
        italian: "affidabile"
      }
    },
    {
      word: "sincere",
      translations: {
        english: "sincere",
        polish: "szczery",
        german: "aufrichtig",
        italian: "sincero"
      }
    },
    {
      word: "trustworthy",
      translations: {
        english: "trustworthy",
        polish: "godny zaufania",
        german: "vertrauenswürdig",
        italian: "degno di fiducia"
      }
    },
    {
      word: "understanding",
      translations: {
        english: "understanding",
        polish: "wyrozumiały",
        german: "verständnisvoll",
        italian: "comprensivo"
      }
    },
    {
      word: "adventurous",
      translations: {
        english: "adventurous",
        polish: "żądny przygód",
        german: "abenteuerlustig",
        italian: "avventuroso"
      }
    },
    {
      word: "bold",
      translations: {
        english: "bold",
        polish: "śmiały",
        german: "kühn",
        italian: "audace"
    }
},
    {
      word: "creative",
      translations: {
        english: "creative",
        polish: "kreatywny",
        german: "kreativ",
        italian: "creativo"
      }
    },
    {
      word: "diligent",
      translations: {
        english: "diligent",
        polish: "pracowity",
        german: "fleißig",
        italian: "diligente"
      }
    },
    {
      word: "empathetic",
      translations: {
        english: "empathetic",
        polish: "empatyczny",
        german: "empathisch",
        italian: "empatico"
      }
    },
    {
      word: "friendly",
      translations: {
        english: "friendly",
        polish: "przyjazny",
        german: "freundlich",
        italian: "amichevole"
      }
    },
    {
      word: "gracious",
      translations: {
        english: "gracious",
        polish: "łaskawy",
        german: "gnädig",
        italian: "cortese"
      }
    },
    {
      word: "humble",
      translations: {
        english: "humble",
        polish: "pokorny",
        german: "demütig",
        italian: "umile"
      }
    },
    {
      word: "imaginative",
      translations: {
        english: "imaginative",
        polish: "obdarzony wyobraźnią",
        german: "phantasievoll",
        italian: "fantasioso"
      }
    },
    {
      word: "jovial",
      translations: {
        english: "jovial",
        polish: "wesoły",
        german: "heiter",
        italian: "gioviale"
      }
    },
    {
      word: "knowledgeable",
      translations: {
        english: "knowledgeable",
        polish: "wiedzący",
        german: "kenntnisreich",
        italian: "conoscente"
      }
    },
    {
      word: "logical",
      translations: {
        english: "logical",
        polish: "logiczny",
        german: "logisch",
        italian: "logico"
      }
    },
    {
      word: "motivated",
      translations: {
        english: "motivated",
        polish: "zmotywowany",
        german: "motiviert",
        italian: "motivato"
      }
    },
    {
      word: "observant",
      translations: {
        english: "observant",
        polish: "spostrzegawczy",
        german: "aufmerksam",
        italian: "osservante"
      }
    },
    {
      word: "passionate",
      translations: {
        english: "passionate",
        polish: "namiętny",
        german: "leidenschaftlich",
        italian: "appassionato"
      }
    },
    {
      word: "persistent",
      translations: {
        english: "persistent",
        polish: "uparty",
        german: "hartnäckig",
        italian: "persistente"
      }
    },
    {
      word: "resilient",
      translations: {
        english: "resilient",
        polish: "odporny",
        german: "belastbar",
        italian: "resiliente"
      }
    },
    {
      word: "selfless",
      translations: {
        english: "selfless",
        polish: "bezinteresowny",
        german: "selbstlos",
        italian: "altruista"
      }
    },
    {
      word: "thoughtful",
      translations: {
        english: "thoughtful",
        polish: "troskliwy",
        german: "nachdenklich",
        italian: "premuroso"
      }
    },
    {
      word: "upbeat",
      translations: {
        english: "upbeat",
        polish: "optymistyczny",
        german: "optimistisch",
        italian: "ottimista"
      }
    },
    {
      word: "assertive",
      translations: {
        english: "assertive",
        polish: "asertywny",
        german: "durchsetzungsfähig",
        italian: "assertivo"
      }
    },
    {
      word: "calm",
      translations: {
        english: "calm",
        polish: "spokojny",
        german: "ruhig",
        italian: "calmo"
      }
    }
];
    


