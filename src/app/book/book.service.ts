import {Injectable} from '@angular/core';
import {Book} from './interfaces';
import {books} from './book-data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [];

  constructor() {
    this.books = books;
  }

  fetchBooks(): Book[] {
    return this.books.slice();
  }

  getBookById(index: number) {
    return this.books[index];
  }

  removeBook(index: number) {
    this.books.splice(index, 1);
  }

  editBook(index: number, book: Book) {
    this.books[index] = {
      ...this.books[index],
      ...book
    };
  }

  addBook(book: Book): number {
    this.books.push(book);

    // Return index of last book
    return this.books.length - 1;
  }

  addNoteToBook(bookId: number, note: string): Book {
    const book = this.books[bookId];
    if (!book.notes) {
      book.notes = [];
    }
    book.notes.push(note);
    return book;
  }
}
