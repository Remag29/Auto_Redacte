// General function to add word on the popup list
// Word is added with the format "index: word" on the list
function printWordOnList(word, index) {
    var mainContainer = document.getElementById("words_list");
    var divParent = document.createElement("div");
    divParent.className = "word";

    // Create word text div
    var divText = document.createElement("div");
    divText.className = "word_text";
    divText.innerHTML = index + ": " + word;

    // Create delete button
    var dltBtn = document.createElement("button");
    dltBtn.className = "delete_btn";
    dltBtn.innerHTML = "X";
    dltBtn.addEventListener("click", removeWord);

    // Append word text and delete button to word div
    divParent.appendChild(divText);
    divParent.appendChild(dltBtn);

    // Append word div to the page
    mainContainer.appendChild(divParent);
}

// Add word to the list from the input bar
function addWord() {
    // Get word from input bar
    var word = document.getElementById("add_bar").value.toLowerCase();
    var result = chrome.storage.local.get("words");
    result.then((val) => {
        var words_list = val.words || [];
        words_list.push(word);
        chrome.storage.local.set({ words: words_list }, function () {});
        document.getElementById("add_bar").value = "";
        window.location.reload();
    });
    document.getElementById("add_bar").select();
}

// Define removeWord function
function removeWord() {
    var divParent = this.parentElement;
    deleteWord(
        divParent
            .getElementsByClassName("word_text")[0]
            .innerHTML.split(": ")[1]
    );
    window.location.reload();
}

// Remove word from the list
function deleteWord(wordToDelete) {
    chrome.storage.local.get("words", function (result) {
        var words_list = result.words || [];
        var index = words_list.indexOf(wordToDelete.toLowerCase());
        if (index !== -1) {
            words_list.splice(index, 1);
            chrome.storage.local.set({ words: words_list }, function () {});
            window.location.reload();
        }
    });
}

// Get words list
function retrieveWords() {
    var returnResult = [];
    chrome.storage.local.get("words", function (result) {
        var i = -1;
        result.words.forEach(function (word) {
            i++;
            printWordOnList(word, i);
        });
    });
}

// Load words list
retrieveWords();

// Add Button listener
document.getElementById("add_btn").addEventListener("click", addWord);

// Input Bar event listener with Enter key
var input = document.getElementById("add_bar");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("add_btn").click();
    }
});