// Create a button to call function "autoComplete"
let btn = document.createElement("button");
btn.innerHTML = "Auto Complete";
btn.type = "button";
btn.setAttribute("class", "btn btn-outline-secondary");
btn.id = "autoCompleteBtn";
document.getElementById("inGrp").appendChild(btn);

// Add event listener to the button
btn.addEventListener("click", autoComplete);

// Function to auto complete the form
function autoComplete() {

    chrome.storage.local.get("words", function (result) {
        var words_list = result.words || [];
        words_list.forEach(function (word) {
            document.getElementById("userGuess").value = word;
            document.getElementById("submitGuess").click();
        });
    });    
}
