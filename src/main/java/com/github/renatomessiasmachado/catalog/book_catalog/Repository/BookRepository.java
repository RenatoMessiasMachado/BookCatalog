package com.github.renatomessiasmachado.catalog.book_catalog.Repository;

import com.github.renatomessiasmachado.catalog.book_catalog.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
