const myLibrary = [];

function Book(name, author) {
  this.name = name;
  this.author = author;
  this.info = () => {
    return `Name: ${this.name}\nAuthor: ${this.author}`;
  }
}

function displayAllBooks() {
  myLibrary.forEach(book => {
    let li = document.createElement('li');
    li.textContent = book.info();
    bookList.appendChild(li);
  });
}

function refreshBookList(newBook) {
  let bookList = document.querySelector('#bookList');
  let li = document.createElement('li');
  li.textContent = newBook.info();
  bookList.appendChild(li);
}

function addBookToLibrary(bookName, bookAuthor) {
  let newBook = new Book(bookName, bookAuthor);
  myLibrary.push(newBook);
  //displayAllBooks;
  refreshBookList(newBook);
}


document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById('dialog');
  const openDialogButton = document.getElementById('openDialogButton');
  const closeDialogButton = document.getElementById('closeDialogButton');
  const submitNewBookButton = document.querySelector('#submitNewBookButton');
  const bookNameInput = document.querySelector('#bookNameInput');
  const bookAuthorInput = document.querySelector('#bookAuthorInput');

  addBookToLibrary('Bobo', 'Xiuxiu');

  openDialogButton.addEventListener('click', function () {
    dialog.style.display = 'block';
  });

  submitNewBookButton.addEventListener('click', function (event) {
    event.preventDefault();
    addBookToLibrary(bookNameInput.value, bookAuthorInput.value);
    dialog.style.display = 'none';
  });
  
  closeDialogButton.addEventListener('click', function () {
    dialog.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === dialog) {
      dialog.style.display = 'none';
    }
  });
});

//displayAllBooks();