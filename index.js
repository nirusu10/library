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
