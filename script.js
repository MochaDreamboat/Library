const library = document.getElementById('library');
const newBook = document.getElementById('newBookButton');

const form = document.getElementById('newbookform');
const title = form.elements['title'];
const author = form.elements['author'];
const pages = form.elements['pages'];
const read = form.elements['read'];
const submit = document.getElementById('submit');

let myLibrary = [];

// To be utilized in form for adding a new book.
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

// Adds book object to array.
function addBookToLibrary(book) {
    myLibrary.push(book)
}

// Iterates through myLibrary Book objects. Creates div class='book' and creates/appends respective text elements
// to book div.
function displayLibrary(theLibrary) {
    for (let book of theLibrary) {
        displayBook(book)
    }

}

function displayBook(book) {
    const LibBook = document.createElement('div');
    LibBook.classList.add('book');
    const LibTitle = document.createElement('h3');
    LibTitle.textContent = book.title;
    const LibAuthor = document.createElement('h3');
    LibAuthor.textContent = book.author;
    const LibPages = document.createElement('p');
    LibPages.textContent = book.pages;
    const LibRead = document.createElement('h6');
    const bookIndex = myLibrary.indexOf(book);


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function (e) {
        library.removeChild(LibBook)
    });

    LibRead.textContent = book.read;

        LibBook.appendChild(LibTitle)
        LibBook.appendChild(LibAuthor)
        LibBook.appendChild(LibPages)
        LibBook.appendChild(LibRead)
        LibBook.appendChild(deleteButton) 
        library.appendChild(LibBook)
}

// Event Listeners

// Toggles form visibility by toggling CSS class.
newBook.addEventListener('click', function (e) {
    form.classList.toggle('invisible');
});

submit.addEventListener('click', function (e) {
    let submittedBook = new Book (title.value, author.value, pages.value, read.value);
    addBookToLibrary(submittedBook);
    displayBook(submittedBook);
});

// --------------------------------- //

const book1 = new Book('Game of Thrones', 'George R.R. Martin', 699, 'read');
const book2 = new Book('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 870, 'read');

addBookToLibrary(book1)
addBookToLibrary(book2)

displayLibrary(myLibrary)