package com.kwan.API.Book.external;

import java.util.HashSet;
import java.util.Set;

import com.kwan.API.Book.Book;

import jakarta.persistence.*;


@Entity
public class Author {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	
	@ManyToMany
	@JoinTable(name = "book_author", joinColumns = @JoinColumn(name = "author_id"), inverseJoinColumns = @JoinColumn(name = "book_id"))
	private Set<Book> books = new HashSet<>();
	
	public Author() {
		
	}
	
	public Author(String name) {
		this.name = name;
	}
}
