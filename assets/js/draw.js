function drawMarkUp(data) {
  // TBD
}

const drawDefinitions = (items) => {
  // for each item received ==> return composed HTML

  return defHTML;
};

const drawAList = (list) => {
  let listHTML;

  // for each list item => concat (+=)
  // results in a bunch of html items

  return listHTML;
};

const drawMeaning = (el) => {
  let html = "";

  el.forEach(
    (row) =>
      (html += `
            <p>${row.partOfSpeech}</p>
            
            <div>
                ${drawAList(row.synonyms)}
            </div>
        `)
  );
};

// TODO: drawPhonetics
// TODO: drawSourceURLs

function drawMyListOfWords() {
  let html = "<ul>";

  let uniqueWords = []; // getWordsFromLocalStorage()

  uniqueWords.forEach((item) => {
    html += `<li>${item}</li>`;
  });

  html += "</ul>";

  return (document.getElementById("wordsList").innerHTML = html);
}
