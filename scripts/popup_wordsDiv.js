// Convert words_list.json relative path to URL
wordsJson = chrome.runtime.getURL('../words_list.json')
var i = -1;

fetch(wordsJson)
    .then((response) => response.json())
    .then((json) => {
        var mainContainer = document.getElementById("words_list");
        for (var key in json) {
            for (var key1 in json[key]) {
                i++;
                var div = document.createElement("div");
                div.innerHTML = (i + 1) + ': ' + json[key][key1];
                mainContainer.appendChild(div);
            }
        }
    });