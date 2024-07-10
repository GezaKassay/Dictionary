let words = [];
let clickCounter = 0;

function saveWord() {    
    words[clickCounter] = document.getElementById("enterWord").value;
    ++clickCounter;
    document.getElementById("enterWord").value = "";    
}

function searchWord() {
    let findWord = document.getElementById("SearchWord").value;
    let wordInDictionary = 0;
    for (let i = 0; i < words.length; ++i) {
        if (words[i].match(findWord)) {
            wordInDictionary = 1;
        }        
    }
    if (wordInDictionary === 1) {
        alert("The word" + " " + findWord + " " + "can be found in the dictionary");
    } else {
        alert("The word" + " " + findWord + " " + "is missing from the dictionary");
    }
    document.getElementById("SearchWord").value = "";   
}