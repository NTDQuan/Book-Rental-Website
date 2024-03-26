package com.kwan.API.Book.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.kwan.API.Book.Book;
import com.kwan.API.Book.BookRepository;
import com.kwan.API.Book.BookService;

@Service
public class BookServiceImpl implements BookService {
	private List<Book> books = new ArrayList<>();
	BookRepository bookRepository;
	
	public BookServiceImpl(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	@Override
	public List<Book> findAllBook() {
		return bookRepository.findAll();
	}

	@Override
	public void addBook(Book book) {
		bookRepository.save(book);		
	}

	@Override
	public boolean updateBook(Long id, Book updatedBook) {
		Optional<Book> bookOptional = bookRepository.findById(id);
		if(bookOptional.isPresent()) {
			Book book = bookOptional.get();
			book.setTitle(updatedBook.getTitle());
			book.setAuthors(updatedBook.getAuthors());
			book.setGenre(updatedBook.getGenre());
			book.setPrice(updatedBook.getPrice());
			book.setStock(updatedBook.getStock());
			book.setBookCover(updatedBook.getBookCover());
			return true;
		}
		return false;
	}
}
