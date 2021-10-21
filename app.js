ui = new UI();
ls = new LS();

const form = document.querySelector('form')
const bookTitleInput = document.querySelector('#book-title');
const bookAuthorInput = document.querySelector('#book-author');
const bookISBNInput = document.querySelector('#book-isbn');
const bookList = document.querySelector('tbody.table-list');

document.addEventListener('DOMContentLoaded', getBooks)

form.addEventListener('submit', addBook);
bookList.addEventListener('click', deleteBook);

function addBook(e) {
	const bookTitle = bookTitleInput.value;
	const bookAuthor = bookAuthorInput.value;
	const bookISBN = bookISBNInput.value;
	if(bookTitle === "" || bookAuthor === "" || bookISBN === ""){
		window.alert("Please fill in the fields!")
	} else {
		let bookNew = new book(bookTitle, bookAuthor, bookISBN);
		ui.addBook(bookNew);
		ls.addBook(bookNew);
		e.preventDefault();
	}
}

function deleteBook(e){
	let book = e.target.parentElement.firstChild;
	ui.deleteBook(book);
	book = book.parentElement.previousElementSibling.textContent;
	ls.deleteBook(book);
}

function getBooks() {
		books = ls.getData();
		books.forEach(ui.getBooks.bind(books));
}