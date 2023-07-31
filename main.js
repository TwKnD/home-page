const searchField = document.getElementById("search-field");
const searchURL = "https://www.google.com/search?q=";

function search() {
    if (searchField.value != "") {
        window.open(searchURL + searchField.value, "_blank")
        searchField.value = '';
    }
}

searchField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('search-button').click();
    }
})