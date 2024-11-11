const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      this.read ? 'read.' : 'not yet read.'
    }`
  }
}

function addBookToLibrary(title, author, pages, read = false) {
  const bookToAdd = new Book(title, author, pages, read)
  myLibrary.push(bookToAdd)
}
