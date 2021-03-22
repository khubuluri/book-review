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
    this.books.splice(index);
  }

  editBook(index: number, book: Book) {
    this.books[index] = book;
  }

}
