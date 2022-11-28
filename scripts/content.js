var wordsJson = {
    "words": ["are", "were", "been", "have", "has", "had", "she", "he", "its", "war"]
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status === 'complete') {
        for (var key in wordsJson) {
            console.log("test ", key);
            for (var key1 in wordsJson[key]) {
                document.getElementById('userGuess').value = wordsJson[key][key1];
                document.getElementById('submitGuess').click();
                console.log(wordsJson[key][key1]);
            }
        }        
    }
})