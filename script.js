const library = document.querySelector('#library');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks(theLibrary) {
    for (let book of theLibrary) {
        const LibBook = document.createElement('div');
        LibBook.classList.add('book');

        const LibTitle = document.createElement('h3');
        LibTitle.textContent = book.title;
        const LibAuthor = document.createElement('h3');
        LibAuthor.textContent = book.author;
        const LibPages = document.createElement('p');
        LibPages.textContent = book.pages;
        const LibRead = document.createElement('h6')
        LibRead.textContent = book.read;

        LibBook.appendChild(LibTitle)
        LibBook.appendChild(LibAuthor)
        LibBook.appendChild(LibPages)
        LibBook.appendChild(LibRead)
        
        library.appendChild(LibBook)
    }
}

// --------------------------------- //

const book1 = new Book('Game of Thrones', 'George R.R. Martin', 699, 'read');
const book2 = new Book('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 870, 'read');

addBookToLibrary(book1)
addBookToLibrary(book2)

displayBooks(myLibrary)