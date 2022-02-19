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
    let LibBook = document.createElement('div');
    LibBook.classList.add('book');

    let bookIndex = myLibrary.indexOf(book);
    LibBook.setAttribute('data-index-number', bookIndex)

    let LibTitle = document.createElement('h3');
    LibTitle.textContent = book.title;
    let LibAuthor = document.createElement('h3');
    LibAuthor.textContent = book.author;
    let LibPages = document.createElement('p');
    LibPages.textContent = book.pages;
    let LibRead = document.createElement('h6');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function (e) {
        library.removeChild(LibBook)
        myLibrary.splice(myLibrary.indexOf(book), 1)
        console.log(myLibrary)

    const readButton = document.createElement('button');
    readButton.addEventListener('click', function (e) {
        // ((book.read = false) ? book.read = true : book.read = false)
    });
        
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

// Changes form visibility by toggling CSS class.
newBook.addEventListener('click', function (e) {
    form.classList.toggle('invisible');
});

// Adds new book to myLibrary array and displays respective book element on DOM.
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