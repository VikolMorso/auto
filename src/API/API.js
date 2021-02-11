const SearchOrganization = (value) => {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
var token = "340a0f882b760d862637bbeeca7c100c82586b31";
var query = value;

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
}

 return fetch(url, options)
.then(response => response.text())
.then(result => JSON.parse(result))
.catch(error => alert("error", error));
}

export default SearchOrganization