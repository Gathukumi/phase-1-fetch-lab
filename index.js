function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((json) => {
      // Call renderBooks() with the JSON-ified data
      renderBooks(json);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Call fetchBooks() and ensure it returns the fetch request
  const fetchRequest = fetchBooks();
  // This is not required for the lab, but it ensures that you return the fetch request
  return fetchRequest;
});
