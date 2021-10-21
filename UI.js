class UI {
	addBook(book) {
		const tr = document.createElement('tr');
		tr.className = 'collection-item';

		const tdAuthor = document.createElement('td');
		tdAuthor.appendChild(document.createTextNode(book.author));
		tr.appendChild(tdAuthor);

		const tdTitle = document.createElement('td');
		tdTitle.appendChild(document.createTextNode(book.title));
		tr.appendChild(tdTitle);

		const tdISBN = document.createElement('td');
		tdISBN.appendChild(document.createTextNode(book.isbn));
		tr.appendChild(tdISBN);

		const tdLink = document.createElement('td')
		const link = document.createElement('a');
		link.className = 'secondary-content';
		link.appendChild(document.createTextNode('X'));
		link.setAttribute('href', '#');
		tdLink.appendChild(link)
		tr.appendChild(tdLink);

		const list = document.querySelector('tbody.table-list');
		list.appendChild(tr);

		const input1 = document.querySelector('#book-title');
		input1.value = "";
		const input2 = document.querySelector('#book-author');
		input2.value = "";
		const input3 = document.querySelector('#book-isbn');
		input3.value = "";
	}

	deleteBook(book) {
		if(book.textContent == 'X'){
			book.parentElement.parentElement.remove();
		}
	}

	getBooks(books) {
			const tr = document.createElement('tr');
			tr.className = 'collection-item';

			const tdAuthor = document.createElement('td');
			tdAuthor.appendChild(document.createTextNode(books.author));
			tr.appendChild(tdAuthor);

			const tdTitle = document.createElement('td');
			tdTitle.appendChild(document.createTextNode(books.title));
			tr.appendChild(tdTitle);

			const tdISBN = document.createElement('td');
			tdISBN.appendChild(document.createTextNode(books.isbn));
			tr.appendChild(tdISBN);

			const tdLink = document.createElement('td')
			const link = document.createElement('a');
			link.className = 'secondary-content';
			link.appendChild(document.createTextNode('X'));
			link.setAttribute('href', '#');
			tdLink.appendChild(link)
			tr.appendChild(tdLink);

			const list = document.querySelector('tbody.table-list');
			list.appendChild(tr);
	}
}