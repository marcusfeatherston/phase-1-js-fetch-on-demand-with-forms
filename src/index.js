// Then, we'll need to add an event listener to the form, currently represented by inputForm in our code.

// Event listeners require two arguments: the type of event, a string, and the listener, a callback function. In our case, we'll want to pass in 'submit' as the type. For the listener, we need to provide a callback function that will be called to 'handle' the event.

// When the event is triggered, the callback function we've provided will execute and an object representing the event will be passed in as an argument. We can expect this to happen and can write a parameter in our code to store the event object in a variable:

const getMovies = (inputID) => {
  fetch(`http://localhost:3000/movies/${inputID}`)
    .then((response) => response.json())
    .then((data) => {
      const title = document.querySelector("#movieDetails h4");
      const summary = document.querySelector("#movieDetails p");

      title.innerText = data.title;
      summary.innerText = data.summary;
      console.log(data.title);
      console.log(data.summary);
    });
};

const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = document.querySelector("#searchByID");
    // console.log(searchInput.value);

    getMovies(searchInput.value);
  });
};

document.addEventListener("DOMContentLoaded", init);
