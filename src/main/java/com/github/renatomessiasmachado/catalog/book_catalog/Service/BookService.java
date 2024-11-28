package com.github.renatomessiasmachado.catalog.book_catalog.Service;


import com.github.renatomessiasmachado.catalog.book_catalog.Book;
import com.github.renatomessiasmachado.catalog.book_catalog.Repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> listAll() {
        return bookRepository.findAll();
    }

    public Book save(Book book) {
        return bookRepository.save(book);
    }

    public Book SearchId(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livro não encontrado"));
    }

    public void delete(Long id) {
        bookRepository.deleteById(id);
    }
}
