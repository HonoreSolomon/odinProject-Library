const cardGrid = document.querySelector('.card__grid');

let myLibrary = [
  {
    title: 'harry potter',
    author: 'jk rowling',
    pages: 252,
    isRead: true,
    info() {
      return `${this.title} by ${this.author}, ${
        this.pages
      } pages, ${
        this.isRead ? 'has been read' : 'has not been read'
      }`;
    },
  },
  {
    title: 'mere christianity',
    author: 'cs lewis',
    pages: 181,
    isRead: true,
    info() {
      return `${this.title} by ${this.author}, ${
        this.pages
      } pages, ${
        this.isRead ? 'has been read' : 'has not been read'
      }`;
    },
  },
  (hobbit = new Book('The Hobbit', 'Tokien', 450, true)),
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
  };
}

function addBookToLibrary() {
  myLibrary.push();
}

function displayBook(book) {
  let card = document.createElement('div');
  let title = document.createElement('p');
  let author = document.createElement('p');
  let pages = document.createElement('p');
  title.textContent = `'${book.title}'`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  card.append(title, author, pages);
  cardGrid.append(card);
}

for (const book of myLibrary) {
  displayBook(book);
}
