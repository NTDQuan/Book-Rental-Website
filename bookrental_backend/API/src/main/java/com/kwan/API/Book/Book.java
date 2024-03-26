package com.kwan.API.Book;

import java.util.ArrayList;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "book")
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String title;
	private ArrayList<String> authors;
	private ArrayList<String> genre;
	@Column(nullable = false)
	private int price;
	@Column(nullable = false)
	private int stock;
	private String bookCover;
	public Book() {
		
	}
	
	public Book(Long id, String title, ArrayList<String> authors, ArrayList<String> genre, int price, int stock,
			String bookCover) {
		super();
		this.id = id;
		this.title = title;
		this.authors = authors;
		this.genre = genre;
		this.price = price;
		this.stock = stock;
		this.bookCover = bookCover;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public ArrayList<String> getAuthors() {
		return authors;
	}
	public void setAuthors(ArrayList<String> authors) {
		this.authors = authors;
	}
	public ArrayList<String> getGenre() {
		return genre;
	}
	public void setGenre(ArrayList<String> genre) {
		this.genre = genre;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public String getBookCover() {
		return bookCover;
	}
	public void setBookCover(String bookCover) {
		this.bookCover = bookCover;
	}
	
	
	
}
