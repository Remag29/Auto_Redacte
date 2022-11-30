// Convert words_list.json relative path to URL
wordsJson = chrome.runtime.getURL('../words_list.json')

// Create a button to call function "autoComplete"
let btn = document.createElement("button");
btn.innerHTML = "Auto Complete";
btn.type = "button";
btn.id = "autoCompleteBtn";
document.getElementById('inGrp').appendChild(btn);

// Add event listener to the button
btn.addEventListener("click", autoComplete);

// Function to auto complete the form
function autoComplete() {
    fetch(wordsJson)
        .then((response) => response.json())
        .then((json) => {
            for (var key in json) {
                for (var key1 in json[key]) {
                    document.getElementById('userGuess').value = json[key][key1];
                    document.getElementById('submitGuess').click();
                }
            }
        });
}
