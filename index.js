const myLibrary = []

function Book(id, title, author, pages, read) {
  this.id = id
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  const title = prompt('What is the title of the book?')
  const author = prompt('Who is the author?')
  const pages = Number.parseInt(prompt('How many pages does it have?'))
  const read = confirm('Have you read it? OK for yes, Cancel for No')
  const id = crypto.randomUUID()

  myLibrary.push(new Book(id, title, author, pages, read))
}

function makeBookCard(book) {
  const bookCard = document.createElement('div')
  bookCard.classList.add('book-card')

  const title = document.createElement('h2')
  title.textContent = book.title
  bookCard.appendChild(title)

  const author = document.createElement('p')
  author.textContent = book.author
  bookCard.appendChild(author)

  const pages = document.createElement('p')
  pages.textContent = book.pages
  bookCard.appendChild(pages)

  const read = document.createElement('p')
  read.textContent = book.read ? 'read' : 'not yet read'
  bookCard.appendChild(read)

  return bookCard
}

function renderBooks() {
  const shelf = document.querySelector('.bookshelf')
  shelf.innerHTML = ''
  myLibrary.forEach((book) => {
    shelf.appendChild(makeBookCard(book))
  })
}
