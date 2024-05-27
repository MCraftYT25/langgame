function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return null;
}


function setInputLanguage() {
  inputLanguage = document.getElementById("inputLanguage").value;
  setCookie("selected_inputLanguage", inputLanguage, 1);
  setCookie("selectedGui", inputLanguage, 1);
}

function setDisplayLanguage() {
  displayLanguage = document.getElementById("displayLanguage").value;
  setCookie("selected_displayLanguage", displayLanguage, 1);
}

function setDictionary() {
  var selectElement = document.getElementById("dictionary");
  var selectedValue = selectElement.value;

  setCookie("selected_dictionary", selectedValue, 1);
}