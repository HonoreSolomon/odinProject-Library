const cardGrid = document.querySelector('.card__grid');
const addBook = document.querySelector('.add-button');
const blur = document.querySelector('#blur');
const bookModal = document.querySelector('#addBook__modal');
const modalSubmit = document.querySelector('.form__submit');
const bookForm = document.querySelector('#addBook__form');

let myLibrary = [];

class Book {
  constructor(
    title = 'unknown',
    author = 'unknown',
    pages = 0,
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayBook() {
  myLibrary.map((book, index) => {
    createBook(book, index);
  });
}
function createBook(book, index) {
  const card = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  readBtn.textContent = `${
    book.isRead ? 'Read' : 'Not Read'
  } `;
  readBtn.classList.add('card__btns');
  readBtn.classList.add('card__btns--read');
  book.isRead ? readBtn.classList.toggle('is-read') : '';
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('card__btns');
  deleteBtn.classList.add('card__btns--delete');
  deleteBtn.addEventListener('click', deleteBook);
  readBtn.addEventListener('click', toggleRead);
  title.textContent = `'${book.title}'`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  card.append(title, author, pages, readBtn, deleteBtn);
  card.classList.add('card');
  card.setAttribute('data-index', index);
  cardGrid.append(card);
}

function popup() {
  blur.classList.toggle('blur');
  bookModal.classList.toggle('add__modal--disabled');
}

function submitBook(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const readChecked = document.querySelector(
    '#form__is-read'
  ).checked;
  addBookToLibrary(title, author, pages, readChecked);
  event.currentTarget.reset();
  const cards = document.querySelectorAll('.card');
  for (const card of cards) {
    card.remove();
  }
  displayBook();
  popup();
}

function deleteBook(e) {
  const card = e.currentTarget.parentElement;

  myLibrary.splice(card.dataset.index, '1');
  const cards = document.querySelectorAll('.card');
  for (const card of cards) {
    card.remove();
  }
  displayBook();
}

function toggleRead(e) {
  const readBtn = e.currentTarget;
  const card = readBtn.parentElement;
  const index = card.dataset.index;

  if (myLibrary[index].isRead) {
    myLibrary[index].isRead = false;
    readBtn.textContent = 'Not Read';
  } else {
    myLibrary[index].isRead = true;
    readBtn.textContent = 'Read';
  }
  readBtn.classList.toggle('is-read');
}

addBook.addEventListener('click', popup);
bookForm.addEventListener('submit', submitBook);
