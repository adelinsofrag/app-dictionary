console.log("JS works!");

// TODO: handle submit
// get the search form
// add the submit event listener -> it will launch handleSearchFormSubmit(event)

function handleSearchFormSubmit(event) {
  // prevent default behavior

  clearMessages();

  // do the fetch with the input value
}

function handleResponse(data) {
  // false -> not valid
  if (false) {
    return showError(data.message);
  }

  //   get the response message of success element
  //   toggle the visibility class

  drawMarkUp(data);
}
