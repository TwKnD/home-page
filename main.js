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

/* Create cards from user configuration */
const mainSection = document.getElementsByTagName('main')[0];

for(let c = 0; c < userConfig.length; c++) {
    let cardConfig = userConfig[c];
    let bookmarks = Object.entries(cardConfig.Links);

    // Create card element
    let cardEl = document.createElement("div");
    cardEl.className = "card";

    //Create card Title && append to card
    let cardTitle = document.createElement("h3");
    cardTitle.innerText = cardConfig.Title
    cardEl.appendChild(cardTitle);

    // Create link elements && append to card
    for(let l = 0; l < bookmarks.length; l++) {
        let link = document.createElement('a');
        link.innerText = bookmarks[l][0];
        link.href = bookmarks[l][1];
        link.target = "_blank"

        cardEl.appendChild(link)
    };

    mainSection.appendChild(cardEl);

};