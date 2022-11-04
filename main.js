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
    isRead: false,
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
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayBook(book) {
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readBtn = document.createElement('button');
  readBtn.textContent = `${
    book.isRead ? 'Read' : 'Not Read'
  } `;
  readBtn.classList.add('card__btns');
  readBtn.classList.add(
    `${book.isRead ? 'is-read' : 'not-read'}`
  );
  title.textContent = `'${book.title}'`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  card.append(title, author, pages, readBtn);
  card.classList.add('card');
  cardGrid.append(card);
}

for (const book of myLibrary) {
  displayBook(book);
}
