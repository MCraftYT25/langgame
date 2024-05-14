function move(value) {
    switch (value) {
        case 1:
            document.getElementById('searchelement').value = '';
            var elements = document.querySelectorAll('.word-cont');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "";
            }

            document.getElementById('searchelement').focus();
            break;
        case 2:
            location.reload();
            break;
        case 3:
            document.getElementById('entered_word').focus();
            break;
    }
}

document.querySelector('#searchelement').addEventListener('input', function (e) {
    let searchValue = e.target.value.toLowerCase();
    let verbContainers = document.querySelectorAll('.word-cont');

    verbContainers.forEach(function (container) {
        let textValue = container.textContent || container.innerText;
        if (textValue.toLowerCase().indexOf(searchValue) > -1) {
            container.style.display = "";
        } else {
            container.style.display = "none";
        }
    });
});