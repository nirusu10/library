let myLibrary = []

const addBookBtn = document.querySelector('#add-book-button')
const addBookModal = document.querySelector('#add-book-modal')
const cancelButton = document.querySelector('#cancel-button')
const confirmButton = document.querySelector('#confirm-button')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const readInput = document.querySelector('#read')

addBookBtn.addEventListener('click', () => {
  addBookModal.showModal()
})

cancelButton.addEventListener('click', () => {
  addBookModal.close()
})

confirmButton.addEventListener('click', (e) => {
  e.preventDefault()
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  )
  addBookModal.close()
})

function Book(id, title, author, pages, read) {
  this.id = id
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(title, author, pages, read) {
  const id = crypto.randomUUID()

  myLibrary.push(new Book(id, title, author, pages, read))
  renderBooks()
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

  const removeBookButton = document.createElement('button')
  removeBookButton.textContent = 'Remove'
  removeBookButton.addEventListener('click', () => {
    const filteredBooks = myLibrary.filter(
      (librayBook) => librayBook.id !== book.id
    )
    myLibrary = filteredBooks
    renderBooks()
  })
  bookCard.appendChild(removeBookButton)

  const toggleReadButton = document.createElement('button')
  toggleReadButton.textContent = book.read ? 'Set "unread"' : 'Set "read"'
  toggleReadButton.addEventListener('click', (e) => {
    book.read = !book.read
    read.textContent = book.read ? 'read' : 'not yet read'
    e.target.textContent = book.read ? 'Set "unread"' : 'Set "read"'
  })
  bookCard.appendChild(toggleReadButton)

  return bookCard
}

function renderBooks() {
  const shelf = document.querySelector('.bookshelf')
  shelf.innerHTML = ''
  myLibrary.forEach((book) => {
    shelf.appendChild(makeBookCard(book))
  })
}

renderBooks()
