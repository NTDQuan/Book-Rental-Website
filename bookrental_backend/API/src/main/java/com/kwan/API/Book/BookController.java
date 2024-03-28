package com.kwan.API.Book;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/book")
@RestController
public class BookController {
	private BookService bookService;
	
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<List<Book>> findAll() {
		return ResponseEntity.ok(bookService.findAllBook());
	}
	
	@PostMapping("/")
	public ResponseEntity<String> saveBook(@RequestBody Book book) {
		bookService.addBook(book);
		return new ResponseEntity<>("Book added succesfully", HttpStatus.CREATED);
	}

}
