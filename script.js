const myLibrary = [new Book("Bobo", "Xiuxiu", 520, true)];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add a book to the library array
function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

// Function to toggle read status
Book.prototype.toggleRead = function() {
    this.read = !this.read;
    displayBooks();
}

// Function to display books
function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = ''; // Clear existing content

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not read'}</p>
            <span class="toggle-read-button" data-index="${index}">${book.read ? 'Mark as unread' : 'Mark as read'}</span>
            <span class="remove-button" data-index="${index}">Remove</span>
        `;
        libraryDiv.appendChild(bookDiv);
    });

    // Add event listeners to the remove buttons
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeBook);
    });

    // Add event listeners to the toggle read buttons
    const toggleReadButtons = document.querySelectorAll('.toggle-read-button');
    toggleReadButtons.forEach(button => {
        button.addEventListener('click', toggleReadStatus);
    });
}

// Function to remove a book from the library
function removeBook(event) {
    const bookIndex = event.target.getAttribute('data-index');
    myLibrary.splice(bookIndex, 1);
    displayBooks();
}

// Function to toggle read status
function toggleReadStatus(event) {
    const bookIndex = event.target.getAttribute('data-index');
    myLibrary[bookIndex].toggleRead();
}

// Event listener for the new book button
document.getElementById('newBookButton').addEventListener('click', () => {
    document.getElementById('bookFormDialog').showModal();
});

// Event listener for the book form submission
document.getElementById('bookForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // Close the dialog and reset the form
    document.getElementById('bookFormDialog').close();
    document.getElementById('bookForm').reset();
});

// Initial display of books
displayBooks();
