package com.kwan.API.Book;

import java.util.List;

public interface BookService {
	List<Book> findAllBook();
	void addBook(Book book);
	boolean updateBook(Long id, Book updatedBook);
}
