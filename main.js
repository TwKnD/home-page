const searchForm = document.getElementById("search");
const searchField = document.getElementById("search-field");
const searchURL = "https://www.google.com/search?q=";

function search() {
    if (searchField.value != "") {
        window.open(searchURL + searchField.value, "_blank")
    }
}