package com.github.renatomessiasmachado.catalog.book_catalog.Controller;

import com.github.renatomessiasmachado.catalog.book_catalog.Book;
import com.github.renatomessiasmachado.catalog.book_catalog.Service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/book")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> listAll() {
        return bookService.listAll();
    }

    @PostMapping
    public ResponseEntity<Book> save(@RequestBody Book book) {
        Book newBook = bookService.save(book);
        return ResponseEntity.ok(newBook);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> SearchId(@PathVariable Long id) {
        Book book = bookService.SearchId(id);
        return ResponseEntity.ok(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> Update(@PathVariable Long id, @RequestBody Book book) {
        Book bookExistent = bookService.SearchId(id);
        bookExistent.setTitle(bookExistent.getTitle());
        bookExistent.setAuthor(bookExistent.getAuthor());
        bookExistent.setIsbn(bookExistent.getIsbn());
        bookExistent.setPrice(bookExistent.getPrice());
        Book bookSave = bookService.save(bookExistent);
        return ResponseEntity.ok(bookSave);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        bookService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
