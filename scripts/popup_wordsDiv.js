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
                // Create word div
                var divParent = document.createElement("div");
                divParent.className = 'word';

                // Create word text div
                var divText = document.createElement("div");
                divText.className = 'word_text';
                divText.innerHTML = (i + 1) + ': ' + json[key][key1];

                // Create delete button
                var dltBtn = document.createElement("button");
                dltBtn.className = 'delete_btn';
                dltBtn.innerHTML = 'X';

                // Append word text and delete button to word div
                divParent.appendChild(divText);
                divParent.appendChild(dltBtn);

                // Append word div to the page
                mainContainer.appendChild(divParent);
            }
        }
    });