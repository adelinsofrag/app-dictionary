const API_SOURCE_BASE_URL = `https://api.dictionaryapi.dev/api/v2`;

const doFetchData = (searchItem = "hello", language = "en") => {
  if (!searchItem) {
    showError();
  } else {
    const API_SOURCE_ENDPOINT = `${API_SOURCE_BASE_URL}/entries/${language}/${searchItem}`;

    fetch(API_SOURCE_ENDPOINT)
      .then((response) => response.json())
      .then((responseJSON) => handleResponse(responseJSON))
      .catch((error) => showError("Server error", error));
  }
};
