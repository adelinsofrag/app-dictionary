const LOCAL_STORAGE_KEY = "mywords";
let emptyWordsList = [];

function getDataFromLocalStorage(key) {
  return; // data under "key"
}

function getWordsFromLocalStorage() {
  // TODO: What now will be the no words list
  return getDataFromLocalStorage(LOCAL_STORAGE_KEY) || "What now?";
}

function addWordToLocalStorage(word) {
  // get the words from LS
  // add the "word"
  // push the new updated list of words into LS

  return drawMyListOfWords();
}
