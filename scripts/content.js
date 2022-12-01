// Create a button to call function "autoComplete"
let btn = document.createElement("button");
btn.innerHTML = "Auto Complete";
btn.type = "button";
btn.setAttribute("class", "btn btn-outline-secondary");
btn.id = "autoCompleteBtn";
document.getElementById('inGrp').appendChild(btn);

// Add event listener to the button
btn.addEventListener("click", autoComplete);

// Function to auto complete the form
function autoComplete() {
    var wordsJson = {
        "words": ["are", "were", "been", "have", "has", "had", "she", "he", "its", "war"]
    }

    for (var key in wordsJson) {
        console.log("test ", key);
        for (var key1 in wordsJson[key]) {
            document.getElementById('userGuess').value = wordsJson[key][key1];
            document.getElementById('submitGuess').click();
            console.log(wordsJson[key][key1]);
        }
    }
}
